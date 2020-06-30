---
id: example3
title: Deploying to EB and ECS + seeded volume
sidebar_label: Deploying to EB and ECS + seeded volume
---

Host configuration, seed data .ebextesntions

Two node APIs

1. Push images to ECR
2. Deploy locally with elastic beanstalk .ebextensions
3. Deploy to the cloud with elastic beanstalk
4. Then launch from docker compose to ECS (without Beanstalk)

## Push images to ECR

Using the `Dockerfile.aws.json` deployment approach.

- 1. Create a repository in ecr for each api

```bash
aws ecr create-repository --repository-name api-1
aws ecr create-repository --repository-name api-2
```

Get the repositoryUri s

- 2. Tag both images with the repository uris

```bash
docker tag api-1 <uri>
docker tag api-2 <uri>
```

- 3. Login into ecr to push the images

```bash
aws ecr get-login --region us-west-2 --no-include-email | /bin/bash
```

- 4. Finally, push the images 🚀

```bash
docker push <uri>
```

## eb extensions file and local deployment

Use eb extensions file to inject data into the EC2's host on launch. For this we need a `.ebextensions` directory with a `files.config` file in it. The `files.config` file contains the instructions for creating json files with seeded data.

```bash
files:
  "/var/lib/docker/volumes/my-named-shared-data/_data/api-1_data.json" :
    mode: "000755"
    owner: root
    group: root
    content: |
      ["1", "2", "3"]
  "/var/lib/docker/volumes/my-named-shared-data/_data/api-2_data.json" :
    mode: "000755"
    owner: root
    group: root
    content: |
      {
      "1": "1.1",
      "2": "2.2",
      "3": "3.3"
      }
```

#### Deploy local

1. Create a `Dockerrun.aws.json` with the definition of the containers adding the ECR repository uri for each one.
2. Run eb

```bash
eb init -k vockey -p "64bit Amazon Linux 2018.03 v2.20.3 running Multi-container Docker 19.03.6-ce (Generic)" --region us-west-2 for_eb
```

This creates an `.elasticbeanstalk` directory with a config file

3. Running `eb local run` will launch both apis locally but it won't use the ebextensions file and thus, the seeded data won't be there.

## Deploy to cloud with EB

1. Create a 1 machine stack in EB, it will use the `.elasticbeanstalk` folder previously created with `eb init ...`

```bash
eb create my-prod --single
```

2. Now we need to allow the apis ports so go into the aws console EC2 service and select the "my-prod" security group. Edit inbound rules, add rule with the port range (8080-8081) and 0.0.0.0/0 IP range.

3. For accessing the api we can take the EB IP

```bash
aws elasticbeanstalk describe-environments --region us-west-2 --environment-names my-prod | grep EndpointURL
```

Making requests to those APIs will return the seeded data.

## Deploy with ECS

> The one major thing that you can't do with Beanstalk that you can do with ECS-EC2 is run multiple tasks on the same host and reduce costs.

Set up four (4) large ECS optimized instances equally balanced across two (2) AZs for High Availability. With each of our api in its own task.

1. We need to create a cluster configuration

```bash
ecs-cli configure --cluster fancy-cluster --default-launch-type EC2 --config-name fancy-cluster --region us-west-2
```

2. Create a cluster based on the configuration

```bash
ecs-cli up --keypair vockey --capability-iam --size 4 --instance-type m4.large --cluster-config fancy-cluster --port 8080
```

This created an internet gateway, a couple of public subnets in a new VPC. It also creates 4 ECS optimized EC2 instance across 2 AZs

3. Create a IAM task role. "Elastic Container Service Task" Use case. "AmazonECSTaskExecutionRolePolicy" permissions. Take the ARN of the role.

4. Create task definitions for api-1. Using the ecs-cli to create our task definition. All we have to do is provide it with our `docker-compose` file AND a small file called `ecs-params.yaml`

`docker-compose`

```yaml
version: "3.0"
services:
  api-1:
    image: "<ecr uri>/api-1"
    ports:
      - "8080:3000"
```

`ecs-params.yaml`

```yaml
version: 1
task_definition:
  task_execution_role: "arn:aws:iam::988770882877:role/fancy-task-role" # role ARN
  task_size:
    cpu_limit: "512"
    mem_limit: "256"
```

5. Create the task definition

```bash
ecs-cli compose --file docker-compose.yaml --ecs-params ecs-params.yaml --region us-west-2 --project-name fancy-project --cluster-config fancy-cluster --cluster fancy-cluster create
```

6. Now we can run tasks manually from the ECS console and have the api running.
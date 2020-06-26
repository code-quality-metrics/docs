---
id: microservices
title: Microservices and networking
sidebar_label: Microservices and networking
---

Microservices and modularity within your system.

#### ECS

ECS is an orchestration tool for EC2. Service for running and managing containers.

#### Cloudwatch

**Cloudwatch** for monitoring.
Container Insights is available for Amazon Elastic Container Service, Amazon Elastic Kubernetes Service, and Kubernetes platforms on Amazon EC2. The metrics include utilization for resources such as CPU, memory, disk, and network. Container Insights also provides diagnostic information, such as container restart failures, to help you isolate issues and resolve them quickly. You can also set CloudWatch alarms on metrics that Container Insights collects.

#### Fargate

**Fargate** reduces the preliminary setup for hosting containers in EC2. Serverless compute engine, allows to host containers in a fully managed commpute platform (no infrastructre set up). ECS still manages the container lifecycle. EC2 is abstracted when using Fargate.

For fargate we need to configure image, Memory, CPU, network(vpc, subnets, security groups), IAM permissions

EC2 charges per instance hour or second, with Fargate you pay just for the time the server is up.

### key concepts

- **Cluster**: logical isolation boundary for the infrastructure that hosts the containers. Can expand multiple availability zones. (abstracted in fargate)

- **Task**: wrapper to run a container. Has a task definition (image, tag, memory, CPU, ports, shared volumes). An app can expand multiple task definition.

- **Service**: allows to configure the tasks in the cluster, load balancer, subnet, sec groups...

### Creating Clusters, tasks and services

- 1. Create load balancer for publishing the port 80

```bash
aws elbv2 create-load-balancer --name...
```

- 2. Target group (where our tasks will run) define the port (8080)

```bash
aws elbv2 create-target-group --name...
```

- 3. Create a listener. It'll listen to http requests in port 80 and route them to the target group in 8080

```bash
aws elbv2 create-listener --load-balancer-arn...
```

- 4. Create cluster

```bash
aws ecs create-cluster --cluster-name...
```

- 5. Create task definition (needs IAM roles). Take the image from the repository in ECR (the uri) that should be included in the container definition of the task definition.

```bash
aws ecs register-task-definition...
```

- 6. Create a service that uses the task definition to launch a task

```bash
aws ecs create-service --cluster...
```

- 7. List the services in the cluster

```bash
aws ecs list-services --cluster...
```

- 8. Grab the DNS of the load balancer in the EC2 management console. That url can be publicly accessed with the website.

### Get traffic to tasks

Through a load balancer. (ALB) Application Load Balancer recommended for HTTP and HTTPs.
Provides Dynamic host port mapping and path based routing (routing requests based on the url /api/user /api/product).

### Communicate with other containers

Done on the task definition with the Network mode

- None: containers cannot talk to anything and there are no port mappings.
- Bridge: Each task gets an IP and communicates over the Docker bridge. Containers share the network interface fo the host EC2 instance.
- Host: map container ports into the EC2 instance's network interface. Does not allow multiple tasks from the same service to be place in the same container instance. No dynamic port mapping
- AWS VPC: every tasks gets the same networking properties as the EC2 instance.

### Container storage

By default containers do not have persistent storage.
The data needs to be externalize outside the container. For this we have several options:

- **Bind mount**: A file or folder stored on the container host filesystem and mounted into a running contianer.
- **Volumes**: Stored in the host file system but managed by the container manager. **(Preferred method)**

EBS (Amazon Elastic Block Store) provides EBS volumes tight to availability zones. (need to clone volumes if want to access the same one from multiple containers)

https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html
https://aws.amazon.com/blogs/mt/introducing-container-insights-for-amazon-ecs/
https://docs.docker.com/storage/volumes/
https://aws.amazon.com/microservices/

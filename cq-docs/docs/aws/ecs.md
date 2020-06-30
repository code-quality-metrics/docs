---
id: ecs
title: ECS
sidebar_label: ECS
---

Amazon Elastic Container Service: components, task management, deployment, secret handling...

Container orchestration platforms -> handle spinning up containers, network, permissions, other service integration. ECS is the orchestration platform in AWS.

ECS has a control plane and a data plane. The control plane is responsible for provisioning software, manage lifecycle of resources, support data plane. And the data plane provides the capacity to complete requests (from the control plane).

ECS can work on top of a cluster of EC2 instances or on top of Fargate. The EC2 cluster is the data plane.

``` diagram
User -> ECS API -> EC2 cluster
User -> control plane -> data plane
```

### Components

- **Task definition** -> json file to describe up to 10 containers
- **Task** -> an instance of a task definition inside a cluster
- **Scheduler** -> places tasks in a cluster
- **Cluster** -> group of compute resources (logical), EC2 or Fargate
- **Service** -> run and maintain tasks simultaniosly
- **Container agent** -> runs on each compute node of the cluster. Sends info about utilization and the running task, starts and stops tasks.

### Scheduling tasks in the cluster

**Scheduling engine** -> How when and where to start and stop containers. ECS provides differnet schedulers.

Service Scheduler is one of them, it'll reschedule tasks if they fail maintaing always the configured number of tasks running. It has strategies, like the daemon strategy that allows one task to always run in every instance of the cluster.

EventBridge has the cron scheduling to run process at certain time.

**Placement engine** -> decides which instance gets the task. It has strategies and constraints. Constraints allow to filter out instances, for example never run two given tasks together. Strategies determine how to place instances (binpack, spread...)

### How to host containers, example

Given a pushedd image to ECR

1. create cluster

```bash
aws ecs create-cluster ...
```

2. Now that the cluster is created we need to add EC2 instances to it.

```bash
aws ec2 run-instances --count 2...
```

3. Now instances are running we can create the task definition

```bash
aws ecs register-task-definition ...
```

4. Create a service to run the task in the cluster

```bash
aws ecs create-service...
```

Now the tasks will be running in the cluster. We can describe the tasks and see which EC2 instance they are running in, take the public DNS name and access it from a browser.

 https://www.youtube.com/watch?v=cpqvIEgngcY&list=PLhr1KZpdzukfWFTsOD_WynnY2-e8TY8fH&index=5
 https://aws.amazon.com/ecs/faqs/ 
 https://docs.aws.amazon.com/AmazonECS/latest/userguide/security_iam_service-with-iam.html
 https://aws.amazon.com/blogs/aws/aws-fargate-spot-now-generally-available/ 
 https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html 
 
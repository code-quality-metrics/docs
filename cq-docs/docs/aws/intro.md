---
id: intro
title: Introduction
sidebar_label: Introduction
---

## Virtualization and Containerization

> Virtualization: decouple workloads from the underline hardware. VMs mimic a hardware environment and will need a full OS. Containerization provides an extra layer of virtualization on top of the os.

Containers are more focused.

Terms:

- Container: overall package and environment. It has dependencies and env variables.
- Image: the config needed for launching a container.
- Registry: repository of images. (docker hub, ECR Elastic Container Registry)

## Docker

Docker components

- Docker client: CLI for interacting with docker
- Docker ddaemon: manages docker images (performs commands from the cli and provides access to hardware)
- Image registry: same as before
- Docker image are *read only* artifacts.

> docker file -> docker image (pulled from docker registry) -> docker container (run on docker host)

keywords for docker files

- **FROM** - set base image
- **LABEL** - set metadata
- **RUN** - execute commands in a terminal
- **COPY** - from machine into the image
- **WORKDIR** - set working directory
- **EXPOSE** - expose ports
- **ENTRYPOINT** - what to run when starting the container
- **CMD** - execute at runtime

https://docs.docker.com/engine/reference/builder/

cli

```shell
docker run hello-world # pulls and runs hello world image 
# (-p ports)
docker build # builds an image
docker images # show created images in the host
docker container ls # show containers in the host
docker inspect # allows to see the layers of an image
docker exev # execute something inside the container
docker exec -t id bash # creates a bash in the container
docker ps # lists containers
docker logs id # show logs
docker stop id # stop a container
docker rm id # remove container
```

https://docs.docker.com/engine/reference/commandline/docker/

Docker uses a union file system and copy-on-write strategy. The original image is not changed. Each container gets a writable top layer version of the image.

Persistence in docker should go to volumes.

https://docs.docker.com/get-started/overview/

## AWS tools

### ECR

Best option *in AWS* for image registry. Private docker repos (using IAM) accessed by docker cli.

### AWS Elastic beanstack

autoscaling, app managing, only pay for the underlying resources. It uses ECS under the hood.

### C9

Bought by AWS, IDE integrated in the AWS console.

https://docs.docker.com/engine/reference/builder/#entrypoint
https://docs.docker.com/engine/reference/builder/#cmd
https://docs.docker.com/engine/reference/builder

---
id: example1
title: Building and publishing images
sidebar_label: Building and publishing images
---

## Running containers

Dockerfile:

Create a docker file and a file to copy boo.txt

```Dockerfile
FROM alpine
COPY boo.txt /boo_inside_my_container.txt
```

Build an image from alpine distro
`docker build --tag scare_me .`

See the image. Here we'll also see an alpine image that is the read-only layer pulled on the docker file (FROM alpine)
`docker images`

Run and open a terminal in the container. From the terminal we can cat the txt file copied.
`docker run -ti scare_me bin/sh`

---

From a Dockerfile of a flask application

```Dockerfile
FROM python:3.6
COPY . /appdir
WORKDIR /appdir
RUN pip install Flask==1.0.2
EXPOSE 5000
CMD ["python", "app.py"]
```

build
`docker build --tag flask-tutorial .`

run
`docker run -d --name flask-tutorial -p 5000:5000 flask-tutorial`

## Pushing to ECR

login docker to ECR from the cli. Create repo in ECR
`aws ecr create-repository --repository-name flask-tutorial`

re tag the image with the repository uri
`docker tag flask-tutorial:latest 009520672266.dkr.ecr.us-west-2.amazonaws.com/flask-tutorial:latest`

Push to ECR
`docker push 009520672266.dkr.ecr.us-west-2.amazonaws.com/flask-tutorial:latest`

Check
`aws ecr list-images --repository-name flask-tutorial`

https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html

## Publish with Elastic Beanstalk

zip the app and push it to a new Application in EB with Docker as the platform.

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker.html

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html

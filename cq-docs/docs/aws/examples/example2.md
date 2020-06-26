---
id: example2
title: Multi container with shared data
sidebar_label: Multi container with shared data
---

Purpose:

- Launch more than one container together by deploying multiple node APIs.
- Share data among containers
- Seed data
- Use Elastic Beanstalk's multi container option to deploy locally

## 1. Create images and a shared volume

We'll follow the **Microservice Architecture**.

1. Create images for each api. Based on an existing Dockerfile we'll create images:
`docker build --tag api-1 .`

2. Run the first image with a shared volume
`docker run -d --name api-1 -v my-shared-volume:/contains_api_1_data -p 8080:3000 api-1`
-v option sets the volume, when running the image for api-2 we'll use the same volume and it'll be shared.
`docker run -d --name api-2 -v my-shared-volume:/contains_api_2_data -p 8081:3000 api-2`
Note that the port is different since it'll be the host port and cannot be shared.

3. Check that the volume is shared
Run `docker exec -it api-1 df -h` and see that */contains_api_1_data* is mapped to */dev/xvda1*
If we create something there, it'll be available for both containers:
`docker exec -it api-1 touch /contains_api_1_data/api1.txt` -> create file from api-1
`docker exec -it api-2 ls /contains_api_2_data` -> see file form api-2

## 2. Pre-seed a volume with some data and then share that

A volume created like in step 1.2. is temporary, initially empty.

Two patterns **Anonymous volume** vs **Named volume**. Anonymous volume is not considered best practice.

### Anonymous volume

Create a brand new container (from an image like normal) who's sole purpose is to have it create a temporary (unnamed) volume during the build process. This volume can be pre-filled  with some data.

1. Create a directory with static data and a Dockerfile as follows:

```docker
FROM node:11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
VOLUME /the-shared-folder
COPY . /the-shared-folder
CMD tail -f /dev/null # this will prevent the container from exiting
```

2. Create and image and run it.

3. Re run the api images using the new volume (shared-data is the name of the previous container)
`docker run -d --name api-1 --volumes-from shared-data -p 8080:3000 service-api`

4. Test that the volume folder is there.
`docker exec -it service-api ls /`
You should see */the-shared-folder*

### Named volumes

Create a named volume first outside of your main docker build process.  Then you reference it in a docker-compose file along with all your other settings.

1. Create a docker-compose file to orchestrate everything:

```
version: "3.7"
services:
  api-1:
    image: api-1
    networks:
      - backend
    ports:
      - "8081:3000"
    volumes:
      - shared-data:/api-1_data

  api-2:
    image: api-2
    networks:
      - backend
    ports:
      - "8080:3000"
    volumes:
      - shared-data:/api-2_data

volumes:
  shared-data:
    external: "true"
  
networks:
  backend:
    driver: bridge
```

2. Create the named volume
`docker volume create shared-data`
With `docker inspect shared-data` you can check where the volume is stored (/var/lib/docker/volumes/shared-data/_data)

3. Copy some files into that directory.

4. Run docker compose `docker-compose up` or `docker-compose start` (this wont hold the command line)

## 3. Local deploy with Elastic Beanstalk

> It uses docker-compose under the hood

3 main ways to deploy to beanstalk if you are deploying a single container to a host:

1. Create a Dockerfile to have Elastic Beanstalk build and run a custom image.
2. Create a Dockerrun.aws.json file to deploy a Docker image from a hosted repository to Elastic Beanstalk.
3. Create a .zip file containing your application files and any application file dependencies.  The Dockerfile and the Dockerrun.aws.json file.

### Option 3

1. Create a Dockerrun.aws.json file with the definition of the volume and the two containers.
2. Initialize the configuration `eb init -k vockey -p "64bit Amazon Linux 2018.03 v2.20.3 running Multi-container Docker 19.03.6-ce (Generic)" --region us-west-2 for_eb`
3. Run locally `eb local run`

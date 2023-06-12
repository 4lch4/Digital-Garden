---
title: Don't Rebuild Your Docker Image Locally
description: |
  Instead of rebuilding your Docker image every time you make a change, it's much faster to mount your local directory to the image and then restart it.
authors: [4lch4]
date: 2021-10-05
tags: [productivity, docker, learning, tips]
keywords: [productivity, docker, learning, tips]
slug: dont-rebuild-docker-locally
---


A few weeks ago, I came across [this article][0] titled "You Don't Need to Rebuild Your Development Docker Image on Every Code Change." As I use Docker for most of my projects, this piqued my interest. The gist of it is, you can mount your local development directory to a Docker image instead of copying your source code to the image and building it.

While you wouldn't want to do this for anything other than local development, it does help _drastically_ with making changes and seeing them reflect as quickly as possible.

## Key Words

To properly discuss this new method, there's a few words/phrases that are helpful to know:

- OG/Original Method
  - This refers to the original method of building a Docker image from scratch by copying your source code and executing the build commands.
- Mounting
  - This method is when you mount your local development directory to the Docker container.

## Example

I have an API called [Ansel][1] that serves as a gateway to images I have stored in a DigitalOcean Spaces bucket. It's written in TypeScript and relatively lightweight, so doing a complete build of my Docker image takes just under 50 seconds. I'll use this repo to demonstrate just how much faster it can be.

### Initial Dockerfile

```Dockerfile
FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm i
RUN npm run package

EXPOSE 3000

CMD ["npm", "start"]
```

### Initially Building the Image

```bash
$ docker build -t 4lch4/ansel .
[+] Building 46.4s (10/10) FINISHED
=> [internal] load build definition from Dockerfile                                                              0.0s
=> => transferring dockerfile: 37B                                                                               0.0s
=> [internal] load .dockerignore                                                                                 0.0s
=> => transferring context: 34B                                                                                  0.0s
=> [internal] load metadata for docker.io/library/node:16                                                        0.5s
=> [1/5] FROM docker.io/library/node:16@sha256:a1118930ecc77da1ce4b19ac8c17adf386b7bb36b348111437f1cfca5a5c9fd7  0.0s
=> => resolve docker.io/library/node:16@sha256:a1118930ecc77da1ce4b19ac8c17adf386b7bb36b348111437f1cfca5a5c9fd7  0.0s
=> [internal] load build context                                                                                 0.0s
=> => transferring context: 9.26kB
=> CACHED [2/5] WORKDIR /usr/src/app                                                                             0.0s
=> [3/5] COPY . .                                                                                                0.1s
=> [4/5] RUN npm i                                                                                               27.8s
=> [5/5] RUN npm run package                                                                                     13.6s
=> exporting to image                                                                                            4.3s
=> => exporting layers                                                                                           4.2s
=> => writing image sha256:0134eb71af8bd2d12073779b02bc91fdf66b1c4774995f27833672d5476b2c7a                      0.0s
=> => naming to docker.io/4lch4/ansel                                                                            0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
✨  Done in 47.59s
```

At this point, we can start a container using the new image and begin making requests. Overall, 50 seconds doesn't sound like much, but it can add up over time, and some apps take even longer to build.

### Building w/ a Mounted Directory

Now let's see how fast it is to get the same results with a mounted directory. First up, we need to change our Dockerfile not to copy any code or run any build commands. We do this because the code will be built locally and just "attached" to the Docker container.

```Dockerfile
FROM node:16

WORKDIR /usr/src/app

# COPY . .

# RUN npm i
# RUN npm run package

EXPOSE 3000

CMD ["npm", "start"]
```

```bash mounted.sh
#!/bin/bash

docker stop ansel
docker rm ansel

yarn package

docker run -d \
  -e AWS_ACCESS_KEY_ID="AWS_ACCESS_KEY_ID" \
  -e AWS_SECRET_ACCESS_KEY="AWS_SECRET_ACCESS_KEY" \
  -e APP_NAME="Ansel" \
  -e VERSION="1.0.0" \
  -e PORT=3000 \
  -e API_PREFIX="/api/v1" \
  -e SPACES_ENDPOINT="SPACES_ENDPOINT" \
  -e BUCKET_NAME="ansel" \
  -e IMG_BASE_URL="https://ansel.4lch4.tech" \
  --mount "type=bind,source=$(pwd),target=/usr/src/app" \
  -p 3000:3000 --name ansel 4lch4/ansel:latest

./mounted.sh  8.81s user 0.53s system 119% cpu 7.793 total
```

As you can see, we went from roughly 50 seconds to 8 seconds to restart a Docker container with our latest changes, which is a _huge_ improvement.

## Why Does This Speed Things Up?

This method is so much faster because we're not copying the code to the image and transpiling it. Instead, we're just attaching the local directory to the container where the transpiled code already exists. This means that our code is already built, and we don't have to worry about rebuilding it within the image.

Consider the following scenario using the Ansel repository/API. Our end goal is to add a new route called /error that returns a 500 for testing purposes:

1. We cloned the repo and need to make sure it'll run.
2. Run `yarn docker:build`, which runs the Docker build command.
   1. This will create an image that copies over your code and runs the build/package commands.
3. Next, run `yarn docker:start` and the container spins up.
4. Now, we make a test call (curl localhost:3000/API/v1/health) to ensure the app is online.
5. We can open a terminal and execute `tsc --watch` to build our code as we work on it, meaning we don't have to wait or run another command after making changes.
6. To get these new changes to the Docker container, you have two options:
   1. Use the original method of copying over your code and running build commands.
   2. Use a mount to attach your local directory where the code from `tsc --watch` is output.

If we use the original method, Docker has to copy your code and run all the build commands needed to get working code.

If we use the mounting method, then we only have to restart the container and make sure the new container has our local directory mounted. This means we don't have to run a `docker build` command, just the starting ones.

## What's The Difference in Commands?

There's not much difference between running a container using the OG method and the mounting method. Thankfully, they both use the `docker run` command; there's just an extra parameter you need to provide for mounting.

### OG Method

For the OG method, we'd run the following commands to restart the container with the latest code:

```bash
#!/bin/bash

docker stop ansel
docker rm ansel

docker build -t username/app-name:latest .

docker run -d -p 3000:3000 --name ansel username/app-name:latest

docker logs Ansel --follow
```

### Mounted Method

For the mounted method, we only need to provide the `--mount` parameter to the run command, which looks like so:

```bash
#!/bin/bash

docker stop ansel
docker rm ansel

docker build -t username/app-name:latest .

docker run --mount="type=bind,source=$(pwd),target=/usr/src/app" -d -p 3000:3000 --name ansel username/app-name:latest

docker logs Ansel --follow
```

The critical part of this parameter is the source and target values, so let's break it down.

#### Source

The source, in this case, is the current directory since this command is run from the root directory of my project. If your project is in a subdirectory, you will reference it like `source=$(pwd)/subdirectory`. If this isn't set correctly, the Docker container will look in the wrong spot for your source code.

#### Target

The target is where Docker will mount your files within the container. If you remember, in our Dockerfile, we use `WORKDIR /usr/src/app`, so we want to make sure our code/directory is mounted to the exact location. Because of this, we set the target value to `/usr/src/app`, so don't forget to make sure this lines up with your Dockerfile.

If you have any questions or suggestions, please don't hesitate to reach out! You can find me on several sites, all of which I link to on my [socials site][2].

[0]: https://vsupalov.com/rebuilding-docker-image-development/
[1]: https://github.com/4lch4/Ansel
[2]: https://4lch4.social


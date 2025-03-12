```
A simple example of an image that runs an express server.
Run following to start it
- cd playgorund1
- docker build -t "my-image" .
- docker run -p 3000:3000 my-image
```

## Basics
- Dockerfile with intructinos to an image
- docker build -t "arbitrary-image-name:version3" ./path-to-Dockerfile
- docker images - to list images
- docker run to spin up a container e.g docker run -p 3000:3000 arbitrary-image-name:version3
- run the build command after changing the Dockerfile

## Listing
- docker images
- docker ps - processes aka containers
- docker ps -a - see all (incl stopped) containers

## Advanced 
- Name the container docker run --name my_custom_name <image_name>

## Gotchas
- If you don't name the container they get funny names like e.g modest_moore etc. This can be confusing and almost look malicious.
- closing the terminal window will not kill the container process.
- You need to expose ports when spinning up a docker container. e.g docker run -p 3000:3000 <your_image_name>


## Clean up containers and images
- you cannot remove a Docker image if there is a running container that is using that image
- Stop and remove the container first before removing the image.
- docker stop <container_id>
- docker rm <container_id>
- docker rmi <image_id>
- docker rmi -f <image_id>
- If you want to forcefully stop and remove all containers (without needing to stop them first), you can use the -f flag with the rm command:
  - docker rm -f $(docker ps -aq)
- Force remove all images
  - docker rmi -f $(docker images -q)

## Docker filesystem
Similar to Linux filesystem hierarchy. Common directories include:
- /bin: Executable binaries
- /etc: Configuration files
- /usr: User programs and data
- /var: Variable data (like logs)
- /tmp: Temporary files
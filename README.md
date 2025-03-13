```
Example of docker-compose which creates 2 express services, one that writes a message to a txt file and one that reads from it. 

This is to demonstrate how two containers can communicate between each other and how we can use a volume to stored (persistent) data between them.

- `server1` writes to file on volume
- `server2` reads from file on volume
- `volume` store the data
```

## How to run
- navigate to playground2 where the compose file lives
- `docker compose up --build`
- `curl http://localhost:3001/write` or use the browser
- `curl http://localhost:3002/read` or use the browser
- Expected to see some output on the 3002 server.



## Gotchas 
- `docker compose up --build .` is invalid: compose does not take any source as argument. Instead, navigate to the folder where the `docker-compose.yml` lives and run `docker compose up --build` without the `.`
- `docker-compose.yml` is lower case and has the `.yml` extension.
- `Dockerfile` is Pascal cased and has no file extension.
- Windows and macOS uses a temporary container to mount the volume and access its data while data can be accessed from the host on a Linux system.

## Accessing the volume data
- `docker volume ls` Find the name of the volume
- `docker run --rm -it -v <volume_name>:/data alpine sh` Spin up a new alpine container end enter the shell
  - Note: the `:/data` creates a folder where we could access the data.
- Once in container shell `cd data`
- *OR...* simply go into a container that uses the volume, in this case it would be
  - `docker exec -it server1 bash`
  - `cd /data`

## More about Volumes

- List volumes: `docker volume ls`
- Inspect a volume: `docker volume inspect <volume_name>` to find info like mount point etc.
- Spin up a container to access the data `docker run --rm -it -v <volume_name>:/data alpine sh`
  - `--rm` This option tells Docker to automatically remove the container when it exits.
  - `-i` (interactive): This option keeps STDIN open even if not attached. It allows you to interact with the container.
  - `-t` (terminal) for the container, which makes it possible to interact with the shell in a more user-friendly way. Together, -it allows you to run an interactive shell session inside the container.
  - `-v <volume_name>:/data` mounts a Docker volume into the container. The syntax is `-v <source>:<destination>`, where:
  - `<volume_name>`: Docker volume you want to mount. 
  - `/data:` This is the path inside the container where the volume will be mounted. In this case, the contents of the specified volume will be accessible at /data within the container.
  - `alpine` This specifies the Docker image to use for the container. In this case, it is the alpine image, which is a minimal Docker image based on Alpine Linux. It is lightweight and commonly used for running simple applications or for testing.
  - `sh` This is the command that will be executed when the container starts. In this case, it starts a shell (sh) inside the Alpine container. This allows you to interact with the container's filesystem and execute commands.
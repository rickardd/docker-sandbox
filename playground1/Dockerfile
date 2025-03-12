FROM node:20

RUN echo "Running image"

# When you specify WORKDIR /usr/src/app, you are telling Docker to change the current working directory to /usr/src/app for any subsequent commands (like RUN, COPY, CMD, etc.) in the Dockerfile.
# If the specified directory does not exist, Docker will automatically create it.
# It's a good practice to use a consistent and meaningful path that reflects the purpose of the directory. For example, /usr/src/app is a common convention for application code in Docker containers.
# This path indicates that the directory is intended for source code, making it clear to anyone reading the Dockerfile what the directory is used for.
# Absolute path is preffered for clarity
# Docker Filesystem: When you specify a path like /usr/src/app, you are referring to a path within the filesystem of the Docker container, not the host machine. Each Docker container has its own isolated filesystem.
WORKDIR /usr/src/app
# To access this path 
# docker exec -it strange_maxwell /bin/bash
# And then go to /usr/src/app we'll find the files we copied and created.
# - node_modules
# - package-lock.json
# - package.json
# - src
# This path is not accessible from the host, only in the container

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

RUN npm install

# Copy Source Destination
# The source path is relative to the build context, which is the directory where you run the docker build command.
# The destination path is relative to the working directory set in the Dockerfile (in this case, /usr/.../playground1/src/app).
COPY src ./src

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

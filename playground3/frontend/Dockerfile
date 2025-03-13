# Use a lightweight web server
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install -g http-server

# Copy the rest of the application code
COPY . .

# Expose the web server port
EXPOSE 8080

# Start the web server
CMD ["http-server", "-p", "8080"]

FROM node:20

WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY ./src ./src 

# Expose the API port
EXPOSE 3000

# Start the application
CMD ["npx", "nodemon", "src/index.js"]

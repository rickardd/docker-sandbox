FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY index.js ./

EXPOSE 3002
CMD ["npm", "start"]

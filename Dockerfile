FROM node:14
WORKDIR /usr/usr/clean-node-api
COPY ./package.json .
RUN npm install --only=prod

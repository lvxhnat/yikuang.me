FROM debian:buster-slim 
FROM node:14.17.3 AS build-stage

WORKDIR /app/frontend
ENV PATH=/app/node_modules/.bin:$PATH

# Update package sources to use Debian Buster repositories
RUN sed -i 's/stretch/buster/' /etc/apt/sources.list

COPY package.json .
RUN npm install --silent

COPY . .

RUN npm run build

EXPOSE 3000
FROM debian:buster-slim

FROM node:20-alpine as build-stage

WORKDIR /app/frontend
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn config set progress false
RUN yarn config set enableStrictSsl false
RUN yarn install --frozen-lockfile --network-timeout=3000000 --network-concurrency 1 --prefer-offline --no-progress && yarn cache clean
COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]

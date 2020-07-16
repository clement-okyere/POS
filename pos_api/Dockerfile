FROM node:12.13.0-alpine AS builder

WORKDIR /home/node/app


COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8001

USER node

EXPOSE 8001

CMD node dist/boot.js
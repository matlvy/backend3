# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}


ENV NODE_ENV dev


WORKDIR /app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .

EXPOSE 8081

CMD npm start

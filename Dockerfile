ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]

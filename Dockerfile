
FROM node:16.15-alpine

USER root

WORKDIR /app

COPY . ./

RUN yarn install --development && yarn cache clean

CMD ["yarn", "start"]

EXPOSE 8000
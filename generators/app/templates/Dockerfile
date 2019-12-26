FROM node:13 AS compile-env

WORKDIR /src

COPY . /src

RUN apt-get update -y && apt-get install zip && bash ./shells/build.sh

FROM node:13-alpine

WORKDIR /application

COPY --from=compile-env /src/*-zip-dist /application

EXPOSE 3000

CMD npm run serve

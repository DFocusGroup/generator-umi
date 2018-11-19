FROM node:11-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN sh ./shells/delunuseddeps.sh

EXPOSE 3000

CMD npm run serve

FROM jkilbride/node-npm-alpine:8

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh


COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

EXPOSE 3000
CMD PORT=$PORT npm start

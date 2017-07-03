FROM node:7.7.2-alpine

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /app

COPY . /app.

CMD npm start

EXPOSE 3000

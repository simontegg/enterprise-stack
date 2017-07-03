FROM mhart/alpine-node-auto:latest

COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json

RUN cd /tmp && npm install --quiet
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

EXPOSE 3000
CMD ["npm", "start"]

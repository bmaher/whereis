FROM ubuntu:wily
MAINTAINER Brian Maher "whereis@bmaher.com"

RUN apt-get -qq update
RUN apt-get -qq install nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN mkdir -p /var/log/nodeapp

ADD nodeapp /opt/nodeapp/

WORKDIR /opt/nodeapp
RUN npm install

VOLUME [ "/var/log/nodeapp", "/data" ]

EXPOSE 3000

ENTRYPOINT [ "nodejs", "server.js" ]

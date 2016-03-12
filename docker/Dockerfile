FROM ubuntu:trusty
MAINTAINER Brian Maher "briancmaher@gmail.com"

RUN apt-get -qq update
RUN apt-get -qq install nginx

VOLUME [ "/var/www/html/website" ]

ADD nginx/global.conf /etc/nginx/conf.d/
ADD nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

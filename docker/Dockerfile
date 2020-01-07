FROM node:9
MAINTAINER Pereskokov Vladislav (v.pereskokov@ivpa.ru)

ARG BUILD
ARG PORT

RUN apt-get update -y
RUN apt-get install -y nginx supervisor curl
RUN chown -R www-data:www-data /var/lib/nginx

COPY ./etc/nginx/sites-available/${BUILD}-docker.conf /etc/nginx/sites-enabled/
COPY ./etc/nginx/nginx.conf /etc/nginx/

COPY ./etc/supervisord/ssr.conf /etc/supervisor/conf.d/ssr.conf

RUN rm -rf /var/www/html/*
RUN mkdir -p /var/www/html/
WORKDIR /var/www/html/

COPY . /var/www/html/

WORKDIR /var/www/html/
RUN npm i nodemon -g && npm i && npm run build:${BUILD}

EXPOSE ${PORT}
CMD ["/usr/bin/supervisord"]

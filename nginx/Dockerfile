FROM nginx:latest

ARG config_file

COPY ${config_file} /etc/nginx/nginx.conf
COPY http.ssl_maps /etc/nginx/http.ssl_maps
COPY https.rewrites /etc/nginx/https.rewrites
RUN mkdir -p /var/log/nginx

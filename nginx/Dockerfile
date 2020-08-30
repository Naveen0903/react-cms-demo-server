FROM nginx:latest

ARG config_file

COPY ${config_file} /etc/nginx/nginx.conf
COPY http.ssl_maps /etc/nginx/http.ssl_maps
COPY https.rewrites /etc/nginx/https.rewrites
#COPY map.conf /etc/nginx/map.conf
#COPY careersites.conf /etc/nginx/careersites.conf

# RUN mkdir /etc/nginx/dev
# RUN mkdir /etc/nginx/dev/careersite
# COPY dev/. /etc/nginx/dev/.
# COPY dev/careersite/. /etc/nginx/dev/careersite/.

# RUN mkdir /etc/nginx/prod
# RUN mkdir /etc/nginx/prod/careersite
# COPY prod/. /etc/nginx/prod/.
# COPY prod/careersite/. /etc/nginx/prod/careersite/.

RUN mkdir -p /var/log/nginx

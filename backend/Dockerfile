FROM node:12.16.2
RUN mkdir -p /usr/backend
# RUN mkdir -p /usr/backend/logs
# RUN mkdir -p /usr/data
# RUN mkdir -p /data/db

WORKDIR /usr/backend
COPY package.json /usr/
RUN npm install
RUN npm install pm2 -g
RUN npm rebuild bcrypt --update-binary

COPY . /usr/backend
EXPOSE 5300
#CMD ["node", "server.js"]
CMD ["pm2-runtime", "pm.config.js", "--env", "production"]

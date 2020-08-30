# ### --------------------------------------
# # Stage 1 - the build process
# FROM node as build-deps
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN yarn
# COPY . ./
# RUN yarn build

# ### --------------------------------------
# # Stage 2 - the production environment
# FROM nginx
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# WORKDIR /usr/share/nginx/html


# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# Stage 1 - the build process
FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . ./

## Copy the configuration file based on type of env
# ARG config_file
# COPY ./src/utils/${config_file} ./src/utils/settings.js

# Build after coping configuration files
RUN yarn build

### --------------------------------------
# Stage 2 - the production environment
# FROM nginx
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# WORKDIR /usr/share/nginx/html
# EXPOSE 4040
# CMD ["nginx", "-g", "daemon off;"]


# Stage 2 - the production environment
FROM node
RUN yarn global add serve
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/build .
EXPOSE 8000
CMD ["serve", "-p", "8000", "-s", "."]


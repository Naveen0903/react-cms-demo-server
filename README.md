# Client Management System

A simple client management system software.

features:
- Client information tracking.
- Task tracking.
- Deala/Contracts value tracking.
- Performance tracking.
- Backend API's that can be integrated to any frontend service.

Technologies used:
- Developed using MERN stack.
- Packed with docker for easy development, deployment and CI/CD/CT setup .

Scope of project:
- Platform independent web application.
- Containerised applications - performance and maintainence free.
- Simple architecture.
- Secured environment.
- Faster development and delivery of application updates.
- Log management for faster debugging of issues.

Requirement (production):
- Ubuntu(preferred)/ windows
- Mogodb (local or atlas server).
- Docker and docker compose.

Requirement (development):
Apart from requirement mentioned in production, following need to be installed
- Node.js and npm
- Visual studio IDE(Preferred)/ your favourite editor
- nginx

Steps to run the project:
-> Install mogodb locally else obtain the mongodb connection URL from the mongo atlas server.
-> In case of atlas server connection, following variables need to be set in env file.
    MONGO_URL=<MONGO_URL>
    NODE_ENV=production/development/local
    WHITELISTED_URL=http://localhost;http://localhost:3000;<other url that is allowed access the backend API>
    BACKEND_URL=http://localhost:5300/api
-> env file name should be based on the environment.
  local.env -----> local mode.
  dev.env -------> development mode.
  prod.env ------> production mode.
-> Mongodb URL and backend URL should also be set in next.config.js of frontend project because this project uses next.js framework which doesnt read env files.
-> Finally shoot up the following commands in the terminal.
  
  for running project in local mode,
  docker-compose -f docker-compose.yml -f docker-compose-local build
  docker-compose -f docker-compose.yml -f docker-compose-local up
  
  for running project in devolopment mode,
  docker-compose -f docker-compose.yml -f docker-compose-dev build
  docker-compose -f docker-compose.yml -f docker-compose-dev up
  
  for running project in production mode,
  docker-compose -f docker-compose.yml -f docker-compose-prod build
  docker-compose -f docker-compose.yml -f docker-compose-prod up

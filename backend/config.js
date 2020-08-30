var SERVER_ENV = process.env.NODE_ENV || "local";

var HOST  = '0.0.0.0';
var APP_PORT = 5300;
var MONGO_CONNECT_URL = process.env.MONGO_URL || "mongodb://localhost:27017/Client_Management_System";
var LOG_LEVEL = process.env.LOG_LEVEL || 'warn';

if(SERVER_ENV === "local") {
  console.log("Inside local !!!");
  HOST  = '127.0.0.1';
  console.log(HOST);
  LOG_LEVEL = 'debug';
} else if(SERVER_ENV === "production") {
  console.log("Inside production !!!");
} else {
  throw "ERROR - Server Env not specified";
}

var whitelist = process.env.WHITELISTED_URL.split(";");
// var whitelist = ['http://localhost','http://localhost:3000', 'http://localhost:3000/*', 'http://localhost:8000'];
//CORS_URL.split(';');
var CORS_OPTIONS = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, { origin: true })
    } else {
      callback(new Error('Not allowed by CORS'), { origin: false })
    }
  }
}

console.log("Running Dashboard @ " + SERVER_ENV);
console.log("DB Connection @ " + MONGO_CONNECT_URL);

module.exports = {
    mongoUrl: MONGO_CONNECT_URL,
    host: HOST,
    appPort: APP_PORT,
    logLevel: LOG_LEVEL,
    corsOptions: CORS_OPTIONS
};

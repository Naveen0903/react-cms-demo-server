const express = require('express');
const app = express();
const formidable = require("express-formidable");
const index = require("./routes/index");
// const router = express.Router()
const path = require("path");
const cors = require("cors")
const parser = require("body-parser");
const config = require("./config");

global.appRoot = path.resolve(__dirname);

process.on("uncaughtException", function(err) {
    logger.error("Uncaught Exception " + err);
  });
  

app.use(cors(config.corsOptions));
app.get('/', (req,res) => {
    res.send("404 Not Found");
});
app.use(formidable());

app.use('/api', index);
app.use(parser.urlencoded({limit: '10mb', extended: true}));
app.use(parser.json({limit: '10mb', extended: true}));
// app.use('/dashboard',Dashboard)

app.listen(config.appPort,function(){
    console.log('listening @ '+ config.appPort)
});

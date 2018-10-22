const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const fileUpload = require('express-fileupload');
const cors = require('cors');
const busboy = require('connect-busboy');
const db = require("./models");
const fs = require('fs');
var https = require('https');


//Server Setup Stuff for SSL

//https actual domanin 
// var key = fs.readFileSync('./nodeface.com.key');
// var cert = fs.readFileSync( './nodeface_com.crt' );
// var ca = fs.readFileSync( './nodeface.com.csr' );


//https for testing
var key = fs.readFileSync('./selfsigned.key');
var cert = fs.readFileSync( './selfsigned.crt' );
//var ca = fs.readFileSync( './mydomain.csr' );
//
var options = {
  key: key,
  cert: cert,
  //ca: ca
  };


// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brotioDB"
);

app.use(cors());
app.use(fileUpload());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Do I Need this?

// Configure body parser for AJAX requests
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//WE NEED THIS DO DO ITS THANG NOT IN REACT
require("./routes/api/imagePath.js")(app);
require("./routes/api/loginLogic")(app);
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// // Start the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );

//https.createServer(options, app).listen(443);

https.createServer(options, app).listen(6969);

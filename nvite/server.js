const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const fileUpload = require('express-fileupload');
const cors = require('cors');
const busboy = require('connect-busboy');



app.use(cors());
app.use(fileUpload());

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// Configure body parser for AJAX requests
app.use(bodyParser.json({ limit: '50mb', extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post('/api/login/auth', (req, res, next) => {
  console.log("recieved");
  //console.log(JSON.stringify(req.body));
  var username = req.body.user;
  var password = req.body.password;
  console.log(req.files);
  var img1 = req.files['image1'];
  console.log(img1);
  var num = 0;
  img1.forEach(element => {
    let imgeName1 = "./api/images/" + (++num) + username + ".png"
    console.log("wtf-SAVER");
    require('fs').writeFile(imgeName1, element.data, function () {
      console.log('FILE SAVED AS : ' + imgeName1);
    })
  });


})




require("./routes/api/imagePath.js")(app);
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/brotioDB"
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

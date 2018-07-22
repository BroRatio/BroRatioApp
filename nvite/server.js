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
  console.log(JSON.stringify(req.body));
  console.log(req.files);
  console.log(req.files['image1'].data)
  var img1 = req.files['image1'].data;
  let imgeName1 = "./api/images/1" + "username" + ".png"
  console.log("wtf-SAVER");
  require('fs').writeFile(imgeName1, img1, function () {
    console.log('FILE SAVED AS : ' + imgeName1);

  })

  // var img2 = req.files['image2'].data;
  // let imgeName2 = "./api/images/2" + "username" + ".png"
  // console.log("wtf-SAVER");
  // require('fs').writeFile(imgeName1, img2, function () {
  //   console.log('FILE SAVED AS : ' + imgeName2);

  // })

  // var img3 = req.files['image3'].data;
  // let imgeName3 = "./api/images/3" + "username" + ".png"
  // console.log("wtf-SAVER");
  // require('fs').writeFile(imgeName3, img3, function () {
  //   console.log('FILE SAVED AS : ' + imgeName3);

  // })

  // var img4 = req.files['image4'].data;
  // let imgeName4 = "./api/images/4" + "username" + ".png"
  // console.log("wtf-SAVER");
  // require('fs').writeFile(imgeName4, img4, function () {
  //   console.log('FILE SAVED AS : ' + imgeName4);

  // })

  // var img5 = req.files['image5'].data;
  // let imgeName5 = "./api/images/5" + "username" + ".png"
  // console.log("wtf-SAVER");
  // require('fs').writeFile(imgeName5, img5, function () {
  //   console.log('FILE SAVED AS : ' + imgeName5);

  // })
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

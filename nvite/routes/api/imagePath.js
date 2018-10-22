const router = require("express").Router();
const path = require("path");

module.exports = (app) => {
     //This is needed to serve the images
     app.get("/api/images/:id", function (req, res) {
      var name = req.params.id;
      console.log(name);
      console.log("I am fetching images");
      var npath = path.join(__dirname, '../../api/images/' + name);
      res.sendFile(npath);
  });

}
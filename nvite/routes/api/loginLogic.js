const router = require("express").Router();
const path = require("path");
const db = require("../../models");

module.exports = (app) => {
app.post('/api/login/signAuth', (req, res, next) => {
    console.log("db(entry)-recieved");
    //console.log(JSON.stringify(req.body));
    var username = req.body.user;
    var password = req.body.password;
    console.log(req.files);
    var img1 = req.files['image1'];
    if (img1 != null) {
      console.log(img1);
      var num = 0;
      var listOfLocations = [];
      img1.forEach(element => {
        let imgeName1 = "./api/images/" + (++num) + username + ".png";
        listOfLocations.push(imgeName1);
        console.log("wtf-SAVER-cus-ITS-cool");
        require('fs').writeFile(imgeName1, element.data, function () {
          console.log('FILE SAVED AS : ' + imgeName1);
        })
      });
  
      //Todo Fix this make it more dynamic
      var imageArr = {
        img1: typeof listOfLocations[0] != "undefined" ? listOfLocations[0] : "./api/images/def.png",
        img2: typeof listOfLocations[1] != "undefined" ? listOfLocations[1] : "./api/images/def.png",
        img3: typeof listOfLocations[2] != "undefined" ? listOfLocations[2] : "./api/images/def.png",
        img4: typeof listOfLocations[3] != "undefined" ? listOfLocations[3] : "./api/images/def.png",
        img5: typeof listOfLocations[4] != "undefined" ? listOfLocations[4] : "./api/images/def.png",
      }
  
      var userRecordObject = {
        username: username,
        password: password,
        profileImages : imageArr
      };
  
      
      db.userRecord.create(userRecordObject,{unique: true});
     
      
      db.userMeta.create(imageArr)
        .then(function (dbMatches) {
          db.userRecord
          .findOneAndUpdate({ username: userRecordObject.username }, { userMetas: dbMatches._id })
          .populate("userMetas").then((data)=>{
            console.log(data);
            res.json(data);
          });
        })
    }
  })
}
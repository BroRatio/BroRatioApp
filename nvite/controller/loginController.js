
const db = require("../models");
// Defining methods for the nytController
// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');
var fs = require('fs');


function awsCompareFaces(imageIn,imageServer) {

    var imageName = imageIn
    var image1 = fs.readFileSync(imageName);
    var imageName2 = imageServer
    var image2 = fs.readFileSync(imageName2);
    var faceDetection = new AWS.Rekognition({ region: 'us-east-1' });

    var param = {
        "SourceImage": {
            "Bytes": image1
        },
        "TargetImage": {
            "Bytes": image2
        }
    };

    var requestFace = faceDetection.compareFaces(param)
    var promiseFace = requestFace.promise();

    var imageResult = {
        Confidence : 0.0,
        Similarity:0.0
    } 
    return promiseFace.then(
        function (data) { 
            imageResult.Confidence = data.SourceImageFace.Confidence;
            imageResult.Similarity = data.FaceMatches[0].Similarity;
            return imageResult;
           })
}

// findAll searches the NYT API and returns only the entries we haven't already saved
module.exports = {
    getLoginInfoRequest: function(req, res) {
    let body = req.body;
  //  console.log(JSON.stringify(body))
    //console.log("request"+req)
    // console.log(req)
    // username = "testImage"
    // console.log(body)
    // console.log(req);
    let imageFile = req.files.file;
        
    imageFile.mv(`/api/images/${req.body.filename}.jpg`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.json({file: `public/${req.body.filename}.jpg`});
    });
    // let img1 = new Buffer(body, 'binary');
    // file = "./api/images/uploadedMain" + username + ".png"
    // require('fs').writeFile(file, img1, 'binary', function(err) {})
    // // const imgFix1 = myRequest.replace(/data:image\/png;base64,/gi, "")
    //     const imgFix1 = myRequest;
    //     let img1 = new Buffer(imgFix1, 'base64');
    //     username = "user-"+"random";
    //     let imgeName = "./api/images/uploadedMain" + username + ".png"
    //     console.log("wtf i got data here bro");
    //     require('fs').writeFile(imgeName, img1, function () {
    //         console.log('FILE SAVED AS : ' + imgeName);})
    //do the db-request to get a random picture
  }
};


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
  compareFaces: function(req, res) {
    let myRequest = req.body.imageEncoded;
    const imgFix1 = myRequest.replace(/data:image\/png;base64,/gi, "")
    let img1 = new Buffer(imgFix1, 'base64');
    username = "user-"+"random";
    let imgeName = "./api/images/imageCompare" + username + ".png"

    //do the db-request to get a random picture

  }
};

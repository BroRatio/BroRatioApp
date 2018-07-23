//Using Mongose
var Mongoose = require("mongoose");

//Schema Class gets imported
var Schema = Mongoose.Schema;

var userMetaIn = new Schema({
    img1 : { type:String} ,
    img2 : { type:String} ,
    img3 : { type:String} ,
    img4 : { type:String} ,
    img5 : { type:String} ,
    imgHistory : {type:Array},
    userRecord: {
        type: Schema.Types.ObjectId,
        ref: "userRecord"
    }

})

var UserMeta = Mongoose.model("userMeta",  userMetaIn);

module.exports =  UserMeta;
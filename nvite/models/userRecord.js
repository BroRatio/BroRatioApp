const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userRecordSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  userName: { type: String},
  password: { type: String},
  date: { type: Date, default: Date.now },
  userMeta:[{
    type: Schema.Types.ObjectId,
    ref: "UserMeta"
}]
});

const UserRecord = mongoose.model("UserRecord",userRecordSchema);

module.exports = UserRecord;

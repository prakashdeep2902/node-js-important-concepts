import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ObjectId = mongoose.ObjectId;

const NewSchema = new Schema({
  author: ObjectId,
  UserName: String,
  UserEmail: String,
});

const ModelName = mongoose.model("UserData", NewSchema);

export default ModelName;

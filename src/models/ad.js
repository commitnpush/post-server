import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Ad = new Schema({
  no: String,
  title: String,
  contents: String,
  img: String,
  created_at: String,
  updated_at: String
});

export default mongoose.model("ad", Ad);

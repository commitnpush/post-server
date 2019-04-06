import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema({
  no: String,
  title: String,
  contents: String,
  email: String,
  ip: String,
  updated_at: String,
  category_no: String,
  replies: Array
});

export default mongoose.model("post", Post);

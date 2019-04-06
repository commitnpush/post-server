import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cateory = new Schema({
  no: String,
  name: String
});

export default mongoose.model("category", Cateory);

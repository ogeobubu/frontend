import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Image = mongoose.model("interviewImages", imageSchema);

export default Image;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Favorites = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: false },
    explanation: { type: String, required: false },
    copryright: { type: String, required: false},
    date: { type: String, required: true}

  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Favorites;

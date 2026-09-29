import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    city: { type: String, required: true, trim: true, maxlength: 80 },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true, maxlength: 500 }
  },
  { timestamps: true }
);

export const Experience = mongoose.model("Experience", experienceSchema);

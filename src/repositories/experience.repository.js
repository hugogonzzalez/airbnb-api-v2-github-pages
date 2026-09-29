import { Experience } from "../models/experience.model.js";

export const experienceRepository = {
  findAll() {
    return Experience.find().sort({ createdAt: -1 }).lean();
  },

  findById(id) {
    return Experience.findById(id).lean();
  },

  create(data) {
    return Experience.create(data);
  },

  updateById(id, data) {
    return Experience.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    }).lean();
  },

  deleteById(id) {
    return Experience.findByIdAndDelete(id);
  }
};

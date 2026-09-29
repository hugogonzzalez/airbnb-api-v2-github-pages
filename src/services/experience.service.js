import mongoose from "mongoose";
import { experienceRepository } from "../repositories/experience.repository.js";

function validateId(id) {
  if (!mongoose.isValidObjectId(id)) {
    const error = new Error("Invalid experience id");
    error.status = 400;
    throw error;
  }
}

function sanitizeInput(data) {
  const allowed = ["title", "city", "price", "description"];
  return Object.fromEntries(
    Object.entries(data).filter(([key]) => allowed.includes(key))
  );
}

export const experienceService = {
  async list() {
    return experienceRepository.findAll();
  },

  async getById(id) {
    validateId(id);
    const experience = await experienceRepository.findById(id);

    if (!experience) {
      const error = new Error("Experience not found");
      error.status = 404;
      throw error;
    }

    return experience;
  },

  async create(data) {
    return experienceRepository.create(sanitizeInput(data));
  },

  async update(id, data) {
    validateId(id);
    const experience = await experienceRepository.updateById(
      id,
      sanitizeInput(data)
    );

    if (!experience) {
      const error = new Error("Experience not found");
      error.status = 404;
      throw error;
    }

    return experience;
  },

  async remove(id) {
    validateId(id);
    const experience = await experienceRepository.deleteById(id);

    if (!experience) {
      const error = new Error("Experience not found");
      error.status = 404;
      throw error;
    }
  }
};

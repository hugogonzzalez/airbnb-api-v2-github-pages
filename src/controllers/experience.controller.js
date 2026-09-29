import { experienceService } from "../services/experience.service.js";

export const experienceController = {
  async list(_req, res, next) {
    try {
      res.json(await experienceService.list());
    } catch (error) {
      next(error);
    }
  },

  async getById(req, res, next) {
    try {
      res.json(await experienceService.getById(req.params.id));
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const experience = await experienceService.create(req.body);
      res.status(201).json(experience);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      res.json(await experienceService.update(req.params.id, req.body));
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    try {
      await experienceService.remove(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

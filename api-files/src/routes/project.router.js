import express from "express";

import ProjectService from "../services/project.service";
import {
  getIdProjectSchema,
  postProjectSchema,
  patchProjectSchema,
} from "../schemas/project.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new ProjectService();

router.get(
  "/",
  validatorHandler(getIdProjectSchema, `query`),
  async (req, res, next) => {
    try {
      const result = await service.findOne(req.query._id);
      res.download(result);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(postProjectSchema, `files`),
  async (req, res, next) => {
    try {
      const result = await service.create(req.files);
      res.status(200).json({ statusCode: 200, error: null, data: result });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/",
  validatorHandler(getIdProjectSchema, `query`),
  validatorHandler(patchProjectSchema, `files`),
  async (req, res, next) => {
    try {
      const result = await service.update(req.query._id, req.files);
      res.status(200).json({ statusCode: 200, error: null, data: result });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/",
  validatorHandler(getIdProjectSchema, `query`),
  async (req, res, next) => {
    try {
      const result = await service.delete(req.query._id);
      res.status(200).json({ statusCode: 200, error: null, data: result });
    } catch (error) {
      next(error);
    }
  }
);

export default router;

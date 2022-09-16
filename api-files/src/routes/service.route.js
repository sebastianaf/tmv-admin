import express from "express";

import ServiceService from "../services/service.service";
import {
  getIdServiceSchema,
  postServiceSchema,
  patchServiceSchema,
} from "../schemas/service.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new ServiceService();

router.get(
  "/",
  validatorHandler(getIdServiceSchema, `query`),
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
  validatorHandler(postServiceSchema, `files`),
  async (req, res, next) => {
    try {
      console.log(req.files);
      const result = await service.create(req.files);
      res.status(200).json({ statusCode: 200, error: null, data: result });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/",
  validatorHandler(getIdServiceSchema, `query`),
  validatorHandler(patchServiceSchema, `files`),
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
  validatorHandler(getIdServiceSchema, `query`),
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

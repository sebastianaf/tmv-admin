import express from "express";

import RequestService from "../services/request.service";
import {
  getIdRequestSchema,
  postRequestSchema,
  patchRequestSchema,
} from "../schemas/request.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new RequestService();

router.get(
  "/",
  validatorHandler(getIdRequestSchema, `query`),
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
  validatorHandler(postRequestSchema, `files`),
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
  validatorHandler(getIdRequestSchema, `query`),
  validatorHandler(patchRequestSchema, `files`),
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
  validatorHandler(getIdRequestSchema, `query`),
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

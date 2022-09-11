import express from "express";

import ConsecutiveListService from "../services/consecutiveList.service";
import {
  getIdConsecutiveListSchema,
  getIdQueryConsecutiveListSchema,
  postConsecutiveListSchema,
  patchConsecutiveListSchema,
} from "../schemas/consecutiveList.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new ConsecutiveListService();

router.get(
  "/",
  validatorHandler(getIdQueryConsecutiveListSchema, `query`),
  async (req, res, next) => {
    try {
      let result = [];
      if (req.query._id) {
        result = await service.findOne(req.query._id);
      } else {
        result = await service.find({});
      }
      res.status(200).json({ statusCode: 200, error: null, data: result });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(postConsecutiveListSchema, `body`),
  async (req, res, next) => {
    try {
      const result = await service.create(req.body);
      res.status(200).json({ statusCode: 200, error: null, data: result });
      next();
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/",
  validatorHandler(getIdConsecutiveListSchema, `query`),
  validatorHandler(patchConsecutiveListSchema, `body`),
  async (req, res, next) => {
    try {
      const result = await service.update(req.query._id, req.body);
      res.status(200).json({ statusCode: 200, error: null, data: result });
      next();
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/",
  validatorHandler(getIdConsecutiveListSchema, `query`),
  async (req, res, next) => {
    try {
      const result = await service.delete(req.query._id);
      res.status(200).json({ statusCode: 200, error: null, data: result });
      next();
    } catch (error) {
      next(error);
    }
  }
);

export default router;

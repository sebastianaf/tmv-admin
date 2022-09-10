import express from "express";

import PersonService from "../services/person.service";
import {
  getIdPersonSchema,
  getIdQueryPersonSchema,
  postPersonSchema,
  patchPersonSchema,
} from "../schemas/person.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new PersonService();

router.get(
  "/",
  validatorHandler(getIdQueryPersonSchema, `query`),
  async (req, res, next) => {
    try {
      let result = [];
      if (req.query._id) {
        result = await service.findOne(req.query._id);
      } else {
        result = await service.find({});
      }
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(postPersonSchema, `body`),
  async (req, res, next) => {
    try {
      const result = await service.create(req.body);
      res.status(200).json(result);
      next();
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/",
  validatorHandler(getIdPersonSchema, `query`),
  validatorHandler(patchPersonSchema, `body`),
  async (req, res, next) => {
    try {
      const result = await service.update(req.query._id, req.body);
      res.status(200).json(result);
      next();
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/",
  validatorHandler(getIdPersonSchema, `query`),
  async (req, res, next) => {
    try {
      const result = await service.delete(req.query._id);
      res.status(200).json(result);
      next();
    } catch (error) {
      next(error);
    }
  }
);

export default router;

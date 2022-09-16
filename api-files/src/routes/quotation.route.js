import express from "express";

import QuotationService from "../services/quotation.service";
import {
  getIdQuotationSchema,
  postQuotationSchema,
  patchQuotationSchema,
} from "../schemas/quotation.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new QuotationService();

router.get(
  "/",
  validatorHandler(getIdQuotationSchema, `query`),
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
  validatorHandler(postQuotationSchema, `files`),
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
  validatorHandler(getIdQuotationSchema, `query`),
  validatorHandler(patchQuotationSchema, `files`),
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
  validatorHandler(getIdQuotationSchema, `query`),
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

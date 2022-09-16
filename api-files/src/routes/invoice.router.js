import express from "express";

import InvoiceService from "../services/invoice.service";
import {
  getIdInvoiceSchema,
  postInvoiceSchema,
  patchInvoiceSchema,
} from "../schemas/invoice.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new InvoiceService();

router.get(
  "/",
  validatorHandler(getIdInvoiceSchema, `query`),
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
  validatorHandler(postInvoiceSchema, `files`),
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
  validatorHandler(getIdInvoiceSchema, `query`),
  validatorHandler(patchInvoiceSchema, `files`),
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
  validatorHandler(getIdInvoiceSchema, `query`),
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

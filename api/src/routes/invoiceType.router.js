import express from "express";

import InvoiceTypeService from "../services/invoiceType.service";
import {
  getIdInvoiceTypeSchema,
  getIdQueryInvoiceTypeSchema,
  postInvoiceTypeSchema,
  patchInvoiceTypeSchema,
} from "../schemas/invoiceType.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new InvoiceTypeService();

router.get(
  "/",
  validatorHandler(getIdQueryInvoiceTypeSchema, `query`),
  async (req, res, next) => {
    try {
      let result = [];
      if (req.query._id) {
        result = await service.findOne(req.query._id);
      } else {
        result = await service.find({});
      }
      res.status(200).json({ statusCode: 200, error: null, data: result });
      next();
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(postInvoiceTypeSchema, `body`),
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
  validatorHandler(getIdInvoiceTypeSchema, `query`),
  validatorHandler(patchInvoiceTypeSchema, `body`),
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
  validatorHandler(getIdInvoiceTypeSchema, `query`),
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

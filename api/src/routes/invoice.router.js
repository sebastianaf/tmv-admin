import express from "express";

import InvoiceService from "../services/invoice.service";
import {
  getIdInvoiceSchema,
  getIdQueryInvoiceSchema,
  postInvoiceSchema,
  patchInvoiceSchema,
} from "../schemas/invoice.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new InvoiceService();

router.get(
  "/",
  validatorHandler(getIdQueryInvoiceSchema, `query`),
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
  validatorHandler(postInvoiceSchema, `body`),
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
  validatorHandler(getIdInvoiceSchema, `query`),
  validatorHandler(patchInvoiceSchema, `body`),
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
  validatorHandler(getIdInvoiceSchema, `query`),
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

import express from "express";

import ServiceService from "../services/service.service";
import { getIdServiceSchema } from "../schemas/service.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const service = new ServiceService();

router.patch(
  "/",
  validatorHandler(getIdServiceSchema, `query`),
  async (req, res, next) => {
    try {
      const result = await service.authorizate(
        req.query._id,
        req.user.employeeId
      );
      res.status(200).json({ statusCode: 200, error: null, data: result });
      next();
    } catch (error) {
      next(error);
    }
  }
);

export default router;

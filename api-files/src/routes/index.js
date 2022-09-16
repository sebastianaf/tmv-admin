import express from "express";

/**
 * Import Routes
 */
import quotationRouter from "./quotation.route";
import serviceRouter from "./service.route";
import requestRouter from "./request.route";
import projectRouter from "./project.router";
import invoiceRouter from "./invoice.router";

const routerAPI = (app) => {
  const router = express.Router();
  app.use("/api", router);

  /**
   * Routes
   */
  router.use("/quotation", quotationRouter);
  router.use("/service", serviceRouter);
  router.use("/request", requestRouter);
  router.use("/project", projectRouter);
  router.use("/invoice", invoiceRouter);
};

export default routerAPI;

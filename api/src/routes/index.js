import express from "express";

/**
 * Import Routes
 */
import userRouter from "./user.router";
import roleRouter from "./role.router";
import accessRouter from "./access.router";
import loginRouter from "./login.router";
import emailRouter from "./email.router";
import consecutiveTypeRouter from "./consecutiveType.router";
import consecutiveRouter from "./consecutive.router";
import dniTypeRouter from "./dniType.router";
import requestTypeRouter from "./requestType.router";
import requestFileRouter from "./requestFile.router";
import requestRouter from "./request.route";
import employeeTypeRouter from "./employeeType.router";
import employeeRouter from "./employee.router";
import clientTypeRouter from "./clientType.router";
import clientContactRouter from "./clientContact.router";
import clientRouter from "./client.router";
import quotationTypeRouter from "./quotationType.router";
import quotationFileRouter from "./quotationFile.router";
import quotationRouter from "./quotation.router";
import serviceTypeRouter from "./serviceType.router";
import serviceFileRouter from "./serviceFile.router";
import serviceRouter from "./service.router";
import projectTypeRouter from "./projectType.router";
import projectFileRouter from "./projectFile.router";
import projectRouter from "./project.router";
import invoiceTypeRouter from "./invoiceType.router";
import invoiceFileRouter from "./invoiceFile.router";
import invoiceRouter from "./invoice.router";

const routerAPI = (app) => {
  const router = express.Router();
  app.use("/api", router);

  /**
   * Routes
   */
  router.use("/users", userRouter);
  router.use("/roles", roleRouter);
  router.use("/access", accessRouter);
  router.use("/login", loginRouter);
  router.use("/email", emailRouter);
  router.use("/consecutiveType", consecutiveTypeRouter);
  router.use("/consecutive", consecutiveRouter);
  router.use("/dniType", dniTypeRouter);
  router.use("/employeeType", employeeTypeRouter);
  router.use("/employee", employeeRouter);
  router.use("/clientType", clientTypeRouter);
  router.use("/clientContact", clientContactRouter);
  router.use("/client", clientRouter);
  router.use("/requestType", requestTypeRouter);
  router.use("/requestFile", requestFileRouter);
  router.use("/request", requestRouter);
  router.use("/quotationType", quotationTypeRouter);
  router.use("/quotationFile", quotationFileRouter);
  router.use("/quotation", quotationRouter);
  router.use("/serviceType", serviceTypeRouter);
  router.use("/serviceFile", serviceFileRouter);
  router.use("/service", serviceRouter);
  router.use("/projectType", projectTypeRouter);
  router.use("/projectFile", projectFileRouter);
  router.use("/project", projectRouter);
  router.use("/invoiceType", invoiceTypeRouter);
  router.use("/invoiceFile", invoiceFileRouter);
  router.use("/invoice", invoiceRouter);
};

export default routerAPI;

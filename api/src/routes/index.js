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
import quotationAuthorizeRouter from "./quotationAuthorizate.router";
import quotationRouter from "./quotation.router";
import serviceTypeRouter from "./serviceType.router";
import serviceFileRouter from "./serviceFile.router";
import serviceAuthorizeRouter from "./serviceAuthorize.router";
import serviceRouter from "./service.router";
import projectTypeRouter from "./projectType.router";
import projectFileRouter from "./projectFile.router";
import projectAuthorizeRouter from "./projectAuthorize.router";
import projectRouter from "./project.router";
import invoiceTypeRouter from "./invoiceType.router";
import invoiceFileRouter from "./invoiceFile.router";
import invoiceAuthorizeRouter from "./invoiceAuthorize.router";
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
  router.use("/dniType", dniTypeRouter);

  router.use("/consecutive", consecutiveRouter);
  consecutiveRouter.use("/type", consecutiveTypeRouter);

  router.use("/employee", employeeRouter);
  employeeRouter.use("/type", employeeTypeRouter);

  router.use("/client", clientRouter);
  clientRouter.use("/type", clientTypeRouter);
  clientRouter.use("/contact", clientContactRouter);

  router.use("/request", requestRouter);
  requestRouter.use("/type", requestTypeRouter);
  requestRouter.use("/file", requestFileRouter);

  router.use("/quotation", quotationRouter);
  quotationRouter.use("/type", quotationTypeRouter);
  quotationRouter.use("/file", quotationFileRouter);
  quotationRouter.use("/authorize", quotationAuthorizeRouter);

  router.use("/service", serviceRouter);
  serviceRouter.use("/type", serviceTypeRouter);
  serviceRouter.use("/file", serviceFileRouter);
  serviceRouter.use("/authorize", serviceAuthorizeRouter);

  router.use("/project", projectRouter);
  projectRouter.use("/type", projectTypeRouter);
  projectRouter.use("/file", projectFileRouter);
  projectRouter.use("/authorize", projectAuthorizeRouter);

  router.use("/invoice", invoiceRouter);
  invoiceRouter.use("/type", invoiceTypeRouter);
  invoiceRouter.use("/file", invoiceFileRouter);
  invoiceRouter.use("/authorize", invoiceAuthorizeRouter);
};

export default routerAPI;

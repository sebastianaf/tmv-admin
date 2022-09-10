import express from "express";

/**
 * Import Routes
 */
import userRouter from "./user.router";
import roleRouter from "./role.router";
import accessRouter from "./access.router";
import loginRouter from "./login.router";
import emailRouter from "./email.router";
import consecutiveRouter from "./consecutive.router";
import consecutiveListRouter from "./consecutiveList.router";
import personRouter from "./person.route";
import personTypeRouter from "./personType.router";
import dniTypeRouter from "./dniType.router";
import requestTypeRouter from "./requestType.router";

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
  router.use("/consecutive", consecutiveRouter);
  consecutiveRouter.use("/list", consecutiveListRouter);
  router.use("/person", personRouter);
  router.use("/personType", personTypeRouter);
  router.use("/dniType", dniTypeRouter);
  router.use("/requestType", requestTypeRouter);
};

export default routerAPI;

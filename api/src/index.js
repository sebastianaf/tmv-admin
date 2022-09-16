import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";
import whitelist from "./config/whitelist";
import { morganOptions } from "./config/morgan";
import log from "./config/log";
import { toInteger } from "lodash";
import { logCheck } from "./tools/log";
import auth from "./middlewares/auth.handler";
import roles from "./middlewares/role.handler";
import routerAPI from "./routes";
import { initAdminAccess, initAdminUser } from "./tools/initialize";
import {
  logErrors,
  boomErrorHandler,
  ormErrorHandler,
  errorHandler,
} from "./middlewares/error.handler";

require("dotenv").config();

var app = express();
logCheck();

/***
 * Middlewares
 */
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
};
app.use(cors(corsOptions));
app.use(auth);
app.use(roles);
app.use(express.json());
app.use(helmet());
app.use(morgan(morganOptions));

toInteger(process.env.API_LOG) === 1 &&
  app.use(
    morgan(morganOptions, {
      stream: fs.createWriteStream(log.filePath, { flags: "a" }),
    })
  );

/**
 * Initialization
 */
toInteger(process.env.API_CREATE_ADMIN) === 1 &&
  (async () => {
    await initAdminAccess();
    await initAdminUser();
  })();

/***
 * Routes
 */
routerAPI(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(process.env.API_PORT, () => {
  console.log(`Running on port ${process.env.API_PORT}`);
});

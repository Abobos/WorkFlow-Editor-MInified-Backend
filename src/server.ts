import "module-alias/register";

import http from "http";
import { App } from "./express-app";
import { logger } from "@utils/index";

const expressApp = new App();

const PORT = expressApp.getPort();

const server = http.createServer(expressApp.app);

server.listen(PORT, () =>
  logger.appLogger.info(
    `${expressApp.getEnv()}:server App started on PORT ${PORT}`
  )
);

export default server;

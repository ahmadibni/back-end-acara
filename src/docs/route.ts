import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";
import fs from "fs";
import path from "path";

export default function docs(app: Express) {
  const css = fs.readFileSync(
    path.resolve(
      __dirname,
      "../../node_modules/swagger-ui-dist/swagger-ui.css"
    ),
    "utf8"
  );

  app.get("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));
}

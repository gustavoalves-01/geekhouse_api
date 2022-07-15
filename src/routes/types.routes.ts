import { Router } from "express";

import { createTypeController } from "../domain/products/useCases/createType";
import { listTypesController } from "../domain/products/useCases/listTypes";

const typesRoutes = Router();

typesRoutes.post("/", (req, res) => {
  return createTypeController.handle(req, res);
});

typesRoutes.get("/", (req, res) => {
  return listTypesController.handle(req, res);
});

export { typesRoutes };

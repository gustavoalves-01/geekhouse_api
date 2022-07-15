import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { productsRoutes } from "./products.routes";
import { typesRoutes } from "./types.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/types", typesRoutes);
routes.use("/products", productsRoutes);

export default routes;

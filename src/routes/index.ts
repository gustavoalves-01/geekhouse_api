import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { ordersRoutes } from "./orders.routes";
import { productsRoutes } from "./products.routes";
import { typesRoutes } from "./types.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/types", typesRoutes);
routes.use("/products", productsRoutes);
routes.use("/orders", ordersRoutes);

export default routes;

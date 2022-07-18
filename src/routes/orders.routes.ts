import { Router } from "express";

import createOrderController from "../domain/orders/useCases/createOrder";

const ordersRoutes = Router();

ordersRoutes.post("/", (req, res) => {
  return createOrderController().handle(req, res);
});

// ordersRoutes.get("/", (req, res) => {
//   return listCategoriesController().handle(req, res);
// });

export { ordersRoutes };

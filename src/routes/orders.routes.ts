import { Router } from "express";

import createOrderController from "../domain/orders/useCases/createOrder";
import listOrdersController from "../domain/orders/useCases/listOrders";
import receiveProductController from "../domain/orders/useCases/receiveProduct";

const ordersRoutes = Router();

ordersRoutes.post("/", (req, res) => {
  return createOrderController().handle(req, res);
});

ordersRoutes.get("/", (req, res) => {
  return listOrdersController().handle(req, res);
});

ordersRoutes.post("/receive", (req, res) => {
  return receiveProductController().handle(req, res);
});

export { ordersRoutes };

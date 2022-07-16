import { Router } from "express";

import createProductController from "../domain/products/useCases/createProduct";
import filterProductsController from "../domain/products/useCases/filterProducts";
import findProductController from "../domain/products/useCases/findProduct";
import listProductsController from "../domain/products/useCases/listProducts";

const productsRoutes = Router();

productsRoutes.post("/", (req, res) => {
  return createProductController().handle(req, res);
});

productsRoutes.get("/", (req, res) => {
  const { type, category } = req.query;

  if (type || category) {
    return filterProductsController().handle(req, res);
  }

  return listProductsController().handle(req, res);
});

productsRoutes.get("/:name", (req, res) => {
  return findProductController().handle(req, res);
});

export { productsRoutes };

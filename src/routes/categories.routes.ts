import { Router } from "express";

import { createCategoryController } from "../domain/products/useCases/createCategory";
import { listCategoriesController } from "../domain/products/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const filterProductsController_1 = require("./filterProductsController");
const filterProductsUseCase_1 = require("./filterProductsUseCase");
exports.default = () => {
    const productsRepository = new ProductsRepository_1.ProductsRepository();
    const filterProductsUseCase = new filterProductsUseCase_1.FilterProductsUseCase(productsRepository);
    const filterProductsController = new filterProductsController_1.FilterProductsController(filterProductsUseCase);
    return filterProductsController;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const listProductsController_1 = require("./listProductsController");
const listProductsUseCase_1 = require("./listProductsUseCase");
exports.default = () => {
    const productsRepository = new ProductsRepository_1.ProductsRepository();
    const listProductsUseCase = new listProductsUseCase_1.ListProductsUseCase(productsRepository);
    const listProductsController = new listProductsController_1.ListProductsController(listProductsUseCase);
    return listProductsController;
};

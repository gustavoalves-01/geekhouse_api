"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const findProductController_1 = require("./findProductController");
const findProductUseCase_1 = require("./findProductUseCase");
exports.default = () => {
    const productsRepository = new ProductsRepository_1.ProductsRepository();
    const findProductUseCase = new findProductUseCase_1.FindProductUseCase(productsRepository);
    const findProductController = new findProductController_1.FindProductController(findProductUseCase);
    return findProductController;
};

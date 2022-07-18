"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const ProductsRepository_1 = require("../../repositories/implementations/ProductsRepository");
const TypesRepository_1 = require("../../repositories/implementations/TypesRepository");
const createProductController_1 = require("./createProductController");
const createProductUseCase_1 = require("./createProductUseCase");
exports.default = () => {
    const productsRepository = new ProductsRepository_1.ProductsRepository();
    const typesRepository = new TypesRepository_1.TypesRepository();
    const categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
    const createProductUseCase = new createProductUseCase_1.CreateProductUseCase(productsRepository, typesRepository, categoriesRepository);
    const createProductController = new createProductController_1.CreateProductController(createProductUseCase);
    return createProductController;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const listCategoriesController_1 = require("./listCategoriesController");
const listCategoriesUseCase_1 = require("./listCategoriesUseCase");
exports.default = () => {
    const categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
    const listCategoriesUseCase = new listCategoriesUseCase_1.ListCategoriesUseCase(categoriesRepository);
    const listCategoriesController = new listCategoriesController_1.ListCategoriesController(listCategoriesUseCase);
    return listCategoriesController;
};

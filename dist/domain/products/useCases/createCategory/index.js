"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
const createCategoryController_1 = require("./createCategoryController");
const createCategoryUseCase_1 = require("./createCategoryUseCase");
exports.default = () => {
    const categoriesRepository = new CategoriesRepository_1.CategoriesRepository();
    const createCategoryUseCase = new createCategoryUseCase_1.CreateCategoryUseCase(categoriesRepository);
    const createCategoryController = new createCategoryController_1.CreateCategoryController(createCategoryUseCase);
    return createCategoryController;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypesRepository_1 = require("../../repositories/implementations/TypesRepository");
const createTypeController_1 = require("./createTypeController");
const createTypeUseCase_1 = require("./createTypeUseCase");
exports.default = () => {
    const typesRepository = new TypesRepository_1.TypesRepository();
    const createTypeUseCase = new createTypeUseCase_1.CreateTypeUseCase(typesRepository);
    const createTypeController = new createTypeController_1.CreateTypeController(createTypeUseCase);
    return createTypeController;
};

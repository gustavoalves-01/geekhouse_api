"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TypesRepository_1 = require("../../repositories/implementations/TypesRepository");
const listTypesController_1 = require("./listTypesController");
const listTypesUseCase_1 = require("./listTypesUseCase");
exports.default = () => {
    const typesRepository = new TypesRepository_1.TypesRepository();
    const listTypesUseCase = new listTypesUseCase_1.ListTypesUseCase(typesRepository);
    const listTypesController = new listTypesController_1.ListTypesController(listTypesUseCase);
    return listTypesController;
};

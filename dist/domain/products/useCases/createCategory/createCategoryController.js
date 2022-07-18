"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
class CreateCategoryController {
    constructor(createCategoryUseCase) {
        this.createCategoryUseCase = createCategoryUseCase;
    }
    async handle(request, response) {
        const { name, description } = request.body;
        await this.createCategoryUseCase.execute({ name, description });
        return response.status(201).send();
    }
}
exports.CreateCategoryController = CreateCategoryController;

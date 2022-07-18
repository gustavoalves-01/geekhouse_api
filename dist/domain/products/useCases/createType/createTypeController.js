"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTypeController = void 0;
class CreateTypeController {
    constructor(createTypeUseCase) {
        this.createTypeUseCase = createTypeUseCase;
    }
    async handle(request, response) {
        const { name, description } = request.body;
        await this.createTypeUseCase.execute({ name, description });
        return response.status(201).send();
    }
}
exports.CreateTypeController = CreateTypeController;

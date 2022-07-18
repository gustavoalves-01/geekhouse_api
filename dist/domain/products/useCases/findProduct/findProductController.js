"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductController = void 0;
class FindProductController {
    constructor(findProductUseCase) {
        this.findProductUseCase = findProductUseCase;
    }
    async handle(request, response) {
        const { name } = request.params;
        const product = await this.findProductUseCase.execute({ name });
        return response.json(product);
    }
}
exports.FindProductController = FindProductController;

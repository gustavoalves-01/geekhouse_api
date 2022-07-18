"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProductsController = void 0;
class FilterProductsController {
    constructor(filterProductsUseCase) {
        this.filterProductsUseCase = filterProductsUseCase;
    }
    async handle(request, response) {
        const { type, category } = request.query;
        const filteredProducts = await this.filterProductsUseCase.execute({
            type: type && String(type),
            category: category && String(category),
        });
        return response.json(filteredProducts);
    }
}
exports.FilterProductsController = FilterProductsController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProductsUseCase = void 0;
class FilterProductsUseCase {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async execute({ type, category }) {
        const products = await this.productsRepository.filter(type, category);
        return products;
    }
}
exports.FilterProductsUseCase = FilterProductsUseCase;

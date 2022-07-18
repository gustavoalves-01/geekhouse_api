"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsUseCase = void 0;
class ListProductsUseCase {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async execute() {
        const products = await this.productsRepository.list();
        return products;
    }
}
exports.ListProductsUseCase = ListProductsUseCase;

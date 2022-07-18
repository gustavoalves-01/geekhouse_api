"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductUseCase = void 0;
class FindProductUseCase {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async execute({ name }) {
        const product = await this.productsRepository.findByName(name);
        if (!product) {
            throw new Error("Product not found.");
        }
        return product;
    }
}
exports.FindProductUseCase = FindProductUseCase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
class CreateCategoryUseCase {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async execute({ name, description }) {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("A category with the provided name already exists.");
        }
        this.categoriesRepository.create({ name, description });
    }
}
exports.CreateCategoryUseCase = CreateCategoryUseCase;

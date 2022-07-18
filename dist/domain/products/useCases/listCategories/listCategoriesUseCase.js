"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesUseCase = void 0;
class ListCategoriesUseCase {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async execute() {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}
exports.ListCategoriesUseCase = ListCategoriesUseCase;

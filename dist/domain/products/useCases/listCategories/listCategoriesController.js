"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
class ListCategoriesController {
    constructor(listCategoriesUseCase) {
        this.listCategoriesUseCase = listCategoriesUseCase;
    }
    async handle(request, response) {
        const all = await this.listCategoriesUseCase.execute();
        return response.json(all);
    }
}
exports.ListCategoriesController = ListCategoriesController;

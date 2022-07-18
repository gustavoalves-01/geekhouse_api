"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsController = void 0;
class ListProductsController {
    constructor(listProductsUseCase) {
        this.listProductsUseCase = listProductsUseCase;
    }
    async handle(request, response) {
        const all = await this.listProductsUseCase.execute();
        return response.json(all);
    }
}
exports.ListProductsController = ListProductsController;

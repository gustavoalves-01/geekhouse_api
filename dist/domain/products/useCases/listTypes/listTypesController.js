"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTypesController = void 0;
class ListTypesController {
    constructor(listTypesUseCase) {
        this.listTypesUseCase = listTypesUseCase;
    }
    async handle(request, response) {
        const all = await this.listTypesUseCase.execute();
        return response.json(all);
    }
}
exports.ListTypesController = ListTypesController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTypesUseCase = void 0;
class ListTypesUseCase {
    constructor(typesRepository) {
        this.typesRepository = typesRepository;
    }
    async execute() {
        const types = await this.typesRepository.list();
        return types;
    }
}
exports.ListTypesUseCase = ListTypesUseCase;

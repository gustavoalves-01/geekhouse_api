"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTypeUseCase = void 0;
class CreateTypeUseCase {
    constructor(typesRepository) {
        this.typesRepository = typesRepository;
    }
    async execute({ name, description }) {
        const typeAlreadyExists = await this.typesRepository.findByName(name);
        if (typeAlreadyExists) {
            throw new Error("A type with the provided name already exists.");
        }
        this.typesRepository.create({ name, description });
    }
}
exports.CreateTypeUseCase = CreateTypeUseCase;

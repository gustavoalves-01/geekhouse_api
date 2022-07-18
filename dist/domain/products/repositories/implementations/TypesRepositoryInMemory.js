"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesRepository = void 0;
const Type_1 = require("../../entities/Type");
class TypesRepository {
    constructor() {
        this.types = [];
    }
    static getInstance() {
        if (!TypesRepository.INSTANCE) {
            TypesRepository.INSTANCE = new TypesRepository();
        }
        return TypesRepository.INSTANCE;
    }
    findByName(name) {
        const type = this.types.find((type) => type.name === name);
        return type;
    }
    list() {
        return this.types;
    }
    create({ name, description }) {
        const type = new Type_1.Type();
        Object.assign(type, {
            name,
            description,
        });
        this.types.push(type);
    }
}
exports.TypesRepository = TypesRepository;

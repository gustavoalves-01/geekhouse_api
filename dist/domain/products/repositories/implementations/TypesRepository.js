"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TypesRepository {
    async findByName(name) {
        const typeData = await prisma.types.findFirst({
            where: { name: { equals: name } },
        });
        if (typeData) {
            const type = {
                id: typeData.id,
                name: typeData.name,
                description: typeData.description,
            };
            return type;
        }
        return undefined;
    }
    async list() {
        const data = await prisma.types.findMany({});
        const types = data.map((type) => {
            return {
                id: type.id,
                name: type.name,
                description: type.description,
            };
        });
        return types;
    }
    async create({ name, description }) {
        await prisma.types.create({
            data: {
                name,
                description,
            },
        });
    }
}
exports.TypesRepository = TypesRepository;

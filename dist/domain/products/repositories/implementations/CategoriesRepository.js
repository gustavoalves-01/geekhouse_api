"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CategoriesRepository {
    async findByName(name) {
        const categoryData = await prisma.categories.findFirst({
            where: { name: { equals: name } },
        });
        if (categoryData) {
            const category = {
                id: categoryData.id,
                name: categoryData.name,
                description: categoryData.description,
            };
            return category;
        }
        return undefined;
    }
    async list() {
        const data = await prisma.categories.findMany({});
        const categories = data.map((category) => {
            return {
                id: category.id,
                name: category.name,
                description: category.description,
            };
        });
        return categories;
    }
    async create({ name, description }) {
        await prisma.categories.create({
            data: {
                name,
                description,
            },
        });
    }
}
exports.CategoriesRepository = CategoriesRepository;

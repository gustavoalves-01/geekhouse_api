import { PrismaClient } from "@prisma/client";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../interfaces/ICategoriesRepository";

const prisma = new PrismaClient();

class CategoriesRepository implements ICategoriesRepository {
  async findByName(name: string): Promise<Category | undefined> {
    const categoryData = await prisma.categories.findFirst({
      where: { name: { equals: name } },
    });

    if (categoryData) {
      const category: Category = {
        id: categoryData.id,
        name: categoryData.name,
        description: categoryData.description,
      };

      return category;
    }
    return undefined;
  }

  async list(): Promise<Category[]> {
    const data = await prisma.categories.findMany({});

    const categories: Category[] = data.map((category) => {
      return {
        id: category.id,
        name: category.name,
        description: category.description,
      };
    });

    return categories;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    await prisma.categories.create({
      data: {
        name,
        description,
      },
    });
  }
}

export { CategoriesRepository };

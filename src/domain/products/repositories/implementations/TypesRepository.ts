import { PrismaClient } from "@prisma/client";

import { Type } from "../../entities/Type";
import {
  ICreateTypeDTO,
  ITypesRepository,
} from "../interfaces/ITypesRepository";

const prisma = new PrismaClient();

class TypesRepository implements ITypesRepository {
  async findByName(name: string): Promise<Type | undefined> {
    const typeData = await prisma.types.findFirst({
      where: { name: { equals: name } },
    });

    if (typeData) {
      const type: Type = {
        id: typeData.id,
        name: typeData.name,
        description: typeData.description,
      };

      return type;
    }
    return undefined;
  }

  async list(): Promise<Type[]> {
    const data = await prisma.types.findMany({});

    const types: Type[] = data.map((type) => {
      return {
        id: type.id,
        name: type.name,
        description: type.description,
      };
    });

    return types;
  }

  async create({ name, description }: ICreateTypeDTO): Promise<void> {
    await prisma.types.create({
      data: {
        name,
        description,
      },
    });
  }
}

export { TypesRepository };

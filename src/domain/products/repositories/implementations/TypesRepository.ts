import { Type } from "../../entities/Type";
import {
  ICreateTypeDTO,
  ITypesRepository,
} from "../interfaces/ITypesRepository";

class TypesRepository implements ITypesRepository {
  private types: Type[];

  private static INSTANCE: TypesRepository;

  private constructor() {
    this.types = [];
  }

  public static getInstance(): TypesRepository {
    if (!TypesRepository.INSTANCE) {
      TypesRepository.INSTANCE = new TypesRepository();
    }

    return TypesRepository.INSTANCE;
  }

  findByName(name: string) {
    const type = this.types.find((type) => type.name === name);
    return type;
  }

  list(): Type[] {
    return this.types;
  }

  create({ name, description }: ICreateTypeDTO): void {
    const type = new Type();

    Object.assign(type, {
      name,
      description,
    });

    this.types.push(type);
  }
}

export { TypesRepository };

import { Type } from "../../entities/Type";

interface ICreateTypeDTO {
  name: string;
  description: string;
}

interface ITypesRepository {
  findByName(name: string): Promise<Type | undefined>;
  list(): Promise<Type[]>;
  create({ name, description }: ICreateTypeDTO): Promise<void>;
}

export { ITypesRepository, ICreateTypeDTO };

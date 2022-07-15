import { Type } from "../../entities/Type";

interface ICreateTypeDTO {
  name: string;
  description: string;
}

interface ITypesRepository {
  findByName(name: string): Type | undefined;
  list(): Type[];
  create({ name, description }: ICreateTypeDTO): void;
}

export { ITypesRepository, ICreateTypeDTO };

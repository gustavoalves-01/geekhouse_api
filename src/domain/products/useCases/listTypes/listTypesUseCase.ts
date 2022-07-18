import { Type } from "../../entities/Type";
import { ITypesRepository } from "../../repositories/interfaces/ITypesRepository";

class ListTypesUseCase {
  constructor(private typesRepository: ITypesRepository) {}

  async execute(): Promise<Type[]> {
    const types = await this.typesRepository.list();

    return types;
  }
}
export { ListTypesUseCase };

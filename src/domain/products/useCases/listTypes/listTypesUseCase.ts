import { Type } from "../../entities/Type";
import { ITypesRepository } from "../../repositories/interfaces/ITypesRepository";

class ListTypesUseCase {
  constructor(private typesRepository: ITypesRepository) {}

  execute(): Type[] {
    const types = this.typesRepository.list();

    return types;
  }
}
export { ListTypesUseCase };

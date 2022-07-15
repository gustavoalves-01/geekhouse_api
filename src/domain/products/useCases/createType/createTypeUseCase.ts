import { ITypesRepository } from "../../repositories/interfaces/ITypesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateTypeUseCase {
  constructor(private typesRepository: ITypesRepository) {}

  execute({ name, description }: IRequest): void {
    const typeAlreadyExists = this.typesRepository.findByName(name);

    if (typeAlreadyExists) {
      throw new Error("A type with the provided name already exists.");
    }

    this.typesRepository.create({ name, description });
  }
}

export { CreateTypeUseCase };

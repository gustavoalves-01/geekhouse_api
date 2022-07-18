import { ITypesRepository } from "../../repositories/interfaces/ITypesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateTypeUseCase {
  constructor(private typesRepository: ITypesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const typeAlreadyExists = await this.typesRepository.findByName(name);

    if (typeAlreadyExists) {
      throw new Error("A type with the provided name already exists.");
    }

    this.typesRepository.create({ name, description });
  }
}

export { CreateTypeUseCase };

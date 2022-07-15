import { TypesRepository } from "../../repositories/implementations/TypesRepository";
import { CreateTypeController } from "./createTypeController";
import { CreateTypeUseCase } from "./createTypeUseCase";

const typesRepository = TypesRepository.getInstance();

const createTypeUseCase = new CreateTypeUseCase(typesRepository);

const createTypeController = new CreateTypeController(createTypeUseCase);

export { createTypeController };

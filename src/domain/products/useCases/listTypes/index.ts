import { TypesRepository } from "../../repositories/implementations/TypesRepository";
import { ListTypesController } from "./listTypesController";
import { ListTypesUseCase } from "./listTypesUseCase";

const typesRepository = TypesRepository.getInstance();

const listTypesUseCase = new ListTypesUseCase(typesRepository);

const listTypesController = new ListTypesController(listTypesUseCase);

export { listTypesController };

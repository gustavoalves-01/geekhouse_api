import { TypesRepository } from "../../repositories/implementations/TypesRepository";
import { ListTypesController } from "./listTypesController";
import { ListTypesUseCase } from "./listTypesUseCase";

export default (): ListTypesController => {
  const typesRepository = new TypesRepository();

  const listTypesUseCase = new ListTypesUseCase(typesRepository);

  const listTypesController = new ListTypesController(listTypesUseCase);

  return listTypesController;
};

import { TypesRepository } from "../../repositories/implementations/TypesRepository";
import { CreateTypeController } from "./createTypeController";
import { CreateTypeUseCase } from "./createTypeUseCase";

export default (): CreateTypeController => {
  const typesRepository = new TypesRepository();

  const createTypeUseCase = new CreateTypeUseCase(typesRepository);

  const createTypeController = new CreateTypeController(createTypeUseCase);

  return createTypeController;
};

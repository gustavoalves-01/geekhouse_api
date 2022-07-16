import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { FindProductController } from "./findProductController";
import { FindProductUseCase } from "./findProductUseCase";

export default (): FindProductController => {
  const productsRepository = new ProductsRepository();

  const findProductUseCase = new FindProductUseCase(productsRepository);

  const findProductController = new FindProductController(findProductUseCase);

  return findProductController;
};

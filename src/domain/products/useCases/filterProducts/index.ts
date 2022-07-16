import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { FilterProductsController } from "./filterProductsController";
import { FilterProductsUseCase } from "./filterProductsUseCase";

export default (): FilterProductsController => {
  const productsRepository = new ProductsRepository();

  const filterProductsUseCase = new FilterProductsUseCase(productsRepository);

  const filterProductsController = new FilterProductsController(
    filterProductsUseCase
  );
  return filterProductsController;
};

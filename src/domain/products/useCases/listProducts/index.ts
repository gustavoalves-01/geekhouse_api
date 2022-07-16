import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { ListProductsController } from "./listProductsController";
import { ListProductsUseCase } from "./listProductsUseCase";

export default (): ListProductsController => {
  const productsRepository = new ProductsRepository();

  const listProductsUseCase = new ListProductsUseCase(productsRepository);

  const listProductsController = new ListProductsController(
    listProductsUseCase
  );

  return listProductsController;
};

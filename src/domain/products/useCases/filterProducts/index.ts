import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { FilterProductsController } from "./filterProductsController";
import { FilterProductsUseCase } from "./filterProductsUseCase";

const productsRepository = ProductsRepository.getInstance();

const filterProductsUseCase = new FilterProductsUseCase(productsRepository);

const filterProductsController = new FilterProductsController(
  filterProductsUseCase
);

export { filterProductsController };

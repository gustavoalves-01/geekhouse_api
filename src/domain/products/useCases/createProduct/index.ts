import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { TypesRepository } from "../../repositories/implementations/TypesRepository";
import { CreateProductController } from "./createProductController";
import { CreateProductUseCase } from "./createProductUseCase";

export default (): CreateProductController => {
  const productsRepository = new ProductsRepository();
  const typesRepository = new TypesRepository();
  const categoriesRepository = new CategoriesRepository();

  const createProductUseCase = new CreateProductUseCase(
    productsRepository,
    typesRepository,
    categoriesRepository
  );

  const createProductController = new CreateProductController(
    createProductUseCase
  );

  return createProductController;
};

import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { TypesRepository } from "../../repositories/implementations/TypesRepository";
import { CreateProductController } from "./createProductController";
import { CreateProductUseCase } from "./createProductUseCase";

const productsRepository = ProductsRepository.getInstance();
const typesRepository = TypesRepository.getInstance();
const categoriesRepository = CategoriesRepository.getInstance();

const createProductUseCase = new CreateProductUseCase(
  productsRepository,
  typesRepository,
  categoriesRepository
);

const createProductController = new CreateProductController(
  createProductUseCase
);

export { createProductController };

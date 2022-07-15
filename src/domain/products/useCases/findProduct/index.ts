import { ProductsRepository } from "../../repositories/implementations/ProductsRepository";
import { FindProductController } from "./findProductController";
import { FindProductUseCase } from "./findProductUseCase";

const productsRepository = ProductsRepository.getInstance();

const findProductUseCase = new FindProductUseCase(productsRepository);

const findProductController = new FindProductController(findProductUseCase);

export { findProductController };

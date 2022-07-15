import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";

class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute(): Product[] {
    const products = this.productsRepository.list();

    return products;
  }
}
export { ListProductsUseCase };

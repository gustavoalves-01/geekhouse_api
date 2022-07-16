import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";

class ListProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.list();

    return products;
  }
}
export { ListProductsUseCase };

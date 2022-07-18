import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";

interface IRequest {
  type?: string;
  category?: string;
}

class FilterProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({ type, category }: IRequest): Promise<Product[]> {
    const products = await this.productsRepository.filter(type, category);

    return products;
  }
}

export { FilterProductsUseCase };

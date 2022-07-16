import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";

interface IRequest {
  type?: string;
  category?: string;
}

class FilterProductsUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  async execute({ type, category }: IRequest): Promise<Product[]> {
    let products = await this.productsRepository.list();

    if (type) {
      products = products.filter((product) => product.type.name === type);
    }

    if (category) {
      products = products.filter(
        (product) => product.category.name === category
      );
    }

    return products;
  }
}

export { FilterProductsUseCase };

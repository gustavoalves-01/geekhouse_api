import { Product } from "../../entities/Product";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";

interface IRequest {
  name: string;
}
class FindProductUseCase {
  constructor(private productsRepository: IProductsRepository) {}

  execute({ name }: IRequest): Product {
    const product = this.productsRepository.findByName(name);

    if (!product) {
      throw new Error("Product not found.");
    }

    return product;
  }
}
export { FindProductUseCase };

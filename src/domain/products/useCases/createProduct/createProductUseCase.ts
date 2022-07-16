import { Product } from "../../entities/Product";
import { ICategoriesRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { IProductsRepository } from "../../repositories/interfaces/IProductsRepository";
import { ITypesRepository } from "../../repositories/interfaces/ITypesRepository";

interface IRequest {
  name: string;
  description: string;
  type_name: string;
  category_name: string;
  price: number;
  discount?: number;
  onlyRentStock: number;
  onlySaleStock: number;
  rentAndSaleStock: number;
}

class CreateProductUseCase {
  constructor(
    private productsRepository: IProductsRepository,
    private typesRepository: ITypesRepository,
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(product: IRequest): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByName(
      product.name
    );

    if (productAlreadyExists) {
      throw new Error(
        "A product with the provided name already exists, please choose another."
      );
    }

    const productType = this.typesRepository.findByName(product.type_name);
    const productCategory = this.categoriesRepository.findByName(
      product.category_name
    );

    if (!productType) {
      throw new Error(
        "The product type provided doesn't exists, please choose a valid one."
      );
    } else if (!productCategory) {
      throw new Error(
        "The product category provided doesn't exists, please choose a valid one."
      );
    }

    const newProduct: Product = {
      name: product.name,
      description: product.description,
      type: productType,
      category: productCategory,
      price: product.price,
      discount: product.discount || 0,
      onlyRentStock: product.onlyRentStock,
      onlySaleStock: product.onlySaleStock,
      rentAndSaleStock: product.rentAndSaleStock,
    };

    this.productsRepository.create(newProduct);
  }
}

export { CreateProductUseCase };

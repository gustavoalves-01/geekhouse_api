import { Product } from "../../entities/Product";
import {
  ICreateProductDTO,
  IProductsRepository,
} from "../interfaces/IProductsRepository";

class ProductsRepository implements IProductsRepository {
  private products: Product[];

  private static INSTANCE: ProductsRepository;

  constructor() {
    this.products = [];
  }

  public static getInstance(): ProductsRepository {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }
    return ProductsRepository.INSTANCE;
  }

  findByName(name: string): Product | undefined {
    const product = this.products.find((product) => product.name === name);
    return product;
  }

  list(): Product[] {
    return this.products;
  }

  create(productData: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      name: productData.name,
      description: productData.description,
      type: productData.type,
      category: productData.category,
      price: productData.price,
      discount: productData.discount,
      onlyRentStock: productData.onlyRentStock,
      onlySaleStock: productData.onlySaleStock,
      rentAndSaleStock: productData.rentAndSaleStock,
    });

    this.products.push(product);
  }
}

export { ProductsRepository };

import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";
import { Type } from "../../entities/Type";

interface ICreateProductDTO {
  name: string;
  description: string;
  type: Type;
  category: Category;
  price: number;
  discount: number;
  onlyRentStock: number;
  onlySaleStock: number;
  rentAndSaleStock: number;
}

interface IProductsRepository {
  findByName(name: string): Promise<Product | undefined>;
  list(): Promise<Product[]>;
  filter(type?: string, category?: string): Promise<Product[]>;
  create(product: ICreateProductDTO): Promise<void>;
}

export { ICreateProductDTO, IProductsRepository };

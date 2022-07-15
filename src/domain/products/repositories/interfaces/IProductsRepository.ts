import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";
import { Type } from "../../entities/Type";

interface ICreateProductDTO {
  name: string;
  description: string;
  type: Type;
  category: Category;
  price: number;
  discount?: number;
  rentStockAvailbility: number;
  saleStockAvailbility: number;
}

interface IProductsRepository {
  findByName(name: string): Product | undefined;
  list(): Product[];
  create(product: ICreateProductDTO): void;
}

export { ICreateProductDTO, IProductsRepository };

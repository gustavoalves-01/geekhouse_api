import { Product } from "../../products/entities/Product";

class Sale {
  id: string;
  product: Product;
  customer: string;
  sale_date: Date;
}

export { Sale };

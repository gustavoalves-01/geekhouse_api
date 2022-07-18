import { Product } from "../../products/entities/Product";

class Rent {
  id: string;
  product: Product;
  customer: string;
  start_date: Date;
  end_date: Date;
  status: string;
}

export { Rent };

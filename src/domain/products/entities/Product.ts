import crypto from "crypto";

import { Category } from "./Category";
import { Type } from "./Type";

class Product {
  id?: string;
  name: string;
  description: string;
  type: Type;
  category: Category;
  price: number;
  discount: number;
  rentStockAvailbility: number;
  saleStockAvailbility: number;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}

export { Product };

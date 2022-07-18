import { Rent } from "./Rent";
import { Sale } from "./Sale";

class Order {
  id: string;
  purchases: Array<Rent | Sale>;
  created_at: Date;
  status: string;
}

export { Order };

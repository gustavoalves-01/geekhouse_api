import { Order } from "../../entities/Order";

interface IOrdersRepository {
  create(purchaseIds: string[]): Promise<void>;
  list(): Promise<Order[]>;
}

export { IOrdersRepository };

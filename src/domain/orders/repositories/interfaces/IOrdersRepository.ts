import { Order } from "../../entities/Order";

interface IOrdersRepository {
  create(purchaseIds: string[]): Promise<void>;
  list(): Order[];
}

export { IOrdersRepository };

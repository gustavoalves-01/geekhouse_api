import { Order } from "../../entities/Order";
import { IOrdersRepository } from "../../repositories/interfaces/IOrdersRepository";

class ListOrdersUseCase {
  constructor(private ordersRepository: IOrdersRepository) {}

  async execute(): Promise<Order[]> {
    const orders = await this.ordersRepository.list();

    return orders;
  }
}
export { ListOrdersUseCase };

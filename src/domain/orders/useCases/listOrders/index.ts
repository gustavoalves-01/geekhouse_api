import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { ListOrdersController } from "./listOrdersController";
import { ListOrdersUseCase } from "./listOrdersUseCase";

export default (): ListOrdersController => {
  const ordersRepository = new OrdersRepository();

  const listOrdersUseCase = new ListOrdersUseCase(ordersRepository);

  const listOrdersController = new ListOrdersController(listOrdersUseCase);

  return listOrdersController;
};

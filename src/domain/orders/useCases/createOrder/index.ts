import { OrdersRepository } from "../../repositories/implementations/OrdersRepository";
import { RentsRepository } from "../../repositories/implementations/RentsRepository";
import { SalesRepository } from "../../repositories/implementations/SalesRepository";
import { CreateOrderController } from "./createOrderController";
import { CreateOrderUseCase } from "./createOrderUseCase";

export default (): CreateOrderController => {
  const ordersRepository = new OrdersRepository();
  const rentsRepository = new RentsRepository();
  const salesRepository = new SalesRepository();

  const createOrderUseCase = new CreateOrderUseCase(
    ordersRepository,
    rentsRepository,
    salesRepository
  );

  const createOrderController = new CreateOrderController(createOrderUseCase);

  return createOrderController;
};

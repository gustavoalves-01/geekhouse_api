import { RentsRepository } from "../../repositories/implementations/RentsRepository";
import { ReceiveProductController } from "./receiveProductController";
import { ReceiveProductUseCase } from "./receiveProductUseCase";

export default (): ReceiveProductController => {
  const rentsRepository = new RentsRepository();

  const receiveProductUseCase = new ReceiveProductUseCase(rentsRepository);

  const receiveProductController = new ReceiveProductController(
    receiveProductUseCase
  );

  return receiveProductController;
};

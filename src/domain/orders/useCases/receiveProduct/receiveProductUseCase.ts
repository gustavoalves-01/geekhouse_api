import { IRentsRepository } from "../../repositories/interfaces/IRentsRepository";

interface IRequest {
  rentId: string;
  onlyRent: boolean;
}

class ReceiveProductUseCase {
  constructor(private rentsRepository: IRentsRepository) {}

  async execute({ rentId, onlyRent }: IRequest): Promise<void> {
    await this.rentsRepository.receiveProduct({
      rentId,
      onlyRent,
    });
  }
}
export { ReceiveProductUseCase };

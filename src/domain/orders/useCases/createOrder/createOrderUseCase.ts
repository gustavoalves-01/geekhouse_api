import { Rent } from "../../entities/Rent";
import { Sale } from "../../entities/Sale";
import { IOrdersRepository } from "../../repositories/interfaces/IOrdersRepository";
import {
  IRentProductDTO,
  IRentsRepository,
} from "../../repositories/interfaces/IRentsRepository";
import {
  ISalesRepository,
  ISellProductDTO,
} from "../../repositories/interfaces/ISalesRepository";

interface IRequest {
  rents?: IRentProductDTO[];
  sales?: ISellProductDTO[];
}

class CreateOrderUseCase {
  constructor(
    private ordersRepository: IOrdersRepository,
    private rentsRepository: IRentsRepository,
    private salesRepository: ISalesRepository
  ) {}

  async execute({ rents, sales }: IRequest): Promise<void> {
    const purchasesIds: string[] = [];

    if (rents) {
      await Promise.all(
        rents.map(async (rent) => {
          const rentId = await this.rentsRepository.rentProduct({
            customer: rent.customer,
            days: rent.days,
            productId: rent.productId,
          });

          purchasesIds.push(rentId);
        })
      );
    }

    if (sales) {
      await Promise.all(
        sales.map(async (sale) => {
          const saleId = await this.salesRepository.sellProduct({
            customer: sale.customer,
            productId: sale.productId,
          });

          purchasesIds.push(saleId);
        })
      );
    }

    await this.ordersRepository.create(purchasesIds);
  }
}

export { CreateOrderUseCase };

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

    const rentsIds: { rentId: string; onlyRent: boolean }[] = [];
    const salesIds: { saleId: string; onlySale: boolean }[] = [];

    if (rents) {
      await Promise.all(
        rents.map(async (rent) => {
          const rentId = await this.rentsRepository.rentProduct({
            customer: rent.customer,
            days: rent.days,
            productId: rent.productId,
            onlyRent: rent.onlyRent,
          });

          rentsIds.push({ rentId, onlyRent: rent.onlyRent });
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
            onlySale: sale.onlySale,
          });

          salesIds.push({ saleId, onlySale: sale.onlySale });
          purchasesIds.push(saleId);
        })
      );
    }

    await this.ordersRepository.create(purchasesIds).catch(() => {
      rentsIds.forEach((rent) => {
        this.rentsRepository.cancelRent({
          rentId: rent.rentId,
          onlyRent: rent.onlyRent,
        });
      });

      salesIds.forEach((sale) => {
        this.salesRepository.cancelSale({
          saleId: sale.saleId,
          onlySale: sale.onlySale,
        });
      });
    });
  }
}

export { CreateOrderUseCase };

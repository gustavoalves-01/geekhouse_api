import { PrismaClient } from "@prisma/client";

import {
  ISalesRepository,
  ISellProductDTO,
} from "../interfaces/ISalesRepository";

const prisma = new PrismaClient();

class SalesRepository implements ISalesRepository {
  async sellProduct({ productId, customer }: ISellProductDTO): Promise<string> {
    await prisma.products.update({
      where: { id: productId },
      data: { only_sale_stock: { decrement: 1 } },
    });

    const sale = await prisma.sales.create({
      data: {
        customer,
        sale_date: new Date(),
        productId,
      },
    });

    return sale.id;
  }
}

export { SalesRepository };

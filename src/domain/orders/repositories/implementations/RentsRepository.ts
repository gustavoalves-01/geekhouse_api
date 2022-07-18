import { PrismaClient } from "@prisma/client";

import {
  IRentsRepository,
  IRentProductDTO,
} from "../interfaces/IRentsRepository";

const prisma = new PrismaClient();

class RentsRepository implements IRentsRepository {
  async rentProduct({
    productId,
    customer,
    days,
  }: IRentProductDTO): Promise<string> {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + days);

    await prisma.products.update({
      where: { id: productId },
      data: { only_rent_stock: { decrement: 1 } },
    });

    const rent = await prisma.rents.create({
      data: {
        customer,
        start_date: startDate,
        end_date: endDate,
        productId,
        status: "rented",
      },
    });

    return rent.id;
  }

  async receiveProduct(rentId: string): Promise<void> {
    prisma.rents.update({
      where: { id: rentId },
      data: { status: "returned" },
    });

    const rentedProduct = await prisma.products.findFirst({
      where: { rents: { some: { id: rentId } } },
    });

    if (rentedProduct) {
      await prisma.products.update({
        where: { id: rentedProduct.id },
        data: { only_rent_stock: { increment: 1 } },
      });
    }
  }
}

export { RentsRepository };

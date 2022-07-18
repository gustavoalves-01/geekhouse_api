import { PrismaClient } from "@prisma/client";

import {
  IRentsRepository,
  IRentProductDTO,
  IReceiveProductDTO,
} from "../interfaces/IRentsRepository";

const prisma = new PrismaClient();

class RentsRepository implements IRentsRepository {
  async cancelRent({ rentId, onlyRent }: IReceiveProductDTO): Promise<void> {
    prisma.rents.delete({
      where: { id: rentId },
    });

    const rentedProduct = await prisma.products.findFirst({
      where: { rents: { some: { id: rentId } } },
    });

    if (rentedProduct) {
      if (onlyRent) {
        await prisma.products.update({
          where: { id: rentedProduct.id },
          data: { only_rent_stock: { increment: 1 } },
        });
      } else {
        await prisma.products.update({
          where: { id: rentedProduct.id },
          data: { rent_and_sale_stock: { increment: 1 } },
        });
      }
    }
  }

  async rentProduct({
    productId,
    customer,
    days,
  }: IRentProductDTO): Promise<string> {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + days);

    const product = await prisma.products.findFirstOrThrow({
      where: { id: productId },
    });

    if (product.only_rent_stock > 0) {
      await prisma.products.update({
        where: { id: productId },
        data: { only_rent_stock: { decrement: 1 } },
      });
    } else if (product.rent_and_sale_stock > 0) {
      await prisma.products.update({
        where: { id: productId },
        data: { rent_and_sale_stock: { decrement: 1 } },
      });
    } else {
      throw new Error("Product unavailable.");
    }

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

  async receiveProduct({
    rentId,
    onlyRent,
  }: IReceiveProductDTO): Promise<void> {
    const rent = await prisma.rents.findFirst({
      where: { id: rentId },
    });

    if (rent?.status === "returned") {
      throw new Error("Rent already received");
    }

    await prisma.rents.update({
      where: { id: rentId },
      data: { status: "returned" },
    });

    const rentedProduct = await prisma.products.findFirst({
      where: { rents: { some: { id: rentId } } },
    });

    if (rentedProduct) {
      if (onlyRent) {
        await prisma.products.update({
          where: { id: rentedProduct.id },
          data: { only_rent_stock: { increment: 1 } },
        });
      } else {
        await prisma.products.update({
          where: { id: rentedProduct.id },
          data: { rent_and_sale_stock: { increment: 1 } },
        });
      }
    }
  }
}

export { RentsRepository };

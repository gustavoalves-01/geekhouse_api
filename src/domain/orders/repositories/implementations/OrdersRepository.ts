import { Prisma, PrismaClient } from "@prisma/client";

import { Order } from "../../entities/Order";
import { IOrdersRepository } from "../interfaces/IOrdersRepository";

const prisma = new PrismaClient();

class OrdersRepository implements IOrdersRepository {
  async create(purchaseIds: string[]): Promise<void> {
    const rents = await prisma.rents.findMany({
      where: { id: { in: purchaseIds } },
    });

    const sales = await prisma.sales.findMany({
      where: { id: { in: purchaseIds } },
    });

    if (!rents && !sales) {
      throw new Error("The order is empty.");
    }

    const orderData: Prisma.OrdersCreateInput = {
      created_at: new Date(),
      status: "pending",
    };

    if (sales.length > 0) {
      Object.assign(orderData, {
        status: "finished",
        sales,
      });
    }

    if (rents.length > 0) {
      Object.assign(orderData, {
        status: "rented",
        rents: {
          connect: rents.map((rent) => {
            return { id: rent.id };
          }),
        },
      });
    }

    await prisma.orders.create({
      data: orderData,
    });
  }

  list(): Order[] {
    throw new Error("Method not implemented.");
  }
}

export { OrdersRepository };

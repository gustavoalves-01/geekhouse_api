import { Prisma, PrismaClient } from "@prisma/client";

import { Order } from "../../entities/Order";
import { Rent } from "../../entities/Rent";
import { Sale } from "../../entities/Sale";
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
        sales: {
          connect: sales.map((sale) => {
            return { id: sale.id };
          }),
        },
      });
    }

    if (rents.length > 0) {
      Object.assign(orderData, {
        status: "pendding rent",
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

  async list(): Promise<Order[]> {
    const data = await prisma.orders.findMany({
      include: {
        rents: {
          include: {
            product: { include: { category: true, type: true } },
          },
        },
        sales: {
          include: {
            product: { include: { category: true, type: true } },
          },
        },
      },
    });

    const orders: Order[] = data.map((order) => {
      const newRents: Rent[] = order.rents.map((rent) => {
        return {
          id: rent.id,
          customer: rent.customer,
          start_date: rent.start_date,
          end_date: rent.end_date,
          product: {
            id: rent.product.id,
            name: rent.product.name,
            description: rent.product.description,
            category: rent.product.category,
            price: rent.product.price,
            discount: rent.product.discount,
            onlyRentStock: rent.product.only_rent_stock,
            onlySaleStock: rent.product.only_sale_stock,
            rentAndSaleStock: rent.product.rent_and_sale_stock,
            type: rent.product.type,
          },
          status: rent.status,
        };
      });

      const newSales: Sale[] = order.sales.map((sale) => {
        return {
          id: sale.id,
          customer: sale.customer,
          sale_date: sale.sale_date,
          product: {
            id: sale.product.id,
            name: sale.product.name,
            description: sale.product.description,
            category: sale.product.category,
            price: sale.product.price,
            discount: sale.product.discount,
            onlyRentStock: sale.product.only_rent_stock,
            onlySaleStock: sale.product.only_sale_stock,
            rentAndSaleStock: sale.product.rent_and_sale_stock,
            type: sale.product.type,
          },
        };
      });

      const purchases: (Rent | Sale)[] = [...newRents, ...newSales];

      return {
        id: order.id,
        created_at: order.created_at,
        purchases,
        status: order.status,
      };
    });

    return orders;
  }
}

export { OrdersRepository };

import { PrismaClient } from "@prisma/client";

import {
  ICancelSaleDTO,
  ISalesRepository,
  ISellProductDTO,
} from "../interfaces/ISalesRepository";

const prisma = new PrismaClient();

class SalesRepository implements ISalesRepository {
  async sellProduct({ productId, customer }: ISellProductDTO): Promise<string> {
    const product = await prisma.products.findFirstOrThrow({
      where: { id: productId },
    });

    if (product.only_sale_stock > 0) {
      await prisma.products.update({
        where: { id: productId },
        data: { only_sale_stock: { decrement: 1 } },
      });
    } else if (product.rent_and_sale_stock > 0) {
      await prisma.products.update({
        where: { id: productId },
        data: { rent_and_sale_stock: { decrement: 1 } },
      });
    } else {
      throw new Error("Product unavailable.");
    }

    const sale = await prisma.sales.create({
      data: {
        customer,
        sale_date: new Date(),
        productId,
      },
    });

    return sale.id;
  }

  async cancelSale({ saleId, onlySale }: ICancelSaleDTO): Promise<void> {
    prisma.sales.delete({
      where: { id: saleId },
    });

    const saledProduct = await prisma.products.findFirst({
      where: { sales: { some: { id: saleId } } },
    });

    if (saledProduct) {
      if (onlySale) {
        await prisma.products.update({
          where: { id: saledProduct.id },
          data: { only_sale_stock: { increment: 1 } },
        });
      } else {
        await prisma.products.update({
          where: { id: saledProduct.id },
          data: { rent_and_sale_stock: { increment: 1 } },
        });
      }
    }
  }
}

export { SalesRepository };

import { PrismaClient, Prisma } from "@prisma/client";

import { Product } from "../../entities/Product";
import {
  ICreateProductDTO,
  IProductsRepository,
} from "../interfaces/IProductsRepository";

const prisma = new PrismaClient();

class ProductsRepository implements IProductsRepository {
  async findByName(name: string): Promise<Product | undefined> {
    const productData = await prisma.products.findFirst({
      where: { name },
      include: { category: true, type: true },
    });

    if (productData) {
      const product: Product = {
        name: productData.name,
        description: productData.description,
        type: productData.type,
        category: productData.category,
        price: productData.price,
        discount: productData.discount,
        onlyRentStock: productData.only_rent_stock,
        onlySaleStock: productData.only_sale_stock,
        rentAndSaleStock: productData.rent_and_sale_stock,
      };
      return product;
    }
    return undefined;
  }

  async list(): Promise<Product[]> {
    const data = await prisma.products.findMany({
      include: { category: true, type: true },
    });

    const products: Product[] = data.map((product) => {
      return {
        name: product.name,
        description: product.description,
        type: product.type,
        category: product.category,
        price: product.price,
        discount: product.discount,
        onlyRentStock: product.only_rent_stock,
        onlySaleStock: product.only_sale_stock,
        rentAndSaleStock: product.rent_and_sale_stock,
      };
    });

    return products;
  }

  async filter(type?: string, category?: string): Promise<Product[]> {
    const filterOptions: Prisma.ProductsWhereInput = {};

    if (type && category) {
      Object.assign(filterOptions, {
        type: {
          name: {
            equals: type,
          },
        },
        category: {
          name: {
            equals: category,
          },
        },
      });
    } else if (type) {
      Object.assign(filterOptions, {
        type: {
          name: {
            equals: type,
          },
        },
      });
    } else if (category) {
      Object.assign(filterOptions, {
        category: {
          name: {
            equals: category,
          },
        },
      });
    }
    try {
      const data = await prisma.products.findMany({
        include: { category: true, type: true },
        where: filterOptions,
      });

      const products: Product[] = data.map((product) => {
        return {
          name: product.name,
          description: product.description,
          type: product.type,
          category: product.category,
          price: product.price,
          discount: product.discount,
          onlyRentStock: product.only_rent_stock,
          onlySaleStock: product.only_sale_stock,
          rentAndSaleStock: product.rent_and_sale_stock,
        };
      });

      return products;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(err.message);
      }
      throw err;
    }
  }

  async create(productData: ICreateProductDTO): Promise<void> {
    try {
      await prisma.products.create({
        data: {
          name: productData.name,
          description: productData.description,
          type_id: productData.type.id,
          category_id: productData.category.id,
          price: productData.price,
          discount: productData.discount,
          only_rent_stock: productData.onlyRentStock,
          only_sale_stock: productData.onlySaleStock,
          rent_and_sale_stock: productData.rentAndSaleStock,
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(err.message);
      }
      throw err;
    }
  }
}

export { ProductsRepository };

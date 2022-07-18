"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class OrdersRepository {
    async create(purchaseIds) {
        const rents = await prisma.rents.findMany({
            where: { id: { in: purchaseIds } },
        });
        console.log(purchaseIds);
        const sales = await prisma.sales.findMany({
            where: { id: { in: purchaseIds } },
        });
        if (!rents && !sales) {
            throw new Error("The order is empty.");
        }
        const orderData = {
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
                rents,
            });
        }
        await prisma.orders.create({
            data: orderData,
        });
    }
    list() {
        throw new Error("Method not implemented.");
    }
}
exports.OrdersRepository = OrdersRepository;

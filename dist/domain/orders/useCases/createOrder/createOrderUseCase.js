"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
class CreateOrderUseCase {
    constructor(ordersRepository, rentsRepository) {
        this.ordersRepository = ordersRepository;
        this.rentsRepository = rentsRepository;
    }
    async execute({ rents, sales }) {
        const purchasesIds = [];
        if (rents) {
            rents.forEach(async (rent) => {
                const rentId = await this.rentsRepository.rentProduct({
                    customer: rent.customer,
                    days: rent.days,
                    productId: rent.productId,
                });
                purchasesIds.push(rentId);
            });
            console.log(purchasesIds);
        }
        // await this.ordersRepository.create(purchasesIds);
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;

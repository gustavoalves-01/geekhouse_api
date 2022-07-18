"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
class CreateOrderController {
    constructor(createOrderUseCase) {
        this.createOrderUseCase = createOrderUseCase;
    }
    async handle(request, response) {
        const { rents, sales } = request.body;
        if (!rents && !sales) {
            return response.status(400).json({ error: "The order is empty" });
        }
        if (rents) {
            await this.createOrderUseCase
                .execute({
                rents,
            })
                .catch((err) => console.error(err));
        }
        return response.status(201).send();
    }
}
exports.CreateOrderController = CreateOrderController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OrdersRepository_1 = require("../../repositories/implementations/OrdersRepository");
const RentsRepository_1 = require("../../repositories/implementations/RentsRepository");
const createOrderController_1 = require("./createOrderController");
const createOrderUseCase_1 = require("./createOrderUseCase");
exports.default = () => {
    const ordersRepository = new OrdersRepository_1.OrdersRepository();
    const rentsRepository = new RentsRepository_1.RentsRepository();
    const createOrderUseCase = new createOrderUseCase_1.CreateOrderUseCase(ordersRepository, rentsRepository);
    const createOrderController = new createOrderController_1.CreateOrderController(createOrderUseCase);
    return createOrderController;
};

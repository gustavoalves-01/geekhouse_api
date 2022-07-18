"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRoutes = void 0;
const express_1 = require("express");
const createOrder_1 = __importDefault(require("../domain/orders/useCases/createOrder"));
const ordersRoutes = (0, express_1.Router)();
exports.ordersRoutes = ordersRoutes;
ordersRoutes.post("/", (req, res) => {
    return (0, createOrder_1.default)().handle(req, res);
});

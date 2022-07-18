"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const createProduct_1 = __importDefault(require("../domain/products/useCases/createProduct"));
const filterProducts_1 = __importDefault(require("../domain/products/useCases/filterProducts"));
const findProduct_1 = __importDefault(require("../domain/products/useCases/findProduct"));
const listProducts_1 = __importDefault(require("../domain/products/useCases/listProducts"));
const productsRoutes = (0, express_1.Router)();
exports.productsRoutes = productsRoutes;
productsRoutes.post("/", (req, res) => {
    return (0, createProduct_1.default)().handle(req, res);
});
productsRoutes.get("/", (req, res) => {
    const { type, category } = req.query;
    if (type || category) {
        return (0, filterProducts_1.default)().handle(req, res);
    }
    return (0, listProducts_1.default)().handle(req, res);
});
productsRoutes.get("/:name", (req, res) => {
    return (0, findProduct_1.default)().handle(req, res);
});

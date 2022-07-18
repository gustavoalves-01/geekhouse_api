"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const createCategory_1 = __importDefault(require("../domain/products/useCases/createCategory"));
const listCategories_1 = __importDefault(require("../domain/products/useCases/listCategories"));
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.post("/", (req, res) => {
    return (0, createCategory_1.default)().handle(req, res);
});
categoriesRoutes.get("/", (req, res) => {
    return (0, listCategories_1.default)().handle(req, res);
});

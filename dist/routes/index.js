"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_routes_1 = require("./categories.routes");
const orders_routes_1 = require("./orders.routes");
const products_routes_1 = require("./products.routes");
const types_routes_1 = require("./types.routes");
const routes = (0, express_1.Router)();
routes.use("/categories", categories_routes_1.categoriesRoutes);
routes.use("/types", types_routes_1.typesRoutes);
routes.use("/products", products_routes_1.productsRoutes);
routes.use("/orders", orders_routes_1.ordersRoutes);
exports.default = routes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesRoutes = void 0;
const express_1 = require("express");
const createType_1 = __importDefault(require("../domain/products/useCases/createType"));
const listTypes_1 = __importDefault(require("../domain/products/useCases/listTypes"));
const typesRoutes = (0, express_1.Router)();
exports.typesRoutes = typesRoutes;
typesRoutes.post("/", (req, res) => {
    return (0, createType_1.default)().handle(req, res);
});
typesRoutes.get("/", (req, res) => {
    return (0, listTypes_1.default)().handle(req, res);
});

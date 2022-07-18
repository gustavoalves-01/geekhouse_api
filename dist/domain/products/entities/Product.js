"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const crypto_1 = __importDefault(require("crypto"));
class Product {
    constructor() {
        if (!this.id) {
            this.id = crypto_1.default.randomUUID();
        }
    }
}
exports.Product = Product;

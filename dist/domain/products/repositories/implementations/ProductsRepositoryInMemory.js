"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const Product_1 = require("../../entities/Product");
class ProductsRepository {
    constructor() {
        this.products = [];
    }
    static getInstance() {
        if (!ProductsRepository.INSTANCE) {
            ProductsRepository.INSTANCE = new ProductsRepository();
        }
        return ProductsRepository.INSTANCE;
    }
    findByName(name) {
        const product = this.products.find((product) => product.name === name);
        return product;
    }
    list() {
        return this.products;
    }
    create(productData) {
        const product = new Product_1.Product();
        Object.assign(product, {
            name: productData.name,
            description: productData.description,
            type: productData.type,
            category: productData.category,
            price: productData.price,
            discount: productData.discount,
            onlyRentStock: productData.onlyRentStock,
            onlySaleStock: productData.onlySaleStock,
            rentAndSaleStock: productData.rentAndSaleStock,
        });
        this.products.push(product);
    }
}
exports.ProductsRepository = ProductsRepository;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
class CreateProductUseCase {
    constructor(productsRepository, typesRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.typesRepository = typesRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async execute(product) {
        const productAlreadyExists = await this.productsRepository.findByName(product.name);
        if (productAlreadyExists) {
            throw new Error("A product with the provided name already exists, please choose another.");
        }
        const productType = await this.typesRepository.findByName(product.type_name);
        const productCategory = await this.categoriesRepository.findByName(product.category_name);
        if (!productType) {
            throw new Error("The product type provided doesn't exists, please choose a valid one.");
        }
        else if (!productCategory) {
            throw new Error("The product category provided doesn't exists, please choose a valid one.");
        }
        const newProduct = {
            name: product.name,
            description: product.description,
            type: productType,
            category: productCategory,
            price: product.price,
            discount: product.discount || 0,
            onlyRentStock: product.onlyRentStock,
            onlySaleStock: product.onlySaleStock,
            rentAndSaleStock: product.rentAndSaleStock,
        };
        this.productsRepository.create(newProduct);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;

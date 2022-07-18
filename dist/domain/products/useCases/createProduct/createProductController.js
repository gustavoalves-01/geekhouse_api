"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
class CreateProductController {
    constructor(createProductUseCase) {
        this.createProductUseCase = createProductUseCase;
    }
    async handle(request, response) {
        const { name, description, type_name, category_name, price, discount, onlyRentStock, onlySaleStock, rentAndSaleStock, } = request.body;
        try {
            await this.createProductUseCase.execute({
                name,
                description,
                type_name,
                category_name,
                price,
                discount,
                onlyRentStock,
                onlySaleStock,
                rentAndSaleStock,
            });
            return response.status(201).send();
        }
        catch (err) {
            return response
                .status(400)
                .json({ error: "Error to register product. Please check the fields." });
        }
    }
}
exports.CreateProductController = CreateProductController;

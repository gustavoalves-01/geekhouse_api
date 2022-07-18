import { Request, Response } from "express";

import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      type_name,
      category_name,
      price,
      discount,
      onlyRentStock,
      onlySaleStock,
      rentAndSaleStock,
    } = request.body;

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
    } catch (err) {
      return response
        .status(400)
        .json({ error: "Error to register product. Please check the fields." });
    }
  }
}

export { CreateProductController };

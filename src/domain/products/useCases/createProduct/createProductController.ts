import { Request, Response } from "express";

import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  handle(request: Request, response: Response) {
    const {
      name,
      description,
      type_name,
      category_name,
      price,
      discount,
      rentStockAvailbility,
      saleStockAvailbility,
    } = request.body;

    this.createProductUseCase.execute({
      name,
      description,
      type_name,
      category_name,
      price,
      discount,
      rentStockAvailbility,
      saleStockAvailbility,
    });

    return response.status(201).send();
  }
}

export { CreateProductController };

import { Request, Response } from "express";

import { FilterProductsUseCase } from "./filterProductsUseCase";

class FilterProductsController {
  constructor(private filterProductsUseCase: FilterProductsUseCase) {}

  handle(request: Request, response: Response): Response {
    const { type, category } = request.query;

    const filteredProducts = this.filterProductsUseCase.execute({
      type: type && String(type),
      category: category && String(category),
    });

    return response.json(filteredProducts);
  }
}

export { FilterProductsController };

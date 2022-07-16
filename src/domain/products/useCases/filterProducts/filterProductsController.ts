import { Request, Response } from "express";

import { FilterProductsUseCase } from "./filterProductsUseCase";

class FilterProductsController {
  constructor(private filterProductsUseCase: FilterProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { type, category } = request.query;

    const filteredProducts = await this.filterProductsUseCase.execute({
      type: type && String(type),
      category: category && String(category),
    });

    return response.json(filteredProducts);
  }
}

export { FilterProductsController };

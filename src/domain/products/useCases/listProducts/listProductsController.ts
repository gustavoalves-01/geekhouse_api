import { Request, Response } from "express";

import { ListProductsUseCase } from "./listProductsUseCase";

class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listProductsUseCase.execute();

    return response.json(all);
  }
}

export { ListProductsController };

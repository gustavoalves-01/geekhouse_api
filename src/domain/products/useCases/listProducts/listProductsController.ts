import { Request, Response } from "express";

import { ListProductsUseCase } from "./listProductsUseCase";

class ListProductsController {
  constructor(private listProductsUseCase: ListProductsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listProductsUseCase.execute();

    return response.json(all);
  }
}

export { ListProductsController };

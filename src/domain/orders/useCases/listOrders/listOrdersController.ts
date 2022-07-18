import { Request, Response } from "express";

import { ListOrdersUseCase } from "./listOrdersUseCase";

class ListOrdersController {
  constructor(private listOrdersUseCase: ListOrdersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listOrdersUseCase.execute();

    return response.json(all);
  }
}

export { ListOrdersController };

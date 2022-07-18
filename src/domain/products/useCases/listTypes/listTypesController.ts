import { Request, Response } from "express";

import { ListTypesUseCase } from "./listTypesUseCase";

class ListTypesController {
  constructor(private listTypesUseCase: ListTypesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listTypesUseCase.execute();

    return response.json(all);
  }
}

export { ListTypesController };

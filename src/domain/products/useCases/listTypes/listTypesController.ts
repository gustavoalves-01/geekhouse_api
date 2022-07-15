import { Request, Response } from "express";

import { ListTypesUseCase } from "./listTypesUseCase";

class ListTypesController {
  constructor(private listTypesUseCase: ListTypesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listTypesUseCase.execute();

    return response.json(all);
  }
}

export { ListTypesController };

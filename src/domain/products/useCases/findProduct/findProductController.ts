import { Request, Response } from "express";

import { FindProductUseCase } from "./findProductUseCase";

class FindProductController {
  constructor(private findProductUseCase: FindProductUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.params;

    const product = this.findProductUseCase.execute({ name });

    return response.json(product);
  }
}

export { FindProductController };

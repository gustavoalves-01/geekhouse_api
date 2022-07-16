import { Request, Response } from "express";

import { FindProductUseCase } from "./findProductUseCase";

class FindProductController {
  constructor(private findProductUseCase: FindProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const product = await this.findProductUseCase.execute({ name });

    return response.json(product);
  }
}

export { FindProductController };

import { Request, Response } from "express";

import { CreateTypeUseCase } from "./createTypeUseCase";

class CreateTypeController {
  constructor(private createTypeUseCase: CreateTypeUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    await this.createTypeUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateTypeController };

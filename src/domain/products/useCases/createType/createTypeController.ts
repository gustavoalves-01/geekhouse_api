import { Request, Response } from "express";

import { CreateTypeUseCase } from "./createTypeUseCase";

class CreateTypeController {
  constructor(private createTypeUseCase: CreateTypeUseCase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createTypeUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateTypeController };

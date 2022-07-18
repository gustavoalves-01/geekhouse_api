import { Request, Response } from "express";

import { CreateOrderUseCase } from "./createOrderUseCase";

class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { rents, sales } = request.body;

    if (!rents && !sales) {
      return response.status(400).json({ error: "The order is empty" });
    }

    await this.createOrderUseCase
      .execute({
        rents,
        sales,
      })
      .catch(() =>
        response.status(400).json({ error: "Error to create order" })
      );

    return response.status(201).send();
  }
}

export { CreateOrderController };

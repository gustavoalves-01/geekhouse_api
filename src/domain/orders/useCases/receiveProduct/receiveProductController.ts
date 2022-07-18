import { Request, Response } from "express";

import { ReceiveProductUseCase } from "./receiveProductUseCase";

class ReceiveProductController {
  constructor(private receiveProductUseCase: ReceiveProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { rentId, onlyRent } = request.body;

    if (!rentId || !onlyRent) {
      return response
        .status(400)
        .json({ error: "Please, provide the rent data" });
    }

    await this.receiveProductUseCase
      .execute({ rentId, onlyRent })
      .catch(() =>
        response.status(400).json({ error: "Error to receive product" })
      );

    return response.status(201).send();
  }
}

export { ReceiveProductController };

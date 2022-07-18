interface IRentProductDTO {
  productId: string;
  customer: string;
  days: number;
}

interface IRentsRepository {
  rentProduct({ productId, customer, days }: IRentProductDTO): Promise<string>;
  receiveProduct(rentId: string): Promise<void>;
}

export { IRentsRepository, IRentProductDTO };

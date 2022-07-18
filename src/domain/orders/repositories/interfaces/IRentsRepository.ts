interface IRentProductDTO {
  productId: string;
  customer: string;
  days: number;
  onlyRent: boolean;
}

interface IReceiveProductDTO {
  rentId: string;
  onlyRent: boolean;
}

interface IRentsRepository {
  rentProduct({ productId, customer, days }: IRentProductDTO): Promise<string>;
  receiveProduct({ rentId, onlyRent }: IReceiveProductDTO): Promise<void>;
  cancelRent({ rentId, onlyRent }: IReceiveProductDTO): Promise<void>;
}

export { IRentsRepository, IRentProductDTO, IReceiveProductDTO };

interface ISellProductDTO {
  customer: string;
  productId: string;
}

interface ISalesRepository {
  sellProduct({ customer, productId }: ISellProductDTO): Promise<string>;
}

export { ISalesRepository, ISellProductDTO };

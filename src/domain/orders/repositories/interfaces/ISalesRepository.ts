interface ISellProductDTO {
  customer: string;
  productId: string;
  onlySale: boolean;
}

interface ICancelSaleDTO {
  saleId: string;
  onlySale: boolean;
}

interface ISalesRepository {
  sellProduct({ customer, productId }: ISellProductDTO): Promise<string>;
  cancelSale({ saleId, onlySale }: ICancelSaleDTO): Promise<void>;
}

export { ISalesRepository, ISellProductDTO, ICancelSaleDTO };

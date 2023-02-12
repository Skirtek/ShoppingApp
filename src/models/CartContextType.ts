import { ProductDto } from "./api/ProductDto";

export type CartContextType = {
  products: ProductDto[];
  addProduct: (product: ProductDto) => void;
  removeProduct: (product: ProductDto) => void;
};

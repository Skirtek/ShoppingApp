import React, { createContext, useState } from "react";
import { ProductDto } from "../models/api/ProductDto";
import { CartContextType } from "../models/CartContextType";

const defaultSettings: CartContextType = {
  products: [],
  addProduct: (product: ProductDto) => {},
  removeProduct: (product: ProductDto) => {},
};

export const CartContext = createContext<CartContextType>(defaultSettings);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  const addProduct = (product: ProductDto) => {
    setProducts([...products, product]);
  };

  const removeProduct = (product: ProductDto) => {
    const otherProducts = products.filter((x) => x.hash !== product.hash);
    const productAfterRemove = products.filter((x) => x.hash === product.hash);
    productAfterRemove.pop();

    setProducts([...otherProducts, ...productAfterRemove]);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

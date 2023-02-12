import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { ProductDto } from "../../models/api/ProductDto";
import { formatPrice } from "../../utils/utils";
import { PrimaryButton } from "../global.styles";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
  ItemPhoto,
  LeftSide,
  RightSide,
} from "./StoreItem.styles";

type StoreItemProps = {
  product: ProductDto;
};

export const StoreItem = ({ product }: StoreItemProps) => {
  const { addProduct } = useContext(CartContext);

  const onAddToCart = () => {
    addProduct(product);
  };

  return (
    <ItemContainer>
      <ItemPhoto src={product.url} alt={"Product"} />
      <DataContainer>
        <LeftSide>
          <ImportantInfo>{product.name}</ImportantInfo>
          <span>{product.manufacturer}</span>
          <span>{product.category}</span>
        </LeftSide>
        <RightSide>
          <ImportantInfo>{formatPrice(product.price)}</ImportantInfo>
        </RightSide>
      </DataContainer>
      <PrimaryButton onClick={onAddToCart}>Add to cart</PrimaryButton>
    </ItemContainer>
  );
};

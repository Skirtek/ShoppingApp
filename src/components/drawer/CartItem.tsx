import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { ProductDto } from "../../models/api/ProductDto";
import { formatPrice } from "../../utils/utils";
import {
  Amount,
  CartItemContainer,
  DetailsContainer,
  LeftSide,
  Name,
  RemoveItem,
  RightSide,
  Thumbnail,
  TotalPrice,
} from "./CartItem.styles";

type CartItemProps = {
  product: ProductDto;
  amount: number;
  totalPrice: number;
};

export const CartItem = (props: CartItemProps) => {
  const { removeProduct } = useContext(CartContext);

  const removeItem = () => {
    removeProduct(props.product);
  };

  return (
    <CartItemContainer>
      <LeftSide>
        <Thumbnail alt={"Product"} src={props.product.url} />
        <DetailsContainer>
          <div>
            <Name>{props.product.name}</Name>
            <Amount>&nbsp;x{props.amount}</Amount>
          </div>
          <span>{formatPrice(props.product.price)}</span>
        </DetailsContainer>
      </LeftSide>
      <RightSide>
        <TotalPrice>{formatPrice(props.totalPrice)}</TotalPrice>
        <RemoveItem onClick={removeItem}>x</RemoveItem>
      </RightSide>
    </CartItemContainer>
  );
};

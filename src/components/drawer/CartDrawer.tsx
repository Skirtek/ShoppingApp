import React, { useCallback, useContext, useMemo } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { formatPrice, groupBy } from "../../utils/utils";
import { PrimaryButton } from "../global.styles";
import { CartDrawerContainer, TotalPrice } from "./CartDrawer.styles";
import { CartItem } from "./CartItem";

interface CartDrawerProps {
  isCartDrawerOpen: boolean;
  toggleCartDrawer: () => void;
}

export const CartDrawer = (props: CartDrawerProps) => {
  const { products } = useContext(CartContext);
  const navigate = useNavigate();

  const groupItems = useCallback(() => {
    const grouped = groupBy(products, (product) => product.hash);

    const result = [];

    for (const key in grouped) {
      result.push({
        items: grouped[key],
        amount: grouped[key].length,
        totalPrice: grouped[key].reduce(
          (partialSum, product) => partialSum + product.price,
          0
        ),
      });
    }

    return result;
  }, [products]);

  const groupedItems = useMemo(() => groupItems(), [groupItems]);

  const totalPrice = useMemo(
    () =>
      groupedItems.reduce(
        (partialSum, productGroup) => partialSum + productGroup.totalPrice,
        0
      ),
    [groupedItems]
  );

  return (
    <Drawer
      size={600}
      open={props.isCartDrawerOpen}
      onClose={props.toggleCartDrawer}
      direction="right"
    >
      <>
        {products.length > 0 ? (
          <div style={{ padding: "32px" }}>
            {groupedItems.map((item) => (
              <CartItem
                product={item.items[0]}
                amount={item.amount}
                totalPrice={item.totalPrice}
              />
            ))}
            <TotalPrice>Total: {formatPrice(totalPrice)}</TotalPrice>
          </div>
        ) : (
          <CartDrawerContainer>
            <h2>Brak produktów</h2>
            <p>Wypełnij swój koszyk przechodząc do sklepu</p>
            <PrimaryButton
              onClick={() => {
                navigate("/store");
                props.toggleCartDrawer();
              }}
            >
              Przejdź do sklepu
            </PrimaryButton>
          </CartDrawerContainer>
        )}
      </>
    </Drawer>
  );
};

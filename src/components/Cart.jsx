import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "@reach/router";
import {
  StyledButton,
  StyledItemCardPrice,
  StyledItemList,
  StyledRow,
  StyledColumn,
  StyledPageWrapper
} from "./styled";
import { ItemCard } from "./ItemCard";
import { CURRENCY_SYMBOL } from "../constants";
import { InfoMessage } from "./styled/Typography";

import { cartInfo } from "./utils/cartInfo";

const Cart = inject(stores => ({
  addToCart: stores.cartStore.addToCart,
  removeFromCart: stores.cartStore.removeFromCart,
  cartItemIds: stores.cartStore.cartItemIds,
  products: stores.productsStore.registry
}))(
  observer(({ products, addToCart, removeFromCart, cartItemIds }) => {
    const { items, total } = cartInfo(cartItemIds, products);
    const handleAddToCart = id => () => addToCart(id);
    const handleRemoveFromCart = id => () => removeFromCart(id);
    return (
      <StyledPageWrapper>
        {cartItemIds.length > 0 ? (
          <StyledItemList>
            {items.map(item => (
              <ItemCard {...item}>
                <StyledItemCardPrice>{`${item.count} × ${
                  item.price
                } ${CURRENCY_SYMBOL}`}</StyledItemCardPrice>
                <StyledRow>
                  <StyledButton
                    width={80}
                    onClick={handleRemoveFromCart(item.id)}
                  >
                    {"-".toUpperCase()}
                  </StyledButton>
                  <StyledButton width={80} onClick={handleAddToCart(item.id)}>
                    {"+".toUpperCase()}
                  </StyledButton>
                </StyledRow>
              </ItemCard>
            ))}
            <InfoMessage>
              Total: <span className="totalPrice">{total}</span>
              &#8239;{CURRENCY_SYMBOL}
            </InfoMessage>
          </StyledItemList>
        ) : (
          <StyledColumn align="center">
            <InfoMessage>Cart is empty</InfoMessage>
            <Link to="/">
              <StyledButton width={280}>
                {"Go to products list".toUpperCase()}
              </StyledButton>
            </Link>
          </StyledColumn>
        )}
      </StyledPageWrapper>
    );
  })
);

export default Cart;

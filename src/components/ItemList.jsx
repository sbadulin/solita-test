import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { values } from "mobx";

import { Link } from "@reach/router";
import { ItemCard } from "./ItemCard";
import {
  StyledButton,
  StyledItemCardPrice,
  StyledItemList,
  StyledPageWrapper
} from "./styled";
import { CURRENCY_SYMBOL } from "../constants";

@inject("productsStore", "cartStore")
@observer
class ItemList extends Component {
  componentDidMount() {
    const { productsStore } = this.props;
    productsStore.getProducts();
  }

  handleAddToCart = id => () => {
    const {
      cartStore: { addToCart }
    } = this.props;
    addToCart(id);
  };

  render() {
    const {
      productsStore,
      cartStore: { cartItemIds }
    } = this.props;
    const products = values(productsStore.registry);
    return (
      <StyledPageWrapper>
        <StyledItemList>
          {products.map(product => (
            <ItemCard {...product} key={product.key}>
              <StyledItemCardPrice>{`${
                product.price
              } ${CURRENCY_SYMBOL}`}</StyledItemCardPrice>
              {cartItemIds.includes(product.id) ? (
                <Link to="cart">
                  <StyledButton>{"Go to cart".toUpperCase()}</StyledButton>
                </Link>
              ) : (
                <StyledButton onClick={this.handleAddToCart(product.id)}>
                  {"Add to cart".toUpperCase()}
                </StyledButton>
              )}
            </ItemCard>
          ))}
        </StyledItemList>
      </StyledPageWrapper>
    );
  }
}

export default ItemList;

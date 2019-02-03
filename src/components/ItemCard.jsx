import React from "react";
import { inject } from "mobx-react";

import {
  StyledColumn,
  StyledItemCard,
  StyledProductImage,
  StyledProductInfo
} from "./styled";
import * as Typography from "./styled/Typography";
import { Default } from "../assets/productImages";
import { productImageById } from "./utils/productImageById";

const ItemCard = inject(stores => ({
  addToCart: stores.cartStore.addToCart,
  removeFromCart: stores.cartStore.removeFromCart,
  cartItemIds: stores.cartStore.cartItemIds
}))(({ name, splittedDescription, id, children }) => (
  <StyledItemCard>
    <StyledProductInfo>
      <StyledColumn>
        <StyledProductImage>
          {productImageById(id) || Default}
        </StyledProductImage>
      </StyledColumn>
      <StyledColumn grow>
        <Typography.ProductName>{name}</Typography.ProductName>
        <Typography.ProductDescription>
          {splittedDescription}
        </Typography.ProductDescription>
      </StyledColumn>
      <StyledColumn align="flex-end">{children}</StyledColumn>
    </StyledProductInfo>
  </StyledItemCard>
));

export { ItemCard };

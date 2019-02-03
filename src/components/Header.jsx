import React from "react";
import { inject } from "mobx-react";

import { Link } from "@reach/router";

import { HeaderBody } from "./styled/Typography";
import {
  StyledHeader,
  StyledRow,
  StyledLink,
  StyledNavWrapper,
  StyledLogo
} from "./styled";
import { COLORS } from "../constants";

import ShoppingCartIcon from "../assets/shopping-cart.svg";

const Header = inject(stores => ({ cartSize: stores.cartStore.cartSize }))(
  ({ cartSize }) => (
    <StyledHeader>
      <nav>
        <StyledNavWrapper>
          <StyledRow>
            <Link to="/">
              <StyledLogo />
            </Link>
            <HeaderBody>
              The most definitive shape store in the world
            </HeaderBody>
          </StyledRow>
          <StyledRow>
            <StyledLink
              to="cart"
              getProps={({ isCurrent }) => ({
                style: { fill: isCurrent ? COLORS.ACCENT : COLORS.MAIN }
              })}
            >
              <StyledRow>
                <HeaderBody style={{ marginRight: "6px" }}>
                  {cartSize ? <strong>{cartSize}</strong> : "No"} items in cart
                </HeaderBody>
                <ShoppingCartIcon width={52} height={52} />
              </StyledRow>
            </StyledLink>
          </StyledRow>
        </StyledNavWrapper>
      </nav>
    </StyledHeader>
  )
);

export default Header;

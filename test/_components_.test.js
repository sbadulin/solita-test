import React from "react";
import { render } from "react-testing-library";
import "jest-styled-components";
import { Provider } from "mobx-react";

import { productsStore, cartStore } from "../src/stores";
import App from "../src/components/App";
import Header from "../src/components/Header";
import Cart from "../src/components/Cart";
import { StyledButton } from "../src/components/styled/StyledButton";

test("App renders", () => {
  const stores = { productsStore, cartStore };
  const { container } = render(
    <Provider {...stores}>
      <App />
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("Header renders", () => {
  const stores = { productsStore, cartStore };
  const { container } = render(
    <Provider {...stores}>
      <Header />
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("Cart renders", () => {
  const stores = { productsStore, cartStore };
  const { container } = render(<Provider {...stores}><Cart /></Provider>);
  expect(container.firstChild).toMatchSnapshot();
});

test("Button renders", () => {
  const { container } = render(<StyledButton />);
  expect(container.firstChild).toMatchSnapshot();
});

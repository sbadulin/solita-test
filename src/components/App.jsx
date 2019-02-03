import React from "react";
import { Router } from "@reach/router";
import { Normalize } from "styled-normalize";
import { Provider } from "mobx-react";

import { productsStore, cartStore } from "../stores";
import ItemList from "./ItemList";
import Cart from "./Cart";
import Header from "./Header";

const stores = { productsStore, cartStore };

const App = () => (
  <Provider {...stores}>
    <>
      <Normalize />
      <Header />
      <Router>
        <ItemList path="/" />
        <Cart path="cart" />
      </Router>
    </>
  </Provider>
);

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CartProvider } from "./context/cart.context";
import { CategorieProvider } from "./context/categories.context";
import { UserProvider } from "./context/user.context";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategorieProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </CategorieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

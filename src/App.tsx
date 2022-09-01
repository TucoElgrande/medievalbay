import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path="products" element={<Products />}>
          {/* TODO PRODUCT DETAILS  */}
          <Route path=":productId" element={<Products />}></Route>
        </Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={
          <main>
            <h1>404</h1>
            <p>Merlin hitta inte er sida</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;

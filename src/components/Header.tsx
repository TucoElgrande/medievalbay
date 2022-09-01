import React, { CSSProperties } from "react";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  return (
    <header style={rootStyle}>
      <span>hello world</span>
      <span>{cart.length}</span>
    </header>
  );
}
const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  background: "hotpink",
  padding: "0.4rem 1rem",
};

export default Header;

import React, { CSSProperties } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  return (
    <div>
      <header style={rootStyle}>
        <div>
          <NavLink style={linkStyle} to="">
            🤦‍♀️
          </NavLink>
          <NavLink style={linkStyle} to="products">
            Products
          </NavLink>
          <NavLink style={linkStyle} to="checkout">
            Checkout
          </NavLink>
        </div>

        <div>
          <span>{cart.length}</span>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  background: "hotpink",
  padding: "0.4rem 1rem",
};

interface LinkProps {
  isActive: boolean;
}

const linkStyle = ({ isActive }: LinkProps): CSSProperties => ({
  padding: "0.4rem",
  textDecoration: "none",
  borderRadius: "1rem",
  color: "black",
  background: isActive ? "#CCCCFF" : undefined,
});

export default Header;

import { Badge, FormControlLabel, FormGroup, IconButton, Switch } from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Shop } from "@mui/icons-material";
import { useProduct } from "../context/ProductContext";

function Header() {
    const { cart } = useCart();

    let cartItems: number = 0;
    cart.forEach((e) => {
        cartItems += e.quantity;
    });

    return (
        <div>
            <header style={rootStyle}>
                <div className="center-non-flex main-content">
                    <NavLink style={linkStyle} to="">
                        🤦‍♀️
                    </NavLink>
                    <NavLink style={linkStyle} to="products">
                        Products
                    </NavLink>

                    <NavLink style={linkStyle} to="checkout">
                        <Badge color="secondary" badgeContent={cartItems}>
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    background: "rgba(90,165,247,255)",
    inset: "0",
    padding: "0.4rem 0",
    position: "fixed",
    width:"100%",
    height:"3rem",
    zIndex:"1000",
    borderBottom:"2px solid black"
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

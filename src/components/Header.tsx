import { Badge, FormControlLabel, FormGroup, IconButton, Switch } from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Shop } from "@mui/icons-material";
import { useProduct } from "../context/ProductContext";

function Header() {
    const { cart } = useCart();
    const { isAdmin, toggleAdmin } = useProduct();

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
                        <Badge color="secondary" badgeContent={cart.length}>
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>
                </div>
                <Switch checked={isAdmin} onChange={toggleAdmin} />
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

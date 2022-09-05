import React, { CSSProperties } from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../data/data";
import { NavLink, Outlet } from "react-router-dom";

type Props = {
    product: Product;
    cardClickable?: boolean;
    buttons?: boolean;
};

const ProductCardBrowse: React.FC<Props> = ({ product, cardClickable, buttons }) => {
    const { addToCart, removeOneFromCart } = useCart();

    console.log(cardClickable);
    return (
        <div key={product.id}>
            <h3>{product.title}</h3>
            {buttons && <button onClick={() => addToCart(product)}> Add to cart</button>}
            {buttons && <button onClick={() => removeOneFromCart(product)}> Remove to cart</button>}
            <br></br>
            {cardClickable ? (
                <NavLink style={linkStyle} to={product.id.toString()}>
                    <img src={product.imageUrl} />
                </NavLink>
            ) : (
                <img src={product.imageUrl} />
            )}
        </div>
    );
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

export default ProductCardBrowse;

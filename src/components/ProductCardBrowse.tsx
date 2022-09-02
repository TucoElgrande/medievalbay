import React from "react";
import { useCart } from "../context/CartContext";
import { Product } from "../data/data";

function ProductCardBrowse(product: Product) {
    const { addToCart, removeOneFromCart } = useCart();

    return (
        <div key={product.id}>
            <h3>{product.title}</h3>
            <button onClick={() => addToCart(product)}> Add to cart</button>
            <button onClick={() => removeOneFromCart(product)}> Remove to cart</button>
            <br></br>
            <img src={product.imageUrl} />
        </div>
    );
}

export default ProductCardBrowse;

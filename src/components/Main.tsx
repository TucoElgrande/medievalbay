import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import mockData from "../data/data";

function Main() {
    const [product] = useState(mockData);
    const { addToCart, removeFromCart } = useCart();

    return (
        <main>
            {product.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <button onClick={() => addToCart(product)}> Add to cart</button>
                    <button onClick={() => removeFromCart(product)}> Remove to cart</button>
                    <br></br>
                    <img src={product.imageUrl} />
                </div>
            ))}
        </main>
    );
}

export default Main;

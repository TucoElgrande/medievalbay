import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import mockData from "../data/data";

function Main() {
  const [product] = useState(mockData);
  const { addToCart } = useCart();

  return (
    <main>
      {product.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button onClick={() => addToCart(product)}> Add to cart</button>
        </div>
      ))}
    </main>
  );
}

export default Main;

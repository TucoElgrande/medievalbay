import React, { useState } from "react";
import mockData from "../data/data";
import ProductCardBrowse from "./ProductCartBrowse";

function Main() {
    const [product] = useState(mockData);

    return (
        <main>
            {product.map((product) => (
                <ProductCardBrowse {...product} />
            ))}
        </main>
    );
}

export default Main;

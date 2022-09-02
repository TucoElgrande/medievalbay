import React from "react";
import { Product } from "../data/data";

function ProductCardHomepage(product: Product) {
    return (
        <div className="" key={product.id}>
            <h3>{product.title}</h3>
            <br></br>
            <img src={product.imageUrl} />
        </div>
    );
}

export default ProductCardHomepage;

import React from "react";
import { Product } from "../context/ProductContext";

function ProductCardHomepage(product: Product) {
    return (
        <div className="" key={product.id}>
            <h3 className="text-align-center">{product.title}</h3>
            <img src={product.imageUrl} className="product-browse-img" />
        </div>
    );
}

export default ProductCardHomepage;

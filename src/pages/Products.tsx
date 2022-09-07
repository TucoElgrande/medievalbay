import React, { useState } from "react";
import ProductCardBrowse from "../components/ProductCardBrowse";
import { useProduct } from "../context/ProductContext";

function Products() {
    const { products } = useProduct();
    return (
        <main>
            {products.map((product) => (
                <ProductCardBrowse
                    key={product.id}
                    product={product}
                    buttons={true}
                    cardClickable={true}
                />
            ))}
        </main>
    );
}

export default Products;

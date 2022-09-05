import React, { useState } from "react";
import mockProducts, { getProducts, Product } from "../data/data";
import ProductCardBrowse from "./ProductCardBrowse";

function Main() {
    const products: Product[] = getProducts();

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

export default Main;

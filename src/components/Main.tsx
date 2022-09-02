import React, { useState } from "react";
import mockProducts, { getProducts } from "../data/data";
import ProductCardBrowse from "./ProductCardBrowse";

function Main() {
    const products = getProducts();

    return (
        <main>
            {products.map((product) => (
                <ProductCardBrowse {...product} />
            ))}
        </main>
    );
}

export default Main;

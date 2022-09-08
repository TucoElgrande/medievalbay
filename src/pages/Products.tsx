import { Button } from "@mui/material";
import React, { useState } from "react";
import ProductCardBrowse from "../components/ProductCardBrowse";
import ProductForm from "../components/ProductForm";
import { useProduct } from "../context/ProductContext";

function Products() {
    const { products, isAdmin } = useProduct();
    return (
        <main>
            {isAdmin && (
                <ProductForm id={0} title={""} price={0} imageUrl={""} />
            )}
            {
                products.map((product) => (
                    <ProductCardBrowse
                        key={product.id}
                        product={product}
                        buttons={true}
                        cardClickable={true}
                    />
                ))
            }
        </main >
    );
}

export default Products;

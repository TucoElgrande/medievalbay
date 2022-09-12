import { Button } from "@mui/material";
import React, { useState } from "react";
import ProductCardBrowse from "../components/ProductCardBrowse";
import ProductForm from "../components/ProductForm";
import { useProduct } from "../context/ProductContext";
import "./Products.css";

function Products() {
    const { products, isAdmin } = useProduct();
    return (
        <div className="main-content center-non-flex">
            {isAdmin && <ProductForm id={0} title={""} price={0} imageUrl={""} />}
            <div className="flex-container flex-wrap center-items">
                {products.map((product) => (
                    <div className="product-margin">
                        <ProductCardBrowse key={product.id} product={product} inspect={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

import { Description } from "@mui/icons-material";
import { Button } from "@mui/material";
import { title } from "process";
import React, { useState } from "react";
import ProductCardBrowse from "../components/ProductCardBrowse";
import ProductForm from "../components/ProductForm";
import { Product, useProduct } from "../context/ProductContext";
import "./Products.css";

function Products() {
    const { products, isAdmin } = useProduct();
    const noProduct: Product = { id: 0, title: "", price: 0, imageUrl: "" };

    return (
        <div className="products-main center-non-flex">
            {isAdmin && (
                <div className="add-product-form flex-container flex-wrap center-items">
                    <ProductForm buttonName="Add" product={noProduct} />
                </div>
            )}
            <div className="flex-container flex-wrap center-items">
                {products.map((product) => (
                    <div className="product-margin">
                        <ProductCardBrowse
                            key={product.id}
                            product={product}
                            inspect={true}
                            cardClickable={true}
                            buttons={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

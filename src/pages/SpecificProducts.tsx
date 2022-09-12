import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../data/data";
import ProductCardBrowse from "../components/ProductCardBrowse";
import "./Products.css";
import { useProduct } from "../context/ProductContext";

function SpecificProducts() {
    const params = useParams<{ productId: string }>();
    const product = getProduct(Number(params.productId));

    if (!product) {
        return <p>product does not exist</p>;
        //TODO ^ + go home button, possible be made into component?
    } else {
        return (
            <div className="products-main center-non-flex">
                <ProductCardBrowse product={product} inspect={false} />
            </div>
        );
    }
}

export default SpecificProducts;

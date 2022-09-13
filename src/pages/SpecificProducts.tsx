import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getAmountOfProducts, getProduct } from "../data/data";
import ProductCardBrowse from "../components/ProductCardBrowse";
import "./Products.css";
import { useProduct } from "../context/ProductContext";
import { Button } from "@mui/material";
import { useCart } from "../context/CartContext";
import { currencyFormat } from "../utilities/currencyFormat";

function SpecificProducts() {
    const relatedProducts = getAmountOfProducts(4);
    const { addToCart, removeOneFromCart } = useCart();
    const params = useParams<{ productId: string }>();
    const product = getProduct(Number(params.productId));

    if (!product) {
        return <p>product does not exist</p>;
        //TODO ^ + go home button, possible be made into component?
    } else {
        return (
            <div className="specific-products-main center-non-flex">
                <div>
                    <div className="flex-container flex-wrap products-main center-items center-non-flex">
                        <h2>{product.title}</h2>
                    </div>

                    <div className="flex-container flex-wrap products-main center-items center-non-flex">
                        <img src={product.imageUrl} className="specific-product-browse-img" />
                    </div>

                    <div className="flex-container flex-wrap products-main center-items center-non-flex">
                        <p> {product.description} </p>
                    </div>

                    <div className="flex-container flex-wrap products-main center-items center-non-flex">
                        <p> {currencyFormat(product.price)}</p>
                    </div>

                    <div className="flex-container flex-wrap products-main center-items center-non-flex">
                        <Button size="large" onClick={() => addToCart(product)}>
                            Add to cart
                        </Button>
                    </div>
                </div>

                <div className="flex-container flex-wrap products-main center-items center-non-flex">
                    <h3>Related Products</h3>
                </div>
                <div className="flex-container flex-wrap products-main center-items center-non-flex">
                    {relatedProducts.map((product) => (
                        <div className="product-margin">
                            <ProductCardBrowse
                                key={product.id}
                                product={product}
                                cardClickable={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SpecificProducts;

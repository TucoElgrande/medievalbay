import React from "react";
import { useParams } from "react-router-dom";
import { getAmountOfProducts, getProduct } from "../data/data";
import ProductCardBrowse from "../components/ProductCardBrowse";
import "./Products.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useCart } from "../context/CartContext";
import { currencyFormat } from "../utilities/currencyFormat";
import ProductNotFound from "../components/ProductNotFound";

function SpecificProducts() {
    const relatedProducts = getAmountOfProducts(4);
    const { addToCart, removeOneFromCart } = useCart();
    const params = useParams<{ productId: string }>();
    const product = getProduct(Number(params.productId));

    window.scrollTo(0, 0);

    if (!product) {
        return <ProductNotFound errorMessage={"Merlin could not find this product"} />;
    } else {
        return (
            <div className="main-content center-non-flex flex-container center-items flex-direction-column">
                <div className="flex-container center-items">
                    <Card sx={{ maxWidth: "60%", margin: 2 }} key={product.id}>
                        <CardContent className="flex-container center-items flex-direction-column">
                            <h2>{product.title}</h2>
                            <img src={product.imageUrl} className="specific-product-browse-img" />
                            <p> {product.description} </p>
                            <p> {currencyFormat(product.price)}</p>
                            <Button
                                variant="contained"
                                size="medium"
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex-item-two text text-align-center">
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="div">
                                Related products
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex-container flex-wrap center-items products-main center-non-flex">
                    {relatedProducts.map((product) => (
                        <div className="product-margin" key={product.id}>
                            <ProductCardBrowse product={product} cardClickable={true} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default SpecificProducts;

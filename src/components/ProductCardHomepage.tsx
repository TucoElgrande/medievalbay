import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Product } from "../context/ProductContext";

function ProductCardHomepage(product: Product) {
    return (
        <Card sx={{ maxWidth: "20rem", margin: 2 }} key={product.id}>
            <CardContent className="flex-container center-items flex-direction-column">
                <img src={product.imageUrl} className="product-browse-img" />
                <Typography gutterBottom variant="h5" component="div" className="text-align-center">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="text-align-center">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProductCardHomepage;

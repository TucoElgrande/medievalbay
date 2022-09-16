import { Card, Switch } from "@mui/material";
import React from "react";
import ProductCardBrowse from "../components/ProductCardBrowse";
import ProductForm from "../components/ProductForm";
import { Product, useProduct } from "../context/ProductContext";
import "./Products.css";

function Products() {
    const { products, isAdmin, toggleAdmin } = useProduct();
    const noProduct: Product = { id: 0, title: "", price: 0, imageUrl: "", description: "" };

    return (
        <div className="products-main center-non-flex">
            <Card className="white-bg flex-container center-items flex-direction-column">
                <p>__________________________________</p>
                <h2>Admin mode</h2>
                <Switch checked={isAdmin} onChange={toggleAdmin} className="admin-switch" />
                <p>__________________________________</p>
            </Card>
            {isAdmin && (
                <div className="add-product-form flex-container flex-wrap center-items product-margin">
                    <ProductForm buttonName="Add" product={noProduct} />
                </div>
            )}
            <div className="flex-container flex-wrap center-items">
                {products.map((product) => (
                    <div className="product-margin" key={product.id}>
                        <ProductCardBrowse
                            product={product}
                            inspect={true}
                            cardClickable={true}
                            buttons={true}
                            isEditable={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;

import React, { CSSProperties } from "react";
import { useCart } from "../context/CartContext";
import { NavLink, Outlet } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import { Product, useProduct } from "../context/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductForm from "./ProductForm";
import { ProductionQuantityLimits } from "@mui/icons-material";
import "../pages/Products.css";
import { currencyFormat } from "../utilities/currencyFormat";

type Props = {
    product: Product;
    cardClickable?: boolean;
    buttons?: boolean;
    inspect?: boolean;
    isEditable?: boolean;
};

const ProductCardBrowse: React.FC<Props> = ({
    product,
    inspect,
    cardClickable,
    buttons,
    isEditable,
}) => {
    const { addToCart, removeOneFromCart } = useCart();
    const { isAdmin, removeProduct } = useProduct();

    return (
        <Card sx={{ maxWidth: 270, boxShadow: 6 }}>
            {cardClickable && (
                <NavLink to={"/products/" + product.id.toString()}>
                    <img src={product.imageUrl} className="product-browse-img" />
                </NavLink>
            )}
            {!cardClickable && <img src={product.imageUrl} className="product-browse-img" />}

            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        textAlign: "center",
                    }}
                >
                    {product.title}
                </Typography>
                <Typography variant="body1">{currencyFormat(product.price)}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            {!isAdmin && buttons && (
                <CardActions>
                    <Button variant="contained" size="medium" onClick={() => addToCart(product)}>
                        Add to cart
                    </Button>
                    {inspect && (
                        <NavLink style={linkStyle} to={"/products/" + product.id.toString()}>
                            <Button variant="contained" size="medium">
                                Inspect item
                            </Button>
                        </NavLink>
                    )}
                </CardActions>
            )}
            {isAdmin && isEditable && (
                <div className="flex-container flex-wrap center-items">
                    <ProductForm product={{ ...product }} buttonName="Edit" />
                    <Button
                        onClick={() => {
                            removeProduct(product);
                        }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        sx={{ textAlign: "center", marginBottom: "0.5rem" }}
                    >
                        Delete
                    </Button>
                </div>
            )}
        </Card>
    );
};

interface LinkProps {
    isActive: boolean;
}

const linkStyle = ({ isActive }: LinkProps): CSSProperties => ({
    padding: "0.4rem",
    textDecoration: "none",
    borderRadius: "1rem",
    color: "black",
    background: isActive ? "#CCCCFF" : undefined,
});

export default ProductCardBrowse;

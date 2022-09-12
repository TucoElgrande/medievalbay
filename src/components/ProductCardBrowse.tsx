import React, { CSSProperties } from "react";
import { useCart } from "../context/CartContext";
import { NavLink, Outlet } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import { Product, useProduct } from "../context/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductForm from "./ProductForm";
import Typography from "@mui/material/Typography";
import "../pages/Products.css";

type Props = {
    product: Product;
    cardClickable?: boolean;
    buttons?: boolean;
};

const ProductCardBrowse: React.FC<Props> = ({ product, cardClickable, buttons }) => {
    const { addToCart } = useCart();
    const { isAdmin, removeProduct } = useProduct();

    return (
        <Card sx={{ maxWidth: 270 }}>
            <img src={product.imageUrl} className="product-browse-img" />
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
            </CardContent>
            {!isAdmin && (
                <CardActions>
                    <Button size="large" onClick={() => addToCart(product)}>
                        Add to cart
                    </Button>
                    <NavLink style={linkStyle} to={product.id.toString()}>
                        <Button size="small">Inspect item</Button>
                    </NavLink>
                </CardActions>
            )}
            {isAdmin && (
                <div>
                    <ProductForm {...product} />
                    <Button
                        onClick={() => {
                            removeProduct(product);
                        }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        sx={{ textAlign: "center" }}
                    >
                        Delete
                    </Button>
                </div>
            )}
        </Card>
    );

    /* console.log(cardClickable);
    return (
        <div key={product.id}>
            <h3>{product.title}</h3>
            {buttons && <button onClick={() => addToCart(product)}> Add to cart</button>}
            {buttons && <button onClick={() => removeOneFromCart(product)}> Remove to cart</button>}
            <br></br>
            {cardClickable ? (
                <NavLink style={linkStyle} to={product.id.toString()}>
                    <img src={product.imageUrl} />
                </NavLink>
            ) : (
                <img src={product.imageUrl} />
            )}
            {isAdmin && (
                <div>
                    <ProductForm {...product} />
                    <Button
                        onClick={() => {
                            removeProduct(product);
                        }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                </div>
            )}
        </div>
    ); */
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

import React, { CSSProperties } from "react";
import { useCart } from "../context/CartContext";
import { NavLink, Outlet } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Product, useProduct } from "../context/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductForm from "./ProductForm";
import { ProductionQuantityLimits } from "@mui/icons-material";

type Props = {
  product: Product;
  cardClickable?: boolean;
  buttons?: boolean;
};

const ProductCardBrowse: React.FC<Props> = ({
  product,
  cardClickable,
  buttons,
}) => {
  const { addToCart, removeOneFromCart } = useCart();
  const { isAdmin, removeProduct } = useProduct();

  return (
    <div key={product.id}>
      <h3>{product.title}</h3>
      {buttons && (
        <button onClick={() => addToCart(product)}> Add to cart</button>
      )}
      {buttons && (
        <button onClick={() => removeOneFromCart(product)}>
          {" "}
          Remove to cart
        </button>
      )}
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>

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

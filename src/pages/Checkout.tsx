import React from "react";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { currencyFormat } from "../utilities/currencyFormat";
import CustomerForm from "../components/CustomerForm";
import { isTemplateExpression } from "typescript";

function Checkout() {
    const { cart, removeOneFromCart, removeAllCart, addToCart } = useCart();

    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });

    return (
        <div>
            <h2>Checkout</h2>
            <div>
                {cart.map((cartItem) => (
                    <div>
                        <div>
                            <div>
                                <p>
                                    {cartItem.product.title} x {cartItem.quantity}
                                </p>
                                <p>
                                    Product total:{" "}
                                    {currencyFormat(cartItem.product.price * cartItem.quantity)}
                                </p>
                                <p>{currencyFormat(cartItem.product.price)}</p>
                                <img src={cartItem.product.imageUrl}></img>
                            </div>
                            <Button
                                size="small"
                                variant="contained"
                                color="error"
                                onClick={() => {
                                    removeOneFromCart(cartItem.product);
                                }}
                            >
                                -
                            </Button>
                            <Button
                                size="small"
                                variant="contained"
                                color="success"
                                onClick={() => {
                                    addToCart(cartItem.product);
                                }}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                ))}
                {totalPrice != 0}
                {totalPrice != 0 && <p> Total: {currencyFormat(totalPrice)}</p>}
            </div>
                                
            <Button variant="outlined" color="error" onClick={() => removeAllCart()}>
                Clear cart
            </Button>
            <CustomerForm></CustomerForm>
        </div>
    );
}

export default Checkout;

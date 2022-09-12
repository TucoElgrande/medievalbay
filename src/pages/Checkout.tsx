import React from "react";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";
import { currencyFormat } from "../utilities/currencyFormat";
import CustomerForm from "../components/CustomerForm";

function Checkout() {
    const { cart, removeOneFromCart, removeAllCart } = useCart();
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
    });

    return (
        <div className="products-main center-non-flex">
            <h2>Checkout</h2>
            <div>
                {cart.map((cartItem) => (
                    <div>
                        <div>
                            <p>{cartItem.product.title}</p>
                            <p> X {cartItem.quantity}</p>
                            <p>{currencyFormat(cartItem.product.price)}</p>
                            <img
                                src={cartItem.product.imageUrl}
                                className="product-browse-img"
                            ></img>
                        </div>
                        <Button
                            size="small"
                            variant="outlined"
                            onClick={() => {
                                removeOneFromCart(cartItem.product);
                            }}
                        >
                            Remove
                        </Button>
                    </div>
                ))}
                {totalPrice != 0}
                {totalPrice != 0 && <p> Total: {currencyFormat(totalPrice)}</p>}
            </div>
            <Button
                variant="contained"
                color="success"
                onClick={() => {
                    alert("Thanks for your purchase");
                    removeAllCart();
                }}
            >
                Confirm purchase
            </Button>
            <Button variant="outlined" color="error" onClick={() => removeAllCart()}>
                Clear cart
            </Button>
            <CustomerForm></CustomerForm>
        </div>
    );
}

export default Checkout;

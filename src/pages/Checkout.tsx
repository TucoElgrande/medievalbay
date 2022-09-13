import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";
import { currencyFormat } from "../utilities/currencyFormat";
import CustomerForm, { Customer, CustomerCreate } from "../components/CustomerForm";
import { string } from "yup";
import "./Products.css";

export function Checkout() {
    const { cart, removeOneFromCart, removeAllCart, addToCart } = useCart();
    const [customer, setCustomer] = useState<CustomerCreate>();

    const handleCallback = (childData: CustomerCreate) => {
        setCustomer(childData);
    };

    let totalPrice = 0;
    let totalProducts = 0;
    cart.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
        totalProducts += 1;
    });

    if (totalProducts <= 0 && !customer) {
        return (
            <div className="products-main center-non-flex">
                <h2>INGA PRODUKTER HITTADES</h2>
            </div>
        );
    } else if (!customer) {
        return (
            <div className="products-main center-non-flex">
                <div className="flex-container flex-wrap center-items">
                    {cart.map((cartItem) => (
                        <div>
                            <div>
                                <div>
                                    <p>
                                        {cartItem.product.title} x {cartItem.quantity}
                                    </p>
                                    <p>{currencyFormat(cartItem.product.price)}</p>
                                    <img
                                        src={cartItem.product.imageUrl}
                                        className="product-browse-img"
                                    ></img>
                                </div>
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
                                <p>
                                    Product total:{" "}
                                    {currencyFormat(cartItem.product.price * cartItem.quantity)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-container flex-wrap center-items">
                    <div>
                    {totalPrice != 0}
                    {totalPrice != 0 && <p><strong> Total: {currencyFormat(totalPrice)}</strong></p>}
                    </div>
                    <div>
                    <Button variant="outlined" color="error" onClick={() => removeAllCart()}>
                        Clear cart
                    </Button>
                    </div>
                </div>
                <div className="flex-container flex-wrap center-items">
                    <CustomerForm callBack={handleCallback} />
                    </div>
            </div>
        );
    } else
        return (
            <div className="order-confirmation-sucess products-main center-non-flex">
                <h2>Tack för ditt köp {customer.fname} </h2>
                <p> en bekräftelse har skickats till {customer.email} </p>
            </div>
        );
}

export default Checkout;

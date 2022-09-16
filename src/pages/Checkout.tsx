import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";
import { currencyFormat } from "../utilities/currencyFormat";
import CustomerForm, { CustomerCreate } from "../components/CustomerForm";
import { NavLink } from "react-router-dom";
import ProductNotFound from "../components/ProductNotFound";
import { Card, CardContent } from "@mui/material";

export function Checkout() {
    window.scrollTo(0, 0);

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
        return <ProductNotFound errorMessage={"No products where found"} />;
    } else if (!customer) {
        return (
            <div className="main-content center-non-flex">
                <div className="flex-container flex-wrap center-items">
                    {cart.map((cartItem) => (
                        <div key={cartItem.product.id}>
                            <div className="checkout-cart-item">
                                <div>
                                    <p>
                                        {cartItem.product.title} x {cartItem.quantity}
                                    </p>
                                    <p>{currencyFormat(cartItem.product.price)}</p>
                                    <img
                                        src={cartItem.product.imageUrl}
                                        className="checkout-browse-img"
                                    ></img>
                                </div>
                                <div className="add-remove-buttons">
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            removeOneFromCart(cartItem.product);
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            addToCart(cartItem.product);
                                        }}
                                    >
                                        +
                                    </Button>
                                </div>
                                <p>
                                    Product total:
                                    {currencyFormat(cartItem.product.price * cartItem.quantity)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-container flex-wrap center-items">
                    <Button variant="contained" color="error" onClick={() => removeAllCart()}>
                        Clear cart
                    </Button>
                </div>
                <div className="flex-container center-items">
                    <Card sx={{ margin: "2rem" }}>
                        <CardContent className="flex-container center-items flex-direction-column">
                            <div className="flex-container flex-wrap center-items">
                                <div>
                                    {totalPrice != 0}
                                    {totalPrice != 0 && (
                                        <h3>
                                            <strong> Total: {currencyFormat(totalPrice)}</strong>
                                        </h3>
                                    )}
                                </div>
                            </div>
                            <div className="flex-container flex-wrap center-items">
                                <CustomerForm callBack={handleCallback} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    } else
        return (
            <Card>
                <div className="center-non-flex" style={{ marginTop: "5rem" }}>
                    <div className="center text-align-center">
                        <h2>Thank you for your purchase esteemed customer </h2>
                        <h1>{customer.fname}</h1>
                        <h3 className="text-align-center">
                            A confirmation of your purchase is sent to {customer.email}
                        </h3>
                    </div>
                    <img className="center max-width" src="https://i.imgur.com/JQgYENA.gif"></img>
                    <p className="text-align-center">
                        <NavLink to={"/products"}>
                            <Button variant="contained">Back to products</Button>
                        </NavLink>
                    </p>
                </div>
            </Card>
        );
}

export default Checkout;

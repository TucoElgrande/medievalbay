import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Button from "@mui/material/Button";
import { currencyFormat } from "../utilities/currencyFormat";
import CustomerForm, { Customer, CustomerCreate } from "../components/CustomerForm";
import { string } from "yup";
import { Link as RouterLink, LinkProps as RouterLinkProps, NavLink } from "react-router-dom";
import "./Confirmation.css";
import { LinkProps } from "@mui/material/Link";

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
            <div className="products-main center-non-flex text-align-center">
                <h1 className="text-align-center">No products where found</h1>
                <NavLink to={"/products"}>
                    {""}
                    <Button variant="contained" href="#contained-buttons">
                        Back to products
                    </Button>
                </NavLink>
                <img className="center max-width" src="https://i.imgur.com/95yjYOs.gif"></img>
            </div>
        );
    } else if (!customer) {
        return (
            <div className="products-main center-non-flex">
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
                                    <img
                                        src={cartItem.product.imageUrl}
                                        className="product-browse-img"
                                    ></img>
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

                <Button variant="outlined" color="error" onClick={() => removeAllCart()}>
                    Clear cart
                </Button>
                <CustomerForm callBack={handleCallback} />
            </div>
        );
    } else
        return (
            <div className=" center">
                <span>
                    <div className="center text-align-center">
                        <h2>
                            Thank you for your purchase esteemed customer <h1>{customer.fname}</h1>{" "}
                        </h2>
                        <h3 className="text-align-center">
                            {" "}
                            A confirmation of your purchase is sent to {customer.email}{" "}
                        </h3>
                    </div>

                    <img className="center max-width" src="https://i.imgur.com/JQgYENA.gif"></img>

                    <p className="text-align-center">
                        <NavLink to={"/products"}>
                            {""}
                            <Button variant="contained" href="#contained-buttons">
                                Back to products
                            </Button>
                        </NavLink>
                    </p>
                </span>
            </div>
        );
}

export default Checkout;

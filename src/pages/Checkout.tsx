import React from "react";
import { useCart } from "../context/CartContext";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function Checkout() {
    const { cart, removeOneFromCart, removeAllCart } = useCart();
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price
    });
    

    return (
        <div>
            <h2>Checkout</h2>
            <div >
                {cart.map(item => (<div>
                    <div>
                        <div>
                            <p >{item.title}</p>
                            <p>{item.price} $</p>
                            <img src={item.imageUrl}></img>
                        </div>
                        <Button size="small" variant="outlined" onClick={() => { removeOneFromCart(item) }}>
                            Remove
                        </Button>
                    </div>
                </div>))}
                { totalPrice != 0 
                }
                {totalPrice != 0 && <p> Total: {totalPrice} $</p>}
            </div>
            <Button variant="contained" color="success" onClick={() => { alert('Thanks for your purchase'); removeAllCart() }}>
                Confirm purchase
            </Button>
            <Button variant="outlined" color="error" onClick={() => removeAllCart()}>
                Clear cart
            </Button>
        </div>
    );

}

export default Checkout;

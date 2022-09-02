import React, {useState} from "react";
import Main from "../components/Main";
import Button from '@mui/material/Button';


function Checkout() {
    const thankYou = () => {
        alert("Thanks for your purchase.");
    }
    return (
    <div>
        <h2>Checkout</h2>
        <Main></Main>
        <Button variant="contained" size="large" onClick={thankYou}>Buy now</Button>

    </div>
    );
}

export default Checkout;

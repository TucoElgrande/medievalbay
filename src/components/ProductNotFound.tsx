import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../context/ProductContext";

type Props = {
    errorMessage: String;
};

function ProductNotFound(props: Props) {
    return (
        <div className="products-main center-non-flex text-align-center">
            <Card>
                <CardContent>
                    <h1 className="text-align-center">{props.errorMessage}</h1>
                    <NavLink to={"/products"}>
                        {""}
                        <Button variant="contained" href="#contained-buttons">
                            Back to products
                        </Button>
                    </NavLink>
                </CardContent>
            </Card>
            <img className="center max-width" src="https://i.imgur.com/95yjYOs.gif"></img>
        </div>
    );
}

export default ProductNotFound;

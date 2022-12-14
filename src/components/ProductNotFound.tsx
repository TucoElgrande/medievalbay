import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
    errorMessage: String;
};

function ProductNotFound(props: Props) {
    return (
        <div className="main-content center-non-flex text-align-center">
            <Card>
                <CardContent>
                    <h1 className="text-align-center">{props.errorMessage}</h1>
                    <NavLink to={"/products"}>
                        <Button variant="contained">Back to products</Button>
                    </NavLink>
                </CardContent>
            </Card>
            <img className="center max-width" src="https://i.imgur.com/95yjYOs.gif"></img>
        </div>
    );
}

export default ProductNotFound;

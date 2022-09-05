import { Switch } from "@mui/material";
import React, { useState } from "react";
import Main from "../components/Main";

function Products() {
    const [isAdmin, setIsAdmin] = useState(false);

    const toggleAdmin = () => {
        setIsAdmin((isAdmin) => !isAdmin);
    };
    return (
        <>
            <Main />
            <Switch onChange={toggleAdmin} inputProps={{ "aria-label": "controlled" }} />
            {isAdmin && <h2>You're admin now boi :)</h2>}
        </>
    );
}

export default Products;

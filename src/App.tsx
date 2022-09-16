import Header from "./components/Header";
import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import SpecificProducts from "./pages/SpecificProducts";
import BackgroundStyle from "./components/BackgroundStyle";
import { Button, Card, CardContent } from "@mui/material";
function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Header />
                        <BackgroundStyle />
                    </>
                }
            >
                <Route index element={<Home />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="products/:productId" element={<SpecificProducts />} />
                <Route path="checkout" element={<Checkout />}></Route>
            </Route>

            {/* 404 */}
            <Route
                path="*"
                element={
                    <>
                        <Header />
                        <BackgroundStyle />
                        <div className="products-main center-non-flex text-align-center">
                            <Card>
                                <CardContent>
                                    <main className="products-main center-non-flex text-align-center">
                                        <h1>404</h1>
                                        <h1>Merlin could not find your page</h1>
                                        <NavLink to={"/"}>
                                            {" "}
                                            <Button variant="contained" href="#contained-buttons">
                                                Back to home
                                            </Button>
                                        </NavLink>
                                    </main>
                                </CardContent>
                            </Card>
                        </div>
                        <img
                            className="center max-width "
                            src="https://i.imgur.com/95yjYOs.gif"
                        ></img>
                    </>
                }
            />
        </Routes>
    );
}

export default App;

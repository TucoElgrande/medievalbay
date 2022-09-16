import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartProvider from "./context/CartContext";
import ProductProvider from "./context/ProductContext";
import "./global.css";
import "./pages/Home.css";
import "./pages/Products.css";
import "./pages/Checkout.css";
import "./pages/Confirmation.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProductProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductProvider>
        </BrowserRouter>
    </React.StrictMode>
);

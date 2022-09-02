import React, { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../data/data";

interface ContextValue {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

interface Props {
    children: ReactNode;
}

const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

function CartProvider({ children }: Props) {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevState) => [...prevState, product]);
        console.log(cart);
    };
    const removeFromCart = () => {
        setCart((prevState) => [...prevState]);
        cart.splice(0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);

export default CartProvider;

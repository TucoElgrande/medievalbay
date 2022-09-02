import React, { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../data/data";

interface ContextValue {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeAllCart: () => void;
    removeOneFromCart: (product: Product) => void;
}

interface Props {
    children: ReactNode;
}

const CartContext = createContext<ContextValue>({
    cart: [],
    addToCart: () => {},
    removeAllCart: () => {},
    removeOneFromCart: () => {},
});

function CartProvider({ children }: Props) {
    const [cart, setCart] = useState<Product[]>([]);

    // Something something don't mutilate the array

    const addToCart = (product: Product) => {
        setCart((prevState) => [...prevState, product]);
    };
    const removeOneFromCart = (product: Product) => {
        setCart((state) => {
            const i = state.findIndex((p) => p.id === product.id);
            return state.filter((product, j) => i !== j);
        });
    };

    const removeAllCart = () => {
        setCart((prevState) => {
            return prevState.splice(0);
        });
    };

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeAllCart, removeOneFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);

export default CartProvider;

import React, { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "./ProductContext";

interface cartItem {
    product: Product;
    quantity: number;
}

interface ContextValue {
    cart: cartItem[];
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
    const [cart, setCart] = useState<cartItem[]>([]);

    // Something something don't mutilate the array

    const addToCart = (product: Product) => {
        setCart((state) => {
            const i = state.findIndex((p) => p.product.id === product.id);
            if (i != -1) {
                const stateCopy = [...state];
                const updatedCartItem: cartItem = { ...state[i], quantity: state[i].quantity + 1 };
                stateCopy.splice(i, 1, updatedCartItem);
                return stateCopy;
            } else {
                let itm: cartItem = { product: product, quantity: 1 };
                return [...state, itm];
            }
        });

        // let itm: cartItem;
        // setCart((prevState) => [...prevState, itm]);
    };
    const removeOneFromCart = (product: Product) => {
        setCart((state) => {
            const i = state.findIndex((p) => p.product.id === product.id);
            if (i != -1) {
                if (state[i].quantity > 1) {
                    const stateCopy = [...state];
                    const updatedCartItem: cartItem = {
                        ...state[i],
                        quantity: state[i].quantity - 1,
                    };
                    stateCopy.splice(i, 1, updatedCartItem);
                    return stateCopy;
                } else {
                    return state.filter((p) => p.product.id !== product.id);
                }
            } else {
                return [...state];
            }
        });
    };

    const removeAllCart = () => {
        setCart([]);
    };

    console.log(cart);
    // const displayCart = () => {
    //     return (
    //         </div>
    // )}
    return (
        <CartContext.Provider value={{ cart, addToCart, removeAllCart, removeOneFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () => useContext(CartContext);

export default CartProvider;

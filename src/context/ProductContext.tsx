import React, { createContext, ReactNode, useContext, useState } from "react";
import { getProducts, Product } from "../data/data";

interface ContextValue {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
    isAdmin: boolean;
    toggleAdmin: () => void;
}

interface Props {
    children: ReactNode;
}

const ProductContext = createContext<ContextValue>({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    isAdmin: false,
    toggleAdmin: () => {},
});

function ProductProvider({ children }: Props) {
    const [products, setProducts] = useState<Product[]>(getProducts()); //TODO localstorage
    const [isAdmin, setIsAdmin] = useState(false);

    const toggleAdmin = () => {
        setIsAdmin((isAdmin) => !isAdmin);
    };

    const addProduct = (product: Product) => {
        setProducts((prevState) => [...prevState, product]);
    };
    const removeProduct = (product: Product) => {
        setProducts((state) => {
            const i = state.findIndex((p) => p.id === product.id);
            return state.filter((product, j) => i !== j);
        });
    };

    console.log(products);

    return (
        <ProductContext.Provider
            value={{ products, addProduct, removeProduct, isAdmin, toggleAdmin }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export const useProduct = () => useContext(ProductContext);

export default ProductProvider;

import React, { createContext, ReactNode, useContext, useState } from "react";
import { getProducts } from "../data/data";

export interface Product {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

export interface ProductDTO {
    title: string;
    price: number;
    imageUrl: string;
}
export type createProduct = Omit<Product, "id">;

interface ContextValue {
    products: Product[];
    addProduct: (product: ProductDTO) => void;
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

    const addProduct = (product: ProductDTO) => {
        let productWithUniqueId: Product = {
            id: 0,
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
        };

        // Lazy unique id, if we never scramble the order of list, the biggest id will always be the furthest down.
        if (products.length > 0) {
            productWithUniqueId.id = products[products.length].id + 1;
        }

        setProducts((prevState) => [...prevState, productWithUniqueId]);
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

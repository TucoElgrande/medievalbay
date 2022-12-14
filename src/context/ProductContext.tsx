import { isString } from "formik";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import React from "react";
import mockProducts from "../data/data";

export interface Product {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    description: string;
}

export type ProductDTO = Omit<Product, "id">;

interface ContextValue {
    products: Product[];
    addProduct: (product: ProductDTO) => void;
    removeProduct: (product: Product) => void;
    editProduct: (product: ProductDTO, id: number) => void;
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
    editProduct: () => {},
    isAdmin: false,
    toggleAdmin: () => {},
});

function ProductProvider({ children }: Props) {
    const InitData = localStorage.getItem("Products");

    let parsedData: Product[] = mockProducts;

    if (isString(InitData)) {
        parsedData = JSON.parse(InitData);
    }

    const [products, setProducts] = useState<Product[]>(parsedData);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        localStorage.setItem("Products", JSON.stringify(products));
    }, [products]);

    const toggleAdmin = () => {
        setIsAdmin((isAdmin) => !isAdmin);
    };

    const addProduct = (product: ProductDTO) => {
        let productWithUniqueId: Product = {
            id: 1,
            title: product.title,
            price: product.price,
            imageUrl: product.imageUrl,
            description: product.description,
        };

        // Lazy unique id, if we never scramble the order of list, the biggest id will always be the furthest down.
        if (products.length > 0) {
            productWithUniqueId.id = products[products.length - 1].id + 1;
        }
        setProducts((prevState) => [...prevState, productWithUniqueId]);
    };

    const editProduct = (product: ProductDTO, id: number) => {
        setProducts((state) => {
            const i = state.findIndex((p) => p.id === id);
            if (i != -1) {
                const stateCopy = [...state];
                const updatedProduct: Product = {
                    ...state[i],
                    title: product.title,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    description: product.description,
                };
                stateCopy.splice(i, 1, updatedProduct);
                return stateCopy;
            } else {
                return [...state];
            }
        });
    };

    const removeProduct = (product: Product) => {
        setProducts((state) => {
            const i = state.findIndex((p) => p.id === product.id);
            return state.filter((product, j) => i !== j);
        });
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                addProduct,
                editProduct,
                removeProduct,
                isAdmin,
                toggleAdmin,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
export const useProduct = () => useContext(ProductContext);

export default ProductProvider;

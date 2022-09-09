import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { Stack } from "@mui/system";
import { ProductDTO, Product, useProduct } from "../context/ProductContext";

type ProductRecord = Record<keyof ProductDTO, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
    title: Yup.string()
        .min(1, "")
        .max(25, "max 25 letters")
        .required("First name field cannot be empty"),
    price: Yup.number()
        .min(1, "Cost must be more than 0")
        .max(10000000)
        .strict()
        .required("Price field cannot be empty"),
    imageUrl: Yup.string()
        .url()
        .min(5)
        .max(100)
        .notRequired(),
});

interface ProductForm {
    product?: Product;
}

function ProductForm(product?: Product) {
    const { products, addProduct, editProduct } = useProduct();

    const formik = useFormik<ProductDTO>({
        initialValues: product || {
            title: "",
            price: 0,
            imageUrl: "",
        },
        validateOnChange: true,
        validationSchema: ProductSchema,
        onSubmit: (values) => {
            if (product) {
            } else {
                // NEW
            }
            // TODO: Save product to state/api
            editProduct(values, 1);
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ margin: "1rem" }}>
            <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                placeholder="Title"
                type="text"
                name="title"
                value={formik.values.title.trim()}
                onChange={formik.handleChange}
            />

            <TextField
                id="outlined-basic"
                label="Price"
                variant="outlined"
                placeholder="Price"
                type="number"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
            />

            <TextField
                id="outlined-basic"
                label="ImageURL"
                variant="outlined"
                placeholder="ImageURL(Optional)"
                type="text"
                name="imageUrl"
                value={formik.values.imageUrl.trim()}
                onChange={formik.handleChange}
            />
            <div>
                <Stack sx={{ width: "100%" }} spacing={2}>
                    <div>{formik.touched.title && formik.errors.title}</div>
                    <div>{formik.touched.price && formik.errors.price}</div>
                    <div> {formik.touched.imageUrl && formik.errors.imageUrl}</div>
                </Stack>
                <button type="submit">Validation button</button>
            </div>
        </Box>
    );
}

export default ProductForm;

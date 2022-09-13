import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Product, ProductDTO, useProduct } from "../context/ProductContext";

type ProductRecord = Record<keyof ProductDTO, Yup.AnySchema>;

const ProductSchema = Yup.object().shape<ProductRecord>({
    title: Yup.string()
        .min(1)
        .max(25, "max 25 letters")
        .required("Title field cannot be empty"),
    price: Yup.number()
        .min(1, "Cost must be more than 0")
        .max(10000000)
        .strict()
        .required("Price field cannot be empty"),
    imageUrl: Yup.string()
        .url()
        .min(1, "Minimum one letter")
        .max(200, "Maximum 100 letters")
        .notRequired(),
    description: Yup.string()
        .min(1)
        .max(1000)
        .notRequired(),
});

interface Props {
    product?: Product;
    buttonName: string;
}

function ProductForm(props: Props) {
    const { products, addProduct, editProduct } = useProduct();

    const formik = useFormik<Product>({
        initialValues: props.product || {
            id: 0,
            title: "",
            price: 0,
            imageUrl: "",
            description: "",
        },
        validateOnChange: true,
        validationSchema: ProductSchema,
        onSubmit: (values, { resetForm }) => {
            if (products.find((p) => p.id == values.id)) {
                editProduct(values, values.id);
            } else {
                addProduct(values);
                resetForm({
                    values: { id: 0, title: "", price: 0, imageUrl: "", description: "" },
                });
            }
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ margin: "1rem" }}>
            {" "}
            <Stack>
                <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    placeholder="Title"
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    sx={{ marginBottom: "1rem" }}
                    error={Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
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
                    sx={{ marginBottom: "1rem" }}
                    error={Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
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
                    sx={{ marginBottom: "1rem" }}
                    error={Boolean(formik.errors.imageUrl)}
                    helperText={formik.touched.imageUrl && formik.errors.imageUrl}
                />
                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    placeholder="Description(Optional)"
                    type="string"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    sx={{ marginBottom: "1rem" }}
                />
                <div>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{ width: "7.5rem", height: "2.5rem" }}
                    >
                        {props.buttonName}
                    </Button>
                </div>
            </Stack>
        </Box>
    );
}

export default ProductForm;

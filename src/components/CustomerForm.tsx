import { useFormik } from "formik";
import * as Yup from "yup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import { Stack } from "@mui/system";

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}
type CustomerCreate = Omit<Customer, "id">;
type CustomerRecord = Record<keyof CustomerCreate, Yup.AnySchema>;

interface Props {
    customer?: Customer;
}

const CustomerSchema = Yup.object().shape<CustomerRecord>({
    firstName: Yup.string().trim().min(2, "First name must be longer than 2 letters").max(25, "max 15 letters").required("First name field cannot be empty"),
    lastName: Yup.string().strict().min(5).max(25, "max 15 letters").required("Last name field cannot be empty"),
    email: Yup.string().email("This must be a valid email").min(5).max(25, "max 15 letters").required("Email field cannot be empty")
});

function CustomerForm(props: Props) {
    const formik = useFormik<CustomerCreate>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validateOnChange: false,
        validationSchema: CustomerSchema,
        onSubmit: (values) => {
            if (props.customer) {

            } else {
                // NEW
            }
            // TODO: Save product to state/api
            console.log("ON SUBMIT", values);
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ margin: "1rem" }}>
            <TextField id="outlined-basic" label="First Name" variant="outlined"
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formik.values.firstName.trim()}
                onChange={formik.handleChange}
            />

            <TextField id="outlined-basic" label="Last Name" variant="outlined"
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={formik.values.lastName.trim()}
                onChange={formik.handleChange}
            />

            <TextField id="outlined-basic" label="Email" variant="outlined"
                placeholder="Email"
                type="text"
                name="email"
                value={formik.values.email.trim()}
                onChange={formik.handleChange}
            />
            <div>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <div>{formik.touched.firstName && formik.errors.firstName}</div>
                    <div>{formik.touched.lastName && formik.errors.lastName}</div>
                    <div> {formik.touched.email && formik.errors.email}</div>
                </Stack>
                <button type="submit">Validation button</button>
            </div >
        </Box >
    );
}

export default CustomerForm;
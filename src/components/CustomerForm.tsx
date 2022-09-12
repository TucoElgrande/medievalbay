import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { useCart } from "../context/CartContext";
import { maxHeaderSize } from "http";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export interface Customer {
  id: number;
  fname: string;
  lname: string;
  email: string;
  address: string;
  phone: string;
}
type CustomerCreate = Omit<Customer, "id">;
type CustomerRecord = Record<keyof CustomerCreate, Yup.AnySchema>;

interface Props {
  customer?: Customer;
}

const CustomerSchema = Yup.object().shape<CustomerRecord>({
  fname: Yup.string()
    .min(2, "First name must be longer than one letter")
    .max(50, "max 50 letters")
    .required("First name field cannot be empty"),
  lname: Yup.string()
    .strict()
    .min(1, "Last name must contain atleast one letter")
    .max(50, "Maximumn 50 letters")
    .required("Last name field cannot be empty"),
  email: Yup.string()
    .email("This must be a valid email")
    .min(5, "Minimum 5 letters")
    .max(50, "Max 50 letters")
    .required("Email field cannot be empty"),
  address: Yup.string()
    .min(2, "Minimum 2 letters")
    .max(50, "Max 50 letters")
    .required("Adress field cannot be empty"),
  phone: Yup.string()
    .max(14)
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone field cannot be empty"),
});

function CustomerForm(props: Props) {
  const { cart, removeOneFromCart, removeAllCart } = useCart();
  const formik = useFormik<CustomerCreate>({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      address: "",
      phone: "",
    },
    validateOnChange: false,
    validationSchema: CustomerSchema,
    onSubmit: (values) => {
      if (props.customer) {
      } else {
        // NEW
      }
      alert("Thanks for your purchase");
      removeAllCart();
      console.log("ON SUBMIT", values);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ margin: "1rem" }}
    >
      <TextField
        id="fname"
        label="First Name"
        variant="outlined"
        placeholder="First Name"
        type="text"
        name="fname"
        value={formik.values.fname.trim()}
        onChange={formik.handleChange}
      />

      <TextField
        id="lname"
        label="Last Name"
        variant="outlined"
        placeholder="Last Name"
        type="text"
        name="lname"
        value={formik.values.lname.trim()}
        onChange={formik.handleChange}
      />

      <TextField
        id="email"
        label="Email"
        variant="outlined"
        placeholder="Email"
        type="text"
        name="email"
        value={formik.values.email.trim()}
        onChange={formik.handleChange}
      />
      <TextField
        id="street-address"
        label="Address"
        variant="outlined"
        placeholder="Address"
        type="text"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
      />
      <TextField
        id="tel"
        label="Phone number"
        variant="outlined"
        placeholder="Phone number"
        type="text"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <div>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <div>{formik.touched.fname && formik.errors.fname}</div>
          <div>{formik.touched.lname && formik.errors.lname}</div>
          <div> {formik.touched.email && formik.errors.email}</div>
          <div> {formik.touched.address && formik.errors.address}</div>
          <div> {formik.touched.phone && formik.errors.phone}</div>
        </Stack>
        {/* <button type="submit">Validation button</button> */}
        <Button variant="contained" color="success" type="submit">
          Confirm purchase
        </Button>
      </div>
    </Box>
  );
}

export default CustomerForm;

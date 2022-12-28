import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import database from "./Firebase";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/Store";
const Form = ({ totalAmount, cartItems }) => {
  const dispatch = useDispatch();

  const sendingOrder = async (data) => {
    await addDoc(collection(database, "orders"), {
      customerData: data,
      totalAmount,
      cartItems,
    });
    dispatch(cartActions.resetCart());
  };

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("required"),
    name: yup.string().required("required"),
    address: yup.string().required("required"),
    number: yup
      .number("must be number type!!")
      .positive("number must be positive!")
      .integer("please enter valid number of integers")
      .required("required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      address: "",
      name: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values) => sendingOrder(JSON.stringify(values, null, 2)),
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        value={formik.values.fullName}
        label="name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && !!formik.errors.name}
        helperText={formik.touched.name && formik.errors.name}
        size="small"
        variant="filled"
        inputProps={{ style: input_classes }}
      />

      <TextField
        label="address"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.address && !!formik.errors.address}
        helperText={formik.touched.address && formik.errors.address}
        size="small"
        variant="filled"
        inputProps={{ style: input_classes }}
      />

      <TextField
        value={formik.values.number}
        label="number"
        name="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && !!formik.errors.number}
        helperText={formik.touched.number && formik.errors.number}
        size="small"
        variant="filled"
        inputProps={{ style: input_classes }}
      />
      <TextField
        value={formik.values.email}
        label="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && !!formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
        size="small"
        variant="filled"
        inputProps={{ style: input_classes }}
      />
      <Button
        type="submit"
        sx={{
          color: "#FA8072",
          bgcolor: "white",
          ":hover": { background: "#00563b	", color: "white" },
        }}
        variant="contained"
      >
        order now
      </Button>
    </form>
  );
};

export default Form;

const input_classes = {
  backgroundColor: "#faece9",
  borderRadius: "7px",
  color: "#3f1309",
};

const formInputs = ["name", "address", "email", "password"];

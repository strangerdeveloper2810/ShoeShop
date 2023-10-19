import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup
        .string()
        .required("Password is required")
        .max(32, "Maximum password length is 32 characters")
        .min(6, "Minimum password length is 6 characters"),
    name: Yup
        .string()
        .required("Full name is required")
        .matches(/^[a-zA-Z\s]*$/, "Full name must not contain special characters"),
    phone: Yup
        .string()
        .max(10, "Maximum phone length is 10 characters")
        .required("Phone number is required "),
})
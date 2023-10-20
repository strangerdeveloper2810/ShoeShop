import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup
        .string()
        .required("Password is required")
        .max(32, "Maximum password length is 32 characters")
        .min(6, "Minimum password length is 6 characters"),
})
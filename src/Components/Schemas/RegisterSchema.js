import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    firstname:yup.string().min(5).max(20).required("Required"),
    lastname:yup.string().min(5).max(20).required("Required"),
    username:yup.string().min(8).max(25).required("Required"),
        email: yup.string().email("Please enter a valid email").required("Required"),

        password: yup
            .string()
            .min(5)
            .matches(passwordRules, { message: "Please create a stronger password" })
            .required("Required"),
        confirmpassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Required"),
});

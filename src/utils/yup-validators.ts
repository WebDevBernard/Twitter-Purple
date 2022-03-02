import * as Yup from "yup";

export const validateSignUp = Yup.object({
  username: Yup.string()
    .matches(/^\S*$/, "Cannot have spaces")
    .max(15, "Username must be less than 15 characters")
    .required("Username is required"),
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Not a valid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password needs to be minimum 6 characters")
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .min(6, "Password needs to be minimum 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

export const validateSignIn = Yup.object({
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Not a valid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password needs to be minimum 6 characters")
    .required("Password is required"),
});

export const validateReset = Yup.object({
  email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Not a valid email address"
    )
    .required("Email is required"),
});

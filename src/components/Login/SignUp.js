// https://www.youtube.com/watch?v=u-CCnDayNJw
import { Formik, Form } from "formik";
import { TextInput } from "../Form/TextInput";
import {
  validateSignIn,
  validateReset,
  validateSignUp,
} from "../../utils/yup-validators";
import { auth } from "../../utils/firebase";
import Button from "../Button/Button";
import avatar from "../../utils/generate-avatar-names";
import classes from "./Login.module.css";

const SignUp = ({ onClose }) => {
  const signUpHandler = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);

      await auth.currentUser.updateProfile({
        displayName: values.username,
        photoURL: avatar,
      });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSignUp}
      onSubmit={signUpHandler}
    >
      <Form>
        <TextInput placeholder="Enter Username" name="username" type="text" />
        <TextInput placeholder="Enter Email" name="email" type="email" />
        <TextInput
          placeholder="Enter Password"
          name="password"
          type="password"
        />
        <TextInput
          placeholder="Confirm Password"
          name="passwordConfirm"
          type="password"
        />
        <Button className={classes.buttons}>Register</Button>
      </Form>
    </Formik>
  );
};

export const SignIn = ({ onClose }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const loginHandler = async (values) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSignIn}
      onSubmit={loginHandler}
    >
      <Form>
        <TextInput placeholder="Enter Email" name="email" type="email" />
        <TextInput
          placeholder="Enter Password"
          name="password"
          type="password"
        />
        <Button className={classes.buttons}>Login</Button>
      </Form>
    </Formik>
  );
};

export const ResetPassword = ({ onClose }) => {
  const resetPasswordHandler = async (values) => {
    try {
      await auth.sendPasswordResetEmail(values.email);
      onClose();
    } catch (err) {
      console.error(err);
    }
  };
  const initialValues = {
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateReset}
      onSubmit={resetPasswordHandler}
    >
      <Form>
        <TextInput placeholder="Enter Email" name="email" type="email" />
        <Button className={classes.buttons}>Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default SignUp;

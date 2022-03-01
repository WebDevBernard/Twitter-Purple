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

const SignUp = ({
  onClose,
  loading,
  handleError,
  handleLoading,
  handleNotification,
}) => {
  const signUpHandler = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);

      await auth.currentUser.updateProfile({
        displayName: values.username,
        photoURL: avatar,
      });
      handleLoading();
      onClose();
      handleNotification(`welcome ${auth.currentUser.displayName}!`);
    } catch (err) {
      handleError("Please use a different email address");
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
      <Form className={classes.form}>
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
        <Button disabled={loading} className={classes.buttons}>
          {!loading ? "Sign Up" : "Loading"}
        </Button>
      </Form>
    </Formik>
  );
};

export const SignIn = ({ onClose, handleError, handleNotification }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const loginHandler = async (values) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      onClose();
      handleNotification(`welcome back ${auth.currentUser.displayName}!`);
    } catch (err) {
      handleError("Invalid Credentials");
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSignIn}
      onSubmit={loginHandler}
    >
      <Form className={classes.form}>
        <TextInput
          className={classes.input}
          placeholder="Enter Email"
          name="email"
          type="email"
        />
        <TextInput
          className={classes.input}
          placeholder="Enter Password"
          name="password"
          type="password"
        />
        <Button className={classes.buttons}>Login</Button>
      </Form>
    </Formik>
  );
};

export const ResetPassword = ({ onClose, handleNotification }) => {
  const resetPasswordHandler = async (values) => {
    try {
      await auth.sendPasswordResetEmail(values.email);
      onClose();
      handleNotification(`An email has been sent to ${values.email}`);
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
      <Form className={classes.form}>
        <TextInput placeholder="Enter Email" name="email" type="email" />
        <Button className={classes.buttons}>Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default SignUp;

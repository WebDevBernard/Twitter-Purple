import { Formik, Form } from "formik";
import { ErrorMessage, useField } from "formik";
import {
  validateSignIn,
  validateReset,
  validateSignUp,
} from "../../utils/yup-validators";
import avatar from "../../utils/avatar-names";
import { auth } from "../../utils/firebase";
import Button from "../shared/Button";

const TextInput = ({ label, ...props }: any) => {
  const [field] = useField(props);
  const element =
    props.element === "textarea" ? (
      <textarea autoComplete="off" {...field} {...props} />
    ) : (
      <input noValidate autoComplete="off" {...field} {...props} />
    );

  return (
    <div {...props}>
      <label {...props} htmlFor={field.name}>
        {label}
      </label>
      {element}
      <ErrorMessage component="div" className="" name={field.name} />
    </div>
  );
};

const SignUp = ({
  onClose,
  loading,
  handleError,
  handleLoading,
  handleNotification,
}: any) => {
  const signUpHandler = async (values: any) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);

      await auth.currentUser?.updateProfile({
        displayName: values.username,
        photoURL: avatar,
      });
      handleLoading();
      onClose();
      handleNotification(`welcome ${auth.currentUser?.displayName}!`);
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
      <Form className="">
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
        <Button disabled={loading} className="">
          {!loading ? "Sign Up" : "Loading"}
        </Button>
      </Form>
    </Formik>
  );
};

export const SignIn = ({ onClose, handleError, handleNotification }: any) => {
  const initialValues = {
    email: "guest@email.com",
    password: "123456",
  };
  const loginHandler = async (values: any) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      onClose();
      handleNotification(`welcome back ${auth.currentUser?.displayName}!`);
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
      <Form className="">
        <TextInput
          className=""
          placeholder="Enter Email"
          name="email"
          type="email"
        />
        <TextInput
          className=""
          placeholder="Enter Password"
          name="password"
          type="password"
        />
        <Button className="">Login</Button>
      </Form>
    </Formik>
  );
};

export const ResetPassword = ({ onClose, handleNotification }: any) => {
  const resetPasswordHandler = async (values: any) => {
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
      <Form className="">
        <TextInput placeholder="Enter Email" name="email" type="email" />
        <Button className="">Reset Password</Button>
      </Form>
    </Formik>
  );
};

export default SignUp;

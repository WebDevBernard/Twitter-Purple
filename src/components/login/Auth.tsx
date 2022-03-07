import { Formik, Form } from "formik";
import { useField } from "formik";
import {
  validateSignIn,
  validateReset,
  validateSignUp,
} from "../../utils/yup-validators";
import avatar from "../../utils/avatar-names";
import { auth } from "../../utils/firebase";
import Button from "../shared/Button";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label className={props.className} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched && "border-red-500 border-2"
        } w-full rounded-md text-lg py-1.5 px-2 focus:outline-primary_light_text placeholder-primary_light_text`}
        noValidate
        autoComplete="off"
        {...field}
        {...props}
      />
      <p className="text-red-500">{meta.error && meta.touched && meta.error}</p>
    </div>
  );
};

const ForgotPassword = (props) => {
  console.log(props.forgotPassword);
  return (
    <div>
      <p
        className="float-right p-2 cursor-pointer"
        onClick={props.toggleForgotPassword}
      >
        {!props.forgotPassword ? "Forgot Password?" : "Return"}
      </p>
    </div>
  );
};
const FormButton = (props) => {
  return (
    <div>
      <Button
        disabled={props.disabled}
        className="font-thin px-6 py-1.5 rounded-md w-full bottom-0"
      >
        {props.content}
      </Button>
    </div>
  );
};

const SignUp = ({
  onClose,
  loading,
  handleLoading,
  handleNotification,
  toggleForgotPassword,
  forgotPassword,
}) => {
  const signUpHandler = async (values) => {
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
      handleNotification("Please use a different email address");
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
      <Form className="space-y-2">
        <TextInput
          label="Your username"
          placeholder="Enter a username"
          name="username"
          type="text"
        />
        <TextInput
          label="Your email"
          placeholder="username@email.com"
          name="email"
          type="email"
        />
        <TextInput
          label="Your password"
          placeholder="*******"
          name="password"
          type="password"
        />
        <TextInput
          label="Confirm your password"
          placeholder="*******"
          name="passwordConfirm"
          type="password"
        />
        <ForgotPassword
          forgotPassword={forgotPassword}
          toggleForgotPassword={toggleForgotPassword}
        />
        <FormButton
          disabled={loading}
          content={!loading ? "Sign Up" : "Loading"}
        />
      </Form>
    </Formik>
  );
};
export const SignIn = ({
  onClose,
  handleNotification,
  toggleForgotPassword,
  forgotPassword,
}) => {
  const initialValues = {
    email: "guest@email.com",
    password: "123456",
  };
  const loginHandler = async (values) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      onClose();
      handleNotification(`Welcome back ${auth.currentUser?.displayName}!`);
    } catch (err) {
      handleNotification("Invalid Credentials");
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSignIn}
      onSubmit={loginHandler}
    >
      <Form className="space-y-2">
        <TextInput
          label="Your email"
          placeholder="username@email.com"
          name="email"
          type="email"
        />
        <TextInput
          label="Your password"
          placeholder="*******"
          name="password"
          type="password"
        />
        <ForgotPassword
          forgotPassword={forgotPassword}
          toggleForgotPassword={toggleForgotPassword}
        />
        <FormButton content={"Login to your account"} />
      </Form>
    </Formik>
  );
};

export const ResetPassword = ({
  onClose,
  handleNotification,
  toggleForgotPassword,
  forgotPassword,
}) => {
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
      <Form className="">
        <TextInput
          label="Your email"
          placeholder="username@email.com"
          name="email"
          type="email"
        />
        <ForgotPassword
          forgotPassword={forgotPassword}
          toggleForgotPassword={toggleForgotPassword}
        />
        <FormButton content={"Reset Password"} />
      </Form>
    </Formik>
  );
};

export default SignUp;

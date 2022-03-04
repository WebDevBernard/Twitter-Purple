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

const ForgotPassword = (props: any) => {
  return (
    <div>
      <p
        className="float-right p-2 cursor-pointer"
        onClick={props.passwordReset}
      >
        {!props.passwordText ? "Forgot Password?" : "Return"}
      </p>
    </div>
  );
};

interface SignUp {
  onClose: any;
  loading: any;
  handleError: any;
  handleLoading: any;
  handleNotification: any;
  passwordReset: any;
  passwordText: any;
}

const SignUp = ({
  onClose,
  loading,
  handleError,
  handleLoading,
  handleNotification,
  passwordReset,
  passwordText,
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
      <Form className="space-y-2">
        <TextInput
          label="Your username"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="Enter a username"
          name="username"
          type="text"
        />
        <TextInput
          label="Your email"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="username@email.com"
          name="email"
          type="email"
        />
        <TextInput
          label="Your password"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="*******"
          name="password"
          type="password"
        />
        <TextInput
          label="Confirm your password"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="*******"
          name="passwordConfirm"
          type="password"
        />
        <ForgotPassword
          passwordText={passwordText}
          passwordReset={passwordReset}
        />
        <Button
          className="font-thin py-1.5 rounded-md w-full bottom-0"
          disabled={loading}
        >
          {!loading ? "Sign Up" : "Loading"}
        </Button>
      </Form>
    </Formik>
  );
};
export const SignIn = ({
  onClose,
  handleError,
  handleNotification,
  passwordReset,
  passwordText,
}: any) => {
  const initialValues = {
    email: "guest@email.com",
    password: "123456",
  };
  const loginHandler = async (values: any) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      onClose();
      handleNotification(`Welcome back ${auth.currentUser?.displayName}!`);
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
      <Form className="space-y-2">
        <TextInput
          label="Your email"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="username@email.com"
          name="email"
          type="email"
        />
        <TextInput
          label="Your password"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="*******"
          name="password"
          type="password"
        />
        <ForgotPassword
          passwordText={passwordText}
          passwordReset={passwordReset}
        />
        <Button className="font-thin px-6 py-1.5 rounded-md w-full bottom-0">
          Login to your account
        </Button>
      </Form>
    </Formik>
  );
};

export const ResetPassword = ({
  onClose,
  handleNotification,
  passwordReset,
  passwordText,
}: any) => {
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
        <TextInput
          label="Your email"
          className="w-full rounded-md text-lg py-1.5 focus:outline-primary_light_text placeholder-primary_light_text"
          placeholder="username@email.com"
          name="email"
          type="email"
        />
        <ForgotPassword
          passwordText={passwordText}
          passwordReset={passwordReset}
        />
        <Button className="font-thin px-6 py-1.5 rounded-md w-full bottom-0">
          Reset Password
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUp;

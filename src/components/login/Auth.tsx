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

const TextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      {/* <label className={props.className} htmlFor={field.name}>
        {label}
      </label> */}
      <input
        className={`${
          meta.error && meta.touched && ""
        } border-[1px] border-slate-400  w-full rounded-sm text-lg py-3 px-2 mb-4 focus:outline-blue-500 placeholder-primary_light_text `}
        noValidate
        autoComplete="off"
        {...field}
        {...props}
      />
      <p className="text-red-500 absolute -mt-4">
        {meta.error && meta.touched && meta.error}
      </p>
    </div>
  );
};

const FormButton = (props: any) => {
  return (
    <div>
      <Button
        disabled={props.disabled}
        className="font-thin px-6 py-1.5 rounded-3xl w-full"
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
          placeholder="Username"
          name="username"
          type="text"
        />
        <TextInput
          label="Your email"
          placeholder="Email"
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

        <FormButton
          disabled={loading}
          content={!loading ? "Sign Up" : "Loading"}
        />
      </Form>
    </Formik>
  );
};
export const FirebaseLogin = ({ onClose, handleNotification }: any) => {
  const loginHandler = async (e: any) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword("guest@email.com", "123456");
      onClose();
      handleNotification(`Welcome back ${auth.currentUser?.displayName}!`);
    } catch (err) {
      handleNotification("Invalid Credentials");
      console.error(err);
    }
  };
  return (
    <form onSubmit={loginHandler}>
      <button
        type="submit"
        className="font-thin px-6 py-1.5 rounded-3xl w-full text-white bg-pink-500 hover:bg-pink-600  text-lg  block select-none duration-150 ease-out active:scale-95 active:shadow-sm mb-6"
      >
        <i
          className="devicon-firebase-plain h-12 w-12 mr-2"
          title="firebase icon"
        />
        Login as "Guest" with Firebase
      </button>
    </form>
  );
};
export const SignIn = ({ onClose, handleNotification }: any) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const loginHandler = async (values: any) => {
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

        <FormButton content={"Login to your account"} />
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
      <Form className="w-full">
        <TextInput
          label="Your email"
          placeholder="Enter your email"
          name="email"
          type="email"
        />
        <FormButton className="" content={"Reset Password"} />
      </Form>
    </Formik>
  );
};

export default SignUp;

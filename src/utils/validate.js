export default function validate(values) {
  let errors = {};
  // tweet validators
  if (values.message.trim().length > 140) {
    errors.message = "tweet too long!";
  }
  if (values.message.trim().length === 0) {
    errors.message = "tweet too short!";
  }
  // email validators
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is not valid";
  }
  return errors;
}

import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[0-9]{10}$/.test(values.mobile.replace(/[^0-9]/g, ""))) {
    errors.mobile = "Mobile number is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}

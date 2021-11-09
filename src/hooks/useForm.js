import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

const useFormLocal = () => {
  // form initial values
  //   const [values, setValues] = useState({
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //   });

  //   const schema = yup
  //     .object({
  //       email: yup.string().email().required(),
  //       password: yup.string().required(),
  //     })
  //     .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form inputs this way it can be gotton dynamicly from the database -> site_settings
  //   const signInInputs = [
  //     {
  //       id: 1, // id is required to map thru the list.
  //       name: "email",
  //       type: "email",
  //       placeholder: "Enter email or Username",
  //       error: "Email is required and make sure it is a valid email!",
  //       label: "Email Address",
  //       required: true,
  //       pattern: "^[A-Za-z0-9]{3,16}$",
  //     },
  //     {
  //       id: 2, // id is required to map thru the list.
  //       name: "password",
  //       type: "password",
  //       placeholder: "Enter Password",
  //       error: "password is invalid",
  //       label: "Password",
  //       required: true,
  //     },
  //   ];
  return {
    handleSubmit,
    register,
    errors,
  };
};

export default useFormLocal;

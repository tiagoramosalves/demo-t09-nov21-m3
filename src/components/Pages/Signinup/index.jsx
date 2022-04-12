import MenuBar from "../../MenuBar";

import { FormStyled } from "./styles";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Siginup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Required field!")
      .min(3, "Minimum 3 characters!"),
    email: yup
      .string()
      .required("Required field!")
      .email("Email not is valid!"),
    password: yup
      .string()
      .required("Required field!")
      .min(8, "Minimum 8 characters!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Password must contain at least one capital letter, one number and one special character!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password does not match!"),
    terms: yup.boolean().isTrue("You not accepted terms!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <>
      <MenuBar />
      <h1>Siginup</h1>
      <button onClick={() => history.push("/")}>Sair</button>
      <FormStyled onSubmit={handleSubmit(onRegister)}>
        <label>Username:</label>
        <input type="text" {...register("username")} />
        {/* {<span>{errors.username?.message}</span>} */}
        {errors.username && (
          <span className="error">{errors.username.message}</span>
        )}

        <label>Email:</label>
        <input type="text" {...register("email")} />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label>Password:</label>
        <input type="password" {...register("password")} />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}

        <label>Confirm password: </label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}

        <div>
          <input type="checkbox" {...register("terms")} />
          <span>Accepted terms?</span>
        </div>
        {errors.terms && <span className="error">{errors.terms.message}</span>}

        <button type="submit">Create an Account</button>
      </FormStyled>
    </>
  );
};
export default Siginup;

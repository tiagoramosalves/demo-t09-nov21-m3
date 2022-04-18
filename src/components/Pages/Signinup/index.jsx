import MenuBar from "../../MenuBar";

import { FormStyled } from "./styles";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Avatar,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { Box } from "@mui/system";

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

      <Container component="main">
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "Column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: "1", bgcolor: "secondary.main" }}>
            <PersonAdd />
          </Avatar>
          <Typography variant="h4">Cadastro de Usuário</Typography>
          <Box
            onSubmit={handleSubmit(onRegister)}
            component="form"
            sx={{ mt: 1, width: "40%" }}
          >
            <TextField
              {...register("username")}
              margin="normal"
              fullWidth
              label="Nome"
              helperText={errors.username?.message}
              error={!!errors.username?.message}
            />

            <TextField
              {...register("email")}
              margin="normal"
              fullWidth
              label="Email"
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />

            <TextField
              {...register("password")}
              margin="normal"
              fullWidth
              label="Senha"
              helperText={errors.password?.message}
              error={!!errors.password?.message}
            />

            <TextField
              {...register("confirmPassword")}
              margin="normal"
              fullWidth
              label="Conforme Senha"
              helperText={errors.confirmPassword?.message}
              error={!!errors.confirmPassword?.message}
            />

            <Button fullWidth type="submit" variant="contained">
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>

      {/* <h1>Siginup</h1>
      <button onClick={() => history.push("/")}>Sair</button>
      <FormStyled onSubmit={handleSubmit(onRegister)}>

        <label>Username:</label>

        <input type="text" {...register("username")} />
        {<span>{errors.username?.message}</span>}
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
      </FormStyled> */}
    </>
  );
};
export default Siginup;

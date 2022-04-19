import { Link, useHistory } from "react-router-dom";
import { Login } from "@mui/icons-material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";

const MenuBarLogin = ({ auth, setAuth }) => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async (data) => {
    const response = await api.post("/sessions/", data).catch((err) => {
      console.log(err);
      toast.error("Erro na autenticação");
    });

    const { access } = response.data;
    console.log(access);

    const { username } = getValues();

    localStorage.setItem("@GestaoDeHabitos:token", access);
    toast.success("Login com Sucesso!");
    setAuth(true);
    history.push(`/home/${username}`);
  };

  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/siginup">Cadastrar</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                //  anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              ></Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              ></Menu>
            </Box>
            <Button variant="outlined" onClick={handleClickOpenModal}>
              <Login />
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <Box onSubmit={handleSubmit(handleLogin)} component="form">
                <DialogContent>
                  <DialogContentText>Login</DialogContentText>
                  <TextField
                    {...register("username")}
                    autoFocus
                    margin="dense"
                    label="Nome"
                    type="name"
                    fullWidth
                    variant="standard"
                    helperText={errors.username?.message}
                    error={errors.username?.message}
                  />
                  <TextField
                    {...register("password")}
                    autoFocus
                    margin="dense"
                    label="password"
                    type="password"
                    fullWidth
                    variant="standard"
                    helperText={errors.password?.message}
                    error={errors.password?.message}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button variant="text" type="submit">
                    Login
                  </Button>
                </DialogActions>
              </Box>
            </Dialog>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default MenuBarLogin;

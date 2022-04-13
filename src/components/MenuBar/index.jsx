import { ContairnerMenu } from "./styles";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  Link as LinkMui,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Logout } from "@mui/icons-material";

const MenuBar = () => {
  const history = useHistory();
  return (
    // <ContairnerMenu>
    // 	<li>
    // 		{/* <a href="/home">Home</a> */}
    // 		<Link to="/home">Home</Link>
    // 	</li>
    // 	<li>
    // 		{/* <a href="/siginup">Cadastrar</a> */}
    // 		<Link to="/siginup">Cadastrar</Link>
    // 	</li>
    // 	<li>
    // 		{/* <a href="/users">Listar de usuários</a> */}
    // 		<Link to="/users">Lista de usuários</Link>
    // 	</li>
    // </ContairnerMenu>

    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/home">Home</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/users">Lista de usuários</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              //  id="menu-appbar"
              anchorOrigin={{
                vertical: "center",
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant="text" onClick={() => history.push("/")}>
              <Logout />
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              //anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={false}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MenuBar;

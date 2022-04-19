import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MenuBarLogin from "../../MenuBarLogin";

const LandingPage = ({ auth, setAuth }) => {
  const history = useHistory();

  if (auth) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <MenuBarLogin auth={auth} setAuth={setAuth} />
      <h1>LandingPage</h1>
      {/* <button onClick={() => history.push("/home/Kenzie")}>acessar</button> */}
    </>
  );
};
export default LandingPage;

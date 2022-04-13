import { useHistory } from "react-router-dom";
import MenuBarLogin from "../../MenuBarLogin";

const LandingPage = () => {
  const history = useHistory();
  return (
    <>
      <MenuBarLogin />
      <h1>LandingPage</h1>
      <button onClick={() => history.push("/home/Kenzie")}>acessar</button>
    </>
  );
};
export default LandingPage;

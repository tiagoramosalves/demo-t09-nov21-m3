import MenuBar from "../../MenuBar";
import { useHistory, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Home = ({ auth, setAuth }) => {
  const history = useHistory();
  const param = useParams();
  console.log(param);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <MenuBar setAuth={setAuth} />

      <p>{param.nome ? `Ola ${param.nome} bem-vindo` : `Home`}</p>
      {/* <button onClick={()=> history.push("/")}>Sair</button> */}
    </>
  );
};
export default Home;

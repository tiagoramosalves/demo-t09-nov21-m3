import { Switch, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Siginup from "../components/Pages/Signinup";
import UserList from "../components/Pages/UserList";
import LandingPage from "../components/Pages/LandingPage";
import { useEffect, useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@GestaoDeHabitos:token");

    if (token) {
      return setAuth(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" /*component={LandingPage}*/>
        <LandingPage auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/home/:nome?" /*component={Home}*/>
        <Home auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/siginup" component={Siginup} />
      <Route path="/users">
        <UserList />
      </Route>
    </Switch>
  );
};

export default Routes;

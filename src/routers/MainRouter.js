import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { LoginRouter } from "./LoginRouter";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";


export const MainRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>

        <PublicRoute exact path="/login" component={LoginScreen}
          isAuthenticated={user.logged} />

        <PrivateRoute path="/" component={LoginRouter}
          isAuthenticated={user.logged} />

      </Switch>
    </Router>
  )
}

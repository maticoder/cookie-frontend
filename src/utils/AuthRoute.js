import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../context/UserContext.js";

const AuthRoute = ({ component: Component, ...rest }) => {
  let {
    user: { authenticated },
    loginUser,
  } = useContext(UserContext);

  const token = localStorage.getItem("token");
  if (token && !authenticated) {
    authenticated = true;
    loginUser(token);
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !!authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

AuthRoute.contextTypes = {
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),
  loginUser: PropTypes.func,
};

AuthRoute.propTypes = {
  component: PropTypes.shape({}),
};

export default AuthRoute;

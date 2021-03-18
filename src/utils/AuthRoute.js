import React, { useContext } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { loginUser } from "../redux/actions/user.js";

const AuthRoute = ({
  component: Component,
  authenticated,
  loginUser,
  ...rest
}) => {
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

AuthRoute.propTypes = {
  component: PropTypes.shape({}),
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),
  loginUser: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);

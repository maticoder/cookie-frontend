import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import axios from "axios";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";

import { SUCCESS, ERROR } from "../../constants/snackbars.js";

import { ReactComponent as LoginImage } from "../../images/login.svg";

import "./Login.scss";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
    "&:hover": {
      backgroundColor: indigo[700],
    },
  },
}))(Button);

const Login = ({ history, loginUser, addNotification }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post("/api/user/signin", {
        email,
        password,
      });
      const { token, message } = response.data;
      addNotification({
        type: SUCCESS,
        message: message,
      });
      loginUser(token);
      history.push("/dashboard");
    } catch (error) {
      const { message, errors } = error.response.data;
      setErrors(
        errors.reduce(
          (prev, value) => ({ ...prev, [value.param]: value.msg }),
          {}
        )
      );
      addNotification({
        type: ERROR,
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="login">
      <div className="login container">
        <div className="top">
          <div className="content">
            <h1>Sign in</h1>
            <p>Start clicking now</p>
            <ColorButton
              className="facebook-button"
              variant="contained"
              startIcon={<FacebookIcon />}
              fullWidth
            >
              Sign in with Facebook
            </ColorButton>
            <div className="divider">
              <p>OR</p>
              <div className="line"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  error={errors.email}
                  helperText={errors.email}
                />
              </div>
              <div className="input">
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  error={errors.password}
                  helperText={errors.password}
                />
              </div>
              <div className="input forgot">
                <p>
                  Forgot password? <Link to="/forgot">Click here</Link>
                </p>
              </div>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                disabled={loading}
              >
                {!loading ? (
                  "Sign in"
                ) : (
                  <>
                    <span style={{ visibility: "hidden" }}>I</span>
                    <CircularProgress size={22} />
                  </>
                )}
              </Button>
            </form>
            <p className="account">
              Doesn't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="img-container">
            <LoginImage />
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loginUser: PropTypes.func,
  addNotification: PropTypes.func,
};

export default Login;

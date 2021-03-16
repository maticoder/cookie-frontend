import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";

import { SUCCESS, ERROR } from "../../constants/snackbars.js";

import { ReactComponent as RegisterImage } from "../../images/register.svg";

import "./Register.scss";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await axios.post("/api/user/signup", {
        name,
        email,
        password,
        confirm,
      });
      enqueueSnackbar(response.data.message, {
        variant: SUCCESS,
      });
      history.push("/login");
    } catch (error) {
      const { message, errors } = error.response.data;
      setErrors(
        errors.reduce(
          (prev, value) => ({ ...prev, [value.param]: value.msg }),
          {}
        )
      );
      enqueueSnackbar(message, {
        variant: ERROR,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="register">
      <div className="register container">
        <div className="top">
          <div className="content">
            <h1>Sign up</h1>
            <p>Start your journey right now</p>
            <form onSubmit={handleSubmit}>
              <div className="input">
                <TextField
                  id="name"
                  label="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  error={errors.name}
                  helperText={errors.name}
                />
              </div>
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
                  label="Passoword"
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
              <div className="input">
                <TextField
                  id="confirm"
                  label="Confirm password"
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  error={errors.confirm}
                  helperText={errors.confirm}
                />
              </div>
              <div className="input check">
                <Checkbox
                  color="primary"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <p>
                  I agree to the <Link to="/privacy">Privacy policy</Link>
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
                  "Sign up"
                ) : (
                  <>
                    <span style={{ visibility: "hidden" }}>I</span>
                    <CircularProgress size={22} />
                  </>
                )}
              </Button>
            </form>
            <p className="account">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="img-container">
            <RegisterImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

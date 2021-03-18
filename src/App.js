import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { SnackbarProvider } from "notistack";

import store from "./redux/store.js";

import AuthRoute from "./utils/AuthRoute.js";

import Navbar from "./components/Navbar/Navbar.js";
import Notifier from "./components/Notifier/Notifier.js";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";

import { animation } from "./utils/animations.js";

import "./App.scss";

const apiUrl = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00d563",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif;",
  },
});

const withAnimation = (Component) => (props) => {
  return (
    <motion.div
      initial="enter"
      animate="animate"
      exit="exit"
      variants={animation}
    >
      <Component {...props} />
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <ThemeProvider theme={theme}>
            <Router>
              <Route
                render={({ location }) => (
                  <>
                    <Notifier />
                    <Navbar />
                    <AnimatePresence exitBeforeEnter={true}>
                      <Switch location={location} key={location.pathname}>
                        <Route path="/" exact component={withAnimation(Home)} />
                        <Route path="/login" component={withAnimation(Login)} />
                        <Route
                          path="/register"
                          component={withAnimation(Register)}
                        />
                        <AuthRoute path="/dashboard" component={Dashboard} />
                      </Switch>
                    </AnimatePresence>
                  </>
                )}
              />
            </Router>
          </ThemeProvider>
        </SnackbarProvider>
      </Provider>
    </div>
  );
};

export default App;

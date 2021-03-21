import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { SnackbarProvider } from "notistack";

import store from "./redux/store.js";

import withAnimation from "./hoc/withAnimation.js";
import withSidebar from "./hoc/withSidebar.js";
import withLoader from "./hoc/withLoader.js";

import AuthRoute from "./utils/AuthRoute.js";

import Navbar from "./components/Navbar/Navbar.js";
import Notifier from "./components/Notifier/Notifier.js";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Achievements from "./pages/Achievements/Achievements.js";
import Shop from "./pages/Shop/Shop.jsx";

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
                        <AuthRoute
                          path="/dashboard"
                          component={withLoader(
                            withAnimation(withSidebar(Dashboard))
                          )}
                        />
                        <AuthRoute
                          path="/achievements"
                          component={withLoader(
                            withAnimation(withSidebar(Achievements))
                          )}
                        />
                        <AuthRoute
                          path="/shop"
                          component={withLoader(
                            withAnimation(withSidebar(Shop))
                          )}
                        />
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

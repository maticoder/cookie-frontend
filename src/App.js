import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar/Navbar.jsx";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

import { animation } from "./utils/animations.js";

import "./App.scss";

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
      <ThemeProvider theme={theme}>
        <Router>
          <Route
            render={({ location }) => (
              <>
                <Navbar />
                <AnimatePresence exitBeforeEnter={true}>
                  <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={withAnimation(Home)} />
                    <Route
                      path="/login"
                      exact
                      component={withAnimation(Login)}
                    />
                    <Route
                      path="/register"
                      exact
                      component={withAnimation(Register)}
                    />
                  </Switch>
                </AnimatePresence>
              </>
            )}
          />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;

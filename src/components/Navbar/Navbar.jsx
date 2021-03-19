import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import lottie from "lottie-web";

import animationData from "./menu.json";

import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as LogoWhite } from "../../images/logo-white.svg";

import "./Navbar.scss";

const Navbar = ({ user: { authenticated }, logoutUser }) => {
  const [active, setActive] = useState(false);
  const [animation, setAnimation] = useState(null);
  const [direction, setDirection] = useState(-1);

  const location = useLocation();

  useEffect(() => {
    setAnimation(
      lottie.loadAnimation({
        container: document.querySelector(".hamburger"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: animationData,
      })
    );
  }, []);

  useEffect(() => {
    if (animation) {
      animation.setDirection(direction);
      animation.play();
    }
  }, [animation, direction]);

  useEffect(() => {
    setActive(false);
    setDirection(-1);
  }, [location]);

  return (
    <header>
      <nav id="nav">
        <div className="nav container">
          <div className="logo">
            <Link to="/">
              <Logo />
              <h1>Cookiz</h1>
            </Link>
          </div>
          <div
            className="hamburger"
            onClick={() => {
              setDirection(direction === 1 ? -1 : 1);
              setActive(!active);
            }}
          ></div>
          <div className={`navigation ${active ? "active" : ""}`}>
            {authenticated ? (
              <ul className="nav-links">
                <li className="nav-link">
                  <span onClick={logoutUser}>Logout</span>
                </li>
              </ul>
            ) : (
              <ul className="nav-links">
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-link">
                  <Link to="/services">Services</Link>
                </li>
                <li className="nav-link">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="nav-link">
                  <Link to="/login">Sign in</Link>
                </li>
                <li className="nav-link">
                  <Link to="/register">Sign up</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    authenticated: PropTypes.bool,
  }),
  logoutUser: PropTypes.func,
};

export default Navbar;

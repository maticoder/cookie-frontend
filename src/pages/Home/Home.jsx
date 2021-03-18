import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { ReactComponent as HomeImage } from "../../images/home.svg";

import "./Home.scss";

const Home = () => {
  return (
    <div id="home">
      <div className="home container">
        <div className="top">
          <div className="content">
            <h1>The best cookie clicker</h1>
            <p>
              Cookiz is the world's most popular cookie clicker, the idle and
              free online game. Start competing right now, get any achievement
              and buy new gifts in the store.
            </p>
            <Button
              component={Link}
              to="/dashboard"
              color="primary"
              variant="contained"
            >
              Start now
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="img-container">
            <HomeImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

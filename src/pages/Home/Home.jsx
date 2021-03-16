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
              Muviz is the world's most popular and authoritative source for
              movie, TV and celebrity content. Find ratings and reviews for the
              newest movie and TV shows.
            </p>
            <Button
              component={Link}
              to="/register"
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

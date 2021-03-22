import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import "./Dashboard.scss";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.user.counter,
      multiplier:
        props.items.find((item) => item._id === props.user.item)?.value || 1,
    };

    this.prevCounter = 0;
    this.counter = props.user.counter;

    this.prevAchievements = this.props.user.achievements;

    this.interval = null;
    this.perSecondInterval = null;
  }

  checkIfAchievementIsUnlocked = (value, diff) => {
    const countAchievements = this.props.achievements.filter(
      (achievement) =>
        achievement.type === "click_count" &&
        achievement.value <= value &&
        !this.props.user.achievements.some((a) => a === achievement._id)
    );

    const perSecondAchievements = this.props.achievements.filter(
      (achievement) =>
        achievement.type === "per_second" &&
        achievement.value <= diff &&
        !this.props.user.achievements.some((a) => a === achievement._id)
    );

    const achievements = [...countAchievements, ...perSecondAchievements];
    if (
      achievements.length !== 0 &&
      achievements.some((a) => !this.prevAchievements.includes(a._id))
    ) {
      this.props.saveUserAchievement(
        [...achievements.map((a) => a._id)],
        value
      );
      this.prevAchievements = [...achievements.map((a) => a._id)];
    }
  };

  componentDidMount() {
    this.interval = setInterval(async () => {
      this.props.saveUserProgress(this.state.counter);
    }, 60000);
    this.perSecondInterval = setInterval(() => {
      this.prevCounter = this.counter;
      this.counter = this.state.counter;
      this.props.updateUserProgress(this.state.counter);
      this.checkIfAchievementIsUnlocked(
        this.state.counter,
        this.counter - this.prevCounter
      );
    }, 1000);
  }

  componentWillUnmount() {
    this.props.saveUserProgress(this.state.counter);
    clearInterval(this.interval);
    clearInterval(this.perSecondInterval);
  }

  handleCounterClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + this.state.multiplier,
      };
    });
  };

  render() {
    return (
      <div className="dashboard">
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleCounterClick}
          size="large"
        >
          Klik {this.state.counter}
        </Button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    counter: PropTypes.number,
    achievements: PropTypes.arrayOf(PropTypes.string),
  }),
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number,
      name: PropTypes.string,
      level: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.number,
      prize: PropTypes.number,
      description: PropTypes.string,
    })
  ),
  saveUserProgress: PropTypes.func,
  saveUserAchievement: PropTypes.func,
  updateUserProgress: PropTypes.func,
};

export default Dashboard;

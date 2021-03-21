import React from "react";
import PropTypes from "prop-types";

import Achievement from "../../components/Achievement/Achievement.jsx";

import "./Achievements.scss";
import { Typography } from "@material-ui/core";

const Achievements = ({ user, achievements }) => {
  return (
    <div className="achievements">
      <Typography variant="h1">Click count</Typography>
      <div className="achievements-container">
        {achievements
          .filter((achievement) => achievement.type === "click_count")
          .map((achievement) => (
            <Achievement
              key={achievement._id}
              unlocked={user.achievements.includes(achievement._id)}
              type={achievement.type}
              value={achievement.value}
              name={achievement.name}
              level={achievement.level}
              description={achievement.description}
            />
          ))}
      </div>
      <Typography variant="h1">Per second</Typography>
      <div className="achievements-container">
        {achievements
          .filter((achievement) => achievement.type === "per_second")
          .map((achievement) => (
            <Achievement
              key={achievement._id}
              unlocked={user.achievements.includes(achievement._id)}
              type={achievement.type}
              value={achievement.value}
              name={achievement.name}
              level={achievement.level}
              description={achievement.description}
            />
          ))}
      </div>
    </div>
  );
};

Achievements.propTypes = {
  user: PropTypes.shape({
    achievements: PropTypes.arrayOf(PropTypes.string),
  }),
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number,
      name: PropTypes.string,
      level: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Achievements;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pos: {
    marginBottom: 12,
  },
});

const Achievement = ({ unlocked, type, value, name, level, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type.replace(/_/g, " ")}{" "}
          {unlocked ? <CheckCircleIcon /> : <CancelIcon />}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {level}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

Achievement.propTypes = {
  unlocked: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.number,
  name: PropTypes.string,
  level: PropTypes.string,
  description: PropTypes.string,
};

export default Achievement;

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import DashboardIcon from "@material-ui/icons/Dashboard";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import MouseIcon from "@material-ui/icons/Mouse";
import TimelineIcon from "@material-ui/icons/Timeline";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

const drawerWidth = 240;
const drawerMobileWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 0,
    [theme.breakpoints.down("1200")]: {
      width: drawerMobileWidth,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    position: "relative",
    [theme.breakpoints.down("1200")]: {
      width: drawerMobileWidth,
    },
  },
  drawerContainer: {
    overflow: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar = ({ user, items, children }) => {
  const classes = useStyles();

  const calculateCurrentLevel = useMemo(
    () => (counter) => {
      const level = Math.trunc(Math.log2(counter / 10)) + 1;
      return level === -Infinity ? 0 : level;
    },
    []
  );

  const multiplier = items.find((item) => item._id === user.item)?.value || 1;

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/dashboard">
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/achievements">
              <ListItem button>
                <ListItemIcon>
                  <BeachAccessIcon />
                </ListItemIcon>
                <ListItemText primary="Achievements" />
              </ListItem>
            </Link>
            <Link to="/shop">
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Shop" />
              </ListItem>
            </Link>
            <Link to="/infinite">
              <ListItem button>
                <ListItemIcon>
                  <AllInclusiveIcon />
                </ListItemIcon>
                <ListItemText primary="Infinite" />
              </ListItem>
            </Link>
            <Link to="/users">
              <ListItem button>
                <ListItemIcon>
                  <AccessibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <DirectionsWalkIcon />
              </ListItemIcon>
              <ListItemText
                primary={`Level ${calculateCurrentLevel(user.counter)}`}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MouseIcon />
              </ListItemIcon>
              <ListItemText primary={`Clicks ${user.counter}`} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary={`Multiplier ${multiplier}`} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
};

Sidebar.propTypes = {
  user: PropTypes.shape({
    counter: PropTypes.number,
  }),
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Sidebar;

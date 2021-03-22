import { connect } from "react-redux";

import Dashboard from "./Dashboard.jsx";

import {
  logoutUser,
  saveUserProgress,
  saveUserAchievement,
  updateUserProgress,
} from "../../redux/actions/user.js";
import { addNotification } from "../../redux/actions/notification.js";
import { getCookie } from "../../redux/actions/cookie.js";

const mapStateToProps = (state) => ({
  user: state.user,
  achievements: state.data.achievements,
  items: state.data.items,
});

const mapDispatchToProps = {
  logoutUser,
  addNotification,
  getCookie,
  saveUserProgress,
  saveUserAchievement,
  updateUserProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

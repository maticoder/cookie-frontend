import { connect } from "react-redux";

import Dashboard from "./Dashboard.jsx";

import {
  logoutUser,
  saveUserProgress,
  saveUserAchievement,
} from "../../redux/actions/user.js";
import { addNotification } from "../../redux/actions/notification.js";
import { getCookie } from "../../redux/actions/cookie.js";

const mapStateToProps = (state) => ({
  user: state.user,
  achievements: state.data.achievements,
});

const mapDispatchToProps = {
  logoutUser,
  addNotification,
  getCookie,
  saveUserProgress,
  saveUserAchievement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

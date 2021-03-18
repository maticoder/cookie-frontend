import { connect } from "react-redux";

import Dashboard from "./Dashboard.jsx";

import { logoutUser } from "../../redux/actions/user.js";
import { addNotification } from "../../redux/actions/notification.js";
import { getCookie } from "../../redux/actions/cookie.js";

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutUser,
  addNotification,
  getCookie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

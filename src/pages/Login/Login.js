import { connect } from "react-redux";

import Login from "./Login.jsx";

import { loginUser } from "../../redux/actions/user.js";
import { addNotification } from "../../redux/actions/notification.js";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loginUser,
  addNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

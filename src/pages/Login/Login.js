import { connect } from "react-redux";

import Login from "./Login.jsx";

import { addNotification } from "../../redux/actions/notification.js";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

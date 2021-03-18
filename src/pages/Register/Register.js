import { connect } from "react-redux";

import Register from "./Register.jsx";

import { addNotification } from "../../redux/actions/notification.js";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

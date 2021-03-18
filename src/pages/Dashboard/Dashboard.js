import { connect } from "react-redux";

import Dashboard from "./Dashboard.jsx";

import { addNotification } from "../../redux/actions/notification.js";
import { getCookie } from "../../redux/actions/cookie.js";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addNotification,
  getCookie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

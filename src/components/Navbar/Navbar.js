import { connect } from "react-redux";

import Navbar from "./Navbar.jsx";

import { logoutUser } from "../../redux/actions/user.js";

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

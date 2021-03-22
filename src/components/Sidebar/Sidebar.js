import { connect } from "react-redux";

import Sidebar from "./Sidebar.jsx";

const mapStateToProps = (state) => ({
  user: state.user,
  items: state.data.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

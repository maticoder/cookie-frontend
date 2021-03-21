import { connect } from "react-redux";

import Achievements from "./Achievements.jsx";

const mapStateToProps = (state) => ({
  user: state.user,
  achievements: state.data.achievements,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);

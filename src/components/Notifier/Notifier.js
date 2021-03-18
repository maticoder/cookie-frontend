import { connect } from "react-redux";

import Notifier from "./Notifier.jsx";

import { removeNotification } from "../../redux/actions/notification";

const mapStateToProps = (state) => ({
  notifications: state.notification.notifications,
});

const mapDispatchToProps = {
  removeNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);

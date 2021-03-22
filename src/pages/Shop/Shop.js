import { connect } from "react-redux";

import Shop from "./Shop.jsx";

import { saveUserItem } from "../../redux/actions/user.js";

const mapStateToProps = (state) => ({
  user: state.user,
  items: state.data.items,
});

const mapDispatchToProps = {
  saveUserItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

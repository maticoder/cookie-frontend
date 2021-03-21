import React from "react";
import { connect } from "react-redux";

import Loader from "../components/Loader/Loader.jsx";

const withLoader = function (ComposedClass) {
  class Component extends React.Component {
    render() {
      return this.props.loader ? <Loader /> : <ComposedClass {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    loader: state.ui.loader,
  });

  const mapDispatchToProps = {};

  return connect(mapStateToProps, mapDispatchToProps)(Component);
};

export default withLoader;

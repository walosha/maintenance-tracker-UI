import React, { Component } from "react";
import { connect } from "react-redux";

function requireAuth(ChildComponent) {
  class EhancedComponent extends Component {
    componentDidMount() {
      this.renderComponent(this.props.auth);
    }
    componentDidUpdate() {
      this.renderComponent(this.props.auth);
    }

    renderComponent(auth) {
      if (!auth) {
        return this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps({ data: { auth } }) {
    return { auth };
  }

  return connect(mapStateToProps)(EhancedComponent);
}

export default requireAuth;

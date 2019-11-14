import React, { Component } from "react";
import { connect } from "react-redux";

function requireAuth(ChildComponent) {
  class EhancedComponent extends Component {
    componentDidMount() {
      this.renderComponent(this.props.data.auth);
    }
    componentDidUpdate() {
      this.renderComponent(this.props.data.auth);
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

  const mapStateToProps = ({ requests, data }) => ({ requests, data });

  return connect(mapStateToProps)(EhancedComponent);
}

export default requireAuth;

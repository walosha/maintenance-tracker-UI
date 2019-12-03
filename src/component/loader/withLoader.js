import React, { Component } from "react";

import "./Loader.styles.scss";

const withLoader = (ChildComponent, axios) => {
  return class extends Component {
    state = { isLoading: false };

    componentDidMount() {
      console.log("hi");
      axios.interceptors.request.use(
        response => {
          this.setState({ isLoading: true });
          return response;
        },
        error => console.log(error)
      );
      axios.interceptors.response.use(
        response => {
          this.setState({ isLoading: false });
          return response;
        },
        error => console.log(error)
      );
    }

    render() {
      return (
        <>
          {this.state.isLoading ? (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <ChildComponent {...this.props} />
          )}
        </>
      );
    }
  };
};

export default withLoader;

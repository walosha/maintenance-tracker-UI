import React from "react";
import { StyledAlertBox, StyledAlertBoxText } from "./alertBox.styles";

const withAlertBox = (Component, axios) =>
  class extends React.Component {
    state = { error: null };

    componentDidMount() {
      this.request = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.response = axios.interceptors.response.use(null, err => {
        this.setState({ error: true });
      });
    }
    componentDidUpdate() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(null, err => {
        this.setState({ error: true });
      });
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.response);
      axios.interceptors.request.eject(this.request);
    }

    render() {
      return (
        <>
          {this.state.error ? (
            <StyledAlertBox>
              <StyledAlertBoxText> Network Error </StyledAlertBoxText>
            </StyledAlertBox>
          ) : null}

          <Component {...this.props} />
        </>
      );
    }
  };

export default withAlertBox;

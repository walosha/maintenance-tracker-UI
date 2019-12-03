import React from "react";
import { StyledAlertBox, StyledAlertBoxText } from "./alertBox.styles";

const AlertBox = ({ message }) => {
  console.log(message);
  function renderAlert() {
    if (message === null) {
      return null;
    } else if (message === true) {
      return (
        <StyledAlertBox>
          <StyledAlertBoxText>Sign In Successful !</StyledAlertBoxText>
        </StyledAlertBox>
      );
    } else if (message === false) {
      return (
        <StyledAlertBox>
          <StyledAlertBoxText>Sign out Successful !</StyledAlertBoxText>
        </StyledAlertBox>
      );
    }
  }

  return renderAlert();
};
export default AlertBox;

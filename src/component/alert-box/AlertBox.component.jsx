import React from "react";
import { StyledAlertBox, StyledAlertBoxText } from "./alertBox.styles";

const AlertBox = ({ message, bgColor }) => (
  <StyledAlertBox>
    <StyledAlertBoxText bgColor={bgColor}>{message}</StyledAlertBoxText>
  </StyledAlertBox>
);

export default AlertBox;

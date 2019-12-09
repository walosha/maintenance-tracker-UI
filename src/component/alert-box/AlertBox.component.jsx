import React from "react";
import { StyledAlertBox, StyledAlertBoxText } from "./alertBox.styles";

const AlertBox = ({ bgColor, children }) => (
  <StyledAlertBox>
    <StyledAlertBoxText bgColor={bgColor}>{children}</StyledAlertBoxText>
  </StyledAlertBox>
);

export default AlertBox;

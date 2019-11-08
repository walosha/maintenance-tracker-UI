import React from "react";
import {
  HeaderStyles,
  LogoBox,
  Logo,
  NavBar,
  NavItem,
  StyledSignUp
} from "./header.styles";
import logo from "../../assets/logo.png";

import "./header.styles.js";

const Header = props => {
  return (
    <HeaderStyles>
      <LogoBox to="/">
        <Logo src={logo} alt="" />
      </LogoBox>
      <NavBar>
        <NavItem to="/contactus">Contact us</NavItem>
        <NavItem to="/term">Terms</NavItem>
        <NavItem to="/signin">Sign In</NavItem>
        <StyledSignUp to="/signUp"> Sign Up</StyledSignUp>
      </NavBar>
    </HeaderStyles>
  );
};

export default Header;

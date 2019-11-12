import React from "react";
import { connect } from "react-redux";
import {
  HeaderStyles,
  LogoBox,
  Logo,
  NavBar,
  NavItem,
  StyledSignUp
} from "./header.styles";
import { signout } from "../../redux/actions";
import logo from "../../assets/logo.png";

import "./header.styles.js";

const Header = ({ user, signout, auth }) => {
  return (
    <HeaderStyles>
      <LogoBox to="/">
        <Logo src={logo} alt="" />
      </LogoBox>
      <NavBar>
        {" "}
        {auth ? (
          <NavItem to="/requests">Request</NavItem>
        ) : (
          <NavItem to="/">Contact Us</NavItem>
        )}
        {auth ? (
          <NavItem to="/news"> In-Mail </NavItem>
        ) : (
          <NavItem to="/news">News</NavItem>
        )}
        {auth ? (
          <NavItem onClick={signout} to="/">
            Sign Out
          </NavItem>
        ) : (
          <NavItem to="/signin">Sign in</NavItem>
        )}
        {auth ? (
          <NavItem to={`/${user.name}`}>
            {" "}
            WELCOME {user.name.toUpperCase().split(" ")[0]}{" "}
          </NavItem>
        ) : (
          <StyledSignUp to="/signup">Sign Up</StyledSignUp>
        )}
      </NavBar>
    </HeaderStyles>
  );
};

const mapStateToProps = ({ data: { user, auth } }) => ({ user, auth });

export default connect(
  mapStateToProps,
  { signout }
)(Header);

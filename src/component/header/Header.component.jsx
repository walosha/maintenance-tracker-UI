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

const Header = ({ user, signout }) => {
  return (
    <HeaderStyles>
      <LogoBox to="/">
        <Logo src={logo} alt="" />
      </LogoBox>
      <NavBar>
        {Object.keys(user).length ? (
          <NavItem to="/requests">Request</NavItem>
        ) : (
          <NavItem to="/signin">Contact Us</NavItem>
        )}
        {Object.keys(user).length ? (
          <NavItem to="/news"> News </NavItem>
        ) : (
          <NavItem to="/signin">Team</NavItem>
        )}
        {Object.keys(user).length ? (
          <NavItem onClick={signout} to="/">
            Sign Out
          </NavItem>
        ) : (
          <NavItem to="/signin">Sign in</NavItem>
        )}
        {Object.keys(user).length ? (
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

const mapStateToProps = ({ data: { user } }) => ({ user });

export default connect(
  mapStateToProps,
  { signout }
)(Header);

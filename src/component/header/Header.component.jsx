import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

const Header = ({ user, signout, auth, location }) => {
  console.log(location.pathname);
  return (
    <HeaderStyles>
      <LogoBox to="/">
        <Logo src={logo} alt="" />
      </LogoBox>
      <NavBar>
        {" "}
        {auth ? (
          <NavItem to={`/${user.name.split(" ").join("")}/requests`}>
            Requests
          </NavItem>
        ) : (
          <NavItem to="/">Contact Us</NavItem>
        )}
        {auth ? (
          <NavItem to="/In-mail"> In-Mail </NavItem>
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
        {auth ? null : <StyledSignUp to="/signup">Sign Up</StyledSignUp>}
        {auth && location.pathname === "/" ? (
          <NavItem
            to={user.name
              .split(" ")
              .join("")
              .toLowerCase()}
          >
            {" "}
            WELCOME {user.name.toUpperCase().split(" ")[0]}
          </NavItem>
        ) : null}
      </NavBar>
    </HeaderStyles>
  );
};

const mapStateToProps = ({ data: { user, auth } }) => ({ user, auth });

export default connect(
  mapStateToProps,
  { signout }
)(withRouter(Header));

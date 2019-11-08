import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyles = styled.header`
  padding: 4rem 2rem;
  position: relative;
  box-shadow: 0.4rem 0.5rem 2rem rgba(0, 0, 0, 0.342);
  &:hover {
    box-shadow: 0.4rem 0.3rem 1rem rgba(0, 0, 0, 0.376);
  }
`;

export const NavBar = styled.ul`
  list-style: none;
  float: right;
`;

export const LogoBox = styled(Link)`
  display: inline-block;
  width: 7rem;
`;
export const Logo = styled.img`
  height: auto;
  width: 100%;
`;

export const NavItem = styled(Link)`
  margin-right: 1rem;
  display: inline-block;
  padding: 0.7rem 3.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 0.7rem;
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    border: 0.2rem solid #ba68c8;
    color: #757575;
  }
`;

export const StyledSignUp = styled(NavItem)`
  background-color: #ba68c8;
  color: #fff;
  &:hover {
    background-color: #fff;
    border: 0.2rem solid #ba68c8;
    color: #757575;
  }
`;

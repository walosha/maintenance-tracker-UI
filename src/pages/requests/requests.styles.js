import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const boxshadow = css`
  box-shadow: 0.2rem 0.3rem 1rem #00000040;
`;

export const RequestSection = styled.section`
  padding: 3rem 4rem;
  height: 70vh;
`;
export const HeaderBox = styled.section`
  padding: 0.5rem 1.2rem;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  ${boxshadow}
`;

export const CreateRequestButton = styled(Link)`
  ${boxshadow}
  padding: 1.2rem 2.3rem;
  background-color: #ba68c8;
  color: #fff;
  text-transform: capitalize;
  font-size: 1.7rem;
  font-weight: 700;
  display: inline-block;
  border-radius: 0.3rem;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    color: #ba68c8;
  }
`;

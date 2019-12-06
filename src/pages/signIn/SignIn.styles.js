import styled from "styled-components";
import { Field, Form } from "formik";

export const SignInStyles = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  padding: 8rem 14rem;
`;
export const SignInForm = styled.div`
  padding: 2rem 3rem;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  outline: none;
  border: none;
  padding: 2rem 3rem;
  background-color: #ba68c8;
  border-radius: 0.4rem;
  width: 15%;
  cursor: pointer;
`;

export const StyledField = styled(Field)`
  border-radius: 0.4rem;
  display: block;
  width: 45%;
  height: 4.3rem;
  padding: 2.1rem 3rem;
  text-align: center;
  font-size: medium;
  font-family: inherit;
  font-weight: 700;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const StyledForm = styled(Form)`
  padding: 3rem 5rem;
  border-radius: 0.3rem;
  text-align: center;
`;

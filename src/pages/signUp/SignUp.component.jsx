import React from "react";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { signup } from "../../redux/actions";

import { SignInStyles, Button, StyledField, StyledForm } from "./SignUp.styles";

const SignUp = ({ signup }) => {
  return (
    <SignInStyles>
      <h2 className="heading-primary u-center-text">SIGN UP NOW</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          department: "",
          password: "",
          passwordConfirm: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await signup(values);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField
              type="name"
              name="name"
              placeholder="Enter your name here"
            />
            <ErrorMessage name="name" component="div" />
            <StyledField
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <ErrorMessage name="email" component="div" />
            <StyledField
              type="department"
              name="department"
              placeholder="department"
            />
            <ErrorMessage name="department" component="div" />
            <StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
            <StyledField
              type="password"
              name="passwordConfirm"
              placeholder="password"
            />
            <ErrorMessage name="passwordConfirm" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Register
            </Button>
          </StyledForm>
        )}
      </Formik>
    </SignInStyles>
  );
};

const mapStateToProps = ({ data: { user } }) => ({ user });
export default connect(
  mapStateToProps,
  { signup }
)(SignUp);

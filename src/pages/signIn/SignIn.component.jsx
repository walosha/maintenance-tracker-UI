import React from "react";
import { Formik, ErrorMessage } from "formik";

import { SignInStyles, Button, StyledField, StyledForm } from "./SignIn.styles";

const SignIn = () => (
  <SignInStyles>
    <h2 className="heading-primary u-center-text">SIGN IN</h2>
    <Formik
      initialValues={{ email: "", password: "" }}
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledField
            type="email"
            name="email"
            placeholder="Your email address"
          />
          <ErrorMessage name="email" component="div" />

          <StyledField
            type="password"
            name="password"
            placeholder="***********"
          />
          <ErrorMessage name="password" component="div" />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  </SignInStyles>
);

export default SignIn;

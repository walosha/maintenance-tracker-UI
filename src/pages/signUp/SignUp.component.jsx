import React from "react";
import axios from "axios";
import { Formik, ErrorMessage } from "formik";

import { SignInStyles, Button, StyledField, StyledForm } from "./SignUp.styles";

const SignUp = ({ history }) => (
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
        try {
          const res = await axios.post(
            "https://maintenancetrackerapp.herokuapp.com/api/v1/users/signup",
            values
          );
          history.push("/myaccount");
          console.log(res.data);
        } catch (error) {
          alert("error:", error);
        }
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
            placeholder="***********"
          />
          <ErrorMessage name="password" component="div" />
          <StyledField
            type="password"
            name="passwordConfirm"
            placeholder="Repeat password"
          />
          <ErrorMessage name="passwordConfirm" component="div" />
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  </SignInStyles>
);

export default SignUp;

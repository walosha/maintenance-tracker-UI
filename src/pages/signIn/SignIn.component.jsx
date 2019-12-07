import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { signin } from "../../redux/actions/user.action";
import { SignInStyles, Button, StyledField, StyledForm } from "./SignIn.styles";
import AlertBox from "../../component/alert-box/AlertBox.component";
import Loader from "../../component/loader/withLoader";
import maintenancetrackerapp from "./../../api/maintenancetrackerapp";

const SignIn = ({ signin }) => {
  const [message, setMesage] = useState("");
  return (
    <SignInStyles>
      {message ? <AlertBox message={message} /> : null}
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
        onSubmit={values => {
          signin(values)
            .then(message => {
              maintenancetrackerapp.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${localStorage.getItem("jwt")}`;
            })
            .catch(error => setMesage(error.message));
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
            {isSubmitting ? <Loader /> : <Button type="submit">Submit</Button>}
          </StyledForm>
        )}
      </Formik>
    </SignInStyles>
  );
};

export default connect(null, { signin })(SignIn);

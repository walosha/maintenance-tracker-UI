import React from "react";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { Button, StyledField, StyledForm } from "../signUp/SignUp.styles";
import requireAuth from "../../hoc/requireAuth";
import { RequestFormSection } from "./request-form.styles";
import { postRequest } from "../../redux/actions/request.action";

const ReqestForm = ({ postRequest }) => {
  return (
    <RequestFormSection>
      <h2 className="heading-primary u-center-text">
        Create a repair or Maintenance Reqest{" "}
      </h2>
      <Formik
        initialValues={{
          title: "",
          request: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = "Title is required";
          } else if (!values.request) {
            errors.request = "Please write a request!";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("hi");
          postRequest(values);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField
              type="text"
              name="title"
              placeholder="Request Title"
              autocompleted="off"
            />
            <ErrorMessage name="title" component="div" />

            <StyledField
              rows="15"
              columns="55"
              name="request"
              placeholder="Enter Request"
            />
            <ErrorMessage name="request" component="div" />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </RequestFormSection>
  );
};

export default connect(
  null,
  { postRequest }
)(requireAuth(ReqestForm));

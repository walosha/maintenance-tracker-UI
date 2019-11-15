import React, { useEffect } from "react";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import { Button, StyledField, StyledForm } from "../signUp/SignUp.styles";
import requireAuth from "../../hoc/requireAuth";
import { RequestFormSection } from "../request-form/request-form.styles";
import { postRequest, getRequest } from "../../redux/actions/request.action";

const EditRequest = ({ match, newRequest, getRequest }) => {
  useEffect(getRequestOnMount, []);
  console.log(newRequest);
  function getRequestOnMount() {
    getRequest(match.params.requestId);
  }
  return (
    <RequestFormSection>
      <h2 className="heading-primary u-center-text">Edit Reqest </h2>
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
        onSubmit={values => {
          postRequest(values);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField
              type="text"
              name="title"
              value={newRequest.title}
              placeholder="Request Title"
              autocompleted="off"
            />
            <ErrorMessage name="title" component="div" />

            <StyledField
              value={newRequest.request}
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
const mapStateToProps = ({ requests: { newRequest } }) => ({ newRequest });

export default connect(
  mapStateToProps,
  { postRequest, getRequest }
)(requireAuth(EditRequest));

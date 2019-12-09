import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  Button,
  StyledField,
  StyledForm,
  StyledErrorMessage
} from "../signIn/SignIn.styles";
import requireAuth from "../../hoc/requireAuth";
import { RequestFormSection } from "../request-form/request-form.styles";
import { updateRequest, getRequest } from "../../redux/actions/request.action";
import Loader from "../../component/loader/withLoader";

const EditRequest = ({
  match,
  history,
  newRequest,
  getRequest,
  updateRequest
}) => {
  console.log(newRequest);
  useEffect(getRequestOnMount, []);

  newRequest = Object.values(newRequest || {})[0];

  function getRequestOnMount() {
    getRequest(match.params.requestId);
  }

  return !newRequest ? (
    <Loader />
  ) : (
    <RequestFormSection>
      <h2 className="heading-primary u-center-text"> Edit Reqest </h2>
      <Formik
        initialValues={{
          title: newRequest.title,
          request: newRequest.request
        }}
        validationSchema={yup.object({
          title: yup
            .string()
            .min(4)
            .required("Title is required !"),
          request: yup
            .string()
            .min(5)
            .required("Request is required !")
        })}
        onSubmit={values => {
          updateRequest({ ...values, _id: newRequest._id });
          history.push("/");
        }}
      >
        {({ isSubmitting, handleChange, onSubmit, values }) => (
          <StyledForm>
            <StyledField
              type="text"
              name="title"
              value={values.title}
              autoComplete="off"
              onChange={handleChange}
            />

            <StyledErrorMessage name="title" />
            <textarea
              value={values.request}
              rows="15"
              columns="5"
              name="request"
              onChange={handleChange}
            />
            <StyledErrorMessage name="request" component="div" />
            {isSubmitting ? (
              <Loader />
            ) : (
              <Button onClick={onSubmit} type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            )}
          </StyledForm>
        )}
      </Formik>
    </RequestFormSection>
  );
};
const mapStateToProps = ({ requests: { newRequest } }) => ({ newRequest });

export default connect(mapStateToProps, { updateRequest, getRequest })(
  requireAuth(EditRequest)
);

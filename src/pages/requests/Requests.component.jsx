import React, { useEffect } from "react";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import { getRequest } from "../../redux/actions/request.action";
import {
  RequestSection,
  CreateRequestButton,
  HeaderBox
} from "./requests.styles";

const Requests = ({ match, getRequest }) => {
  useEffect(renderRequest, []);

  function renderRequest() {
    getRequest();
  }

  return (
    <>
      <RequestSection>
        <HeaderBox>
          <h2 className="heading-primary">List of Request </h2>{" "}
          <CreateRequestButton to={`${match.url}/createrequest`}>
            Create Request
          </CreateRequestButton>
        </HeaderBox>
      </RequestSection>
    </>
  );
};

export default connect(
  null,
  { getRequest }
)(requireAuth(Requests));

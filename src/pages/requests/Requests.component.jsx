import React, { useEffect } from "react";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import { getRequest } from "../../redux/actions/request.action";
import {
  RequestSection,
  CreateRequestButton,
  HeaderBox
} from "./requests.styles";

const Requests = ({ match, getRequest, request }) => {
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
        {request
          ? request.map(req => (
              <React.Fragment key={req._id}>
                <h1>{req.title}</h1>
                <p>{req.request}</p>
              </React.Fragment>
            ))
          : null}
      </RequestSection>
    </>
  );
};

const mapStateToProps = state => state.requests;

export default connect(
  mapStateToProps,
  { getRequest }
)(requireAuth(Requests));

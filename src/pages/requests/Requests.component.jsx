import React from "react";
import requireAuth from "../../hoc/requireAuth";
import {
  RequestSection,
  CreateRequestButton,
  HeaderBox
} from "./requests.styles";

const Requests = ({ match }) => (
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
export default requireAuth(Requests);

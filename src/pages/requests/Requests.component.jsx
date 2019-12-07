import React, { useEffect } from "react";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import {
  getRequests,
  deleteRequest,
  updateRequest
} from "../../redux/actions/request.action";
import RequestCard from "./../../component/requestCard/RequestCard.component";
import {
  RequestSection,
  StatusText,
  BtnRight,
  BtnSucess,
  BtnDanger,
  CreateRequestButton,
  HeaderBox
} from "./requests.styles";

const Requests = props => {
  const {
    match,
    getRequests,
    request,
    data,
    updateRequest,
    deleteRequest
  } = props;

  useEffect(
    request => {
      (async function() {
        await getRequests();
      })(request);
    },
    [getRequests]
  );

  async function confirmRequest(req, res) {
    const updatedRequest = { ...req, status: res };

    await updateRequest(updatedRequest);
  }

  return (
    <>
      <RequestSection>
        <HeaderBox>
          <h2 className="heading-primary">List of Requests </h2>{" "}
          <CreateRequestButton to={`${match.url}/createrequest`}>
            Create Request
          </CreateRequestButton>
        </HeaderBox>
        {request
          ? Object.values(request).map(singleReq => {
              return (
                <RequestCard
                  deleteRequest={() => {
                    deleteRequest(singleReq._id);
                    getRequests();
                  }}
                  key={singleReq._id}
                  {...singleReq}
                >
                  {data.user.role === "admin" &&
                  singleReq.status === "pending" ? (
                    <>
                      <BtnSucess
                        onClick={() => confirmRequest(singleReq, "accepted")}
                      >
                        Accept
                      </BtnSucess>{" "}
                      <BtnDanger
                        onClick={() => confirmRequest(singleReq, "cancelled")}
                      >
                        Reject
                      </BtnDanger>
                    </>
                  ) : singleReq.status === "cancelled" ? (
                    <BtnDanger>{singleReq.status}</BtnDanger>
                  ) : (
                    <StatusText>{singleReq.status}</StatusText>
                  )}
                </RequestCard>
              );
            })
          : null}
        <BtnRight> Page 1</BtnRight>
      </RequestSection>
    </>
  );
};

const mapStateToProps = state => state.requests;

export default connect(mapStateToProps, {
  getRequests,
  deleteRequest,
  updateRequest
})(requireAuth(Requests));

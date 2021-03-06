import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import requireAuth from "../../hoc/requireAuth";
import {
  getRequests,
  deleteRequest,
  updateRequest
} from "../../redux/actions/request.action";
import { ReactComponent as Bin } from "../../assets/bin.svg";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import {
  RequestSection,
  StatusText,
  BtnSucess,
  BtnDanger,
  RequestDateFormat,
  CreateRequestButton,
  HeaderBox,
  RequestDescribtion,
  RequestTitle,
  RequestDetail,
  RequestPaper,
  RequestStatus
} from "./requests.styles";

const Requests = props => {
  const {
    match,
    getRequests,
    request,
    deleteRequest,
    data,
    updateRequest
  } = props;
  useEffect(renderRequest, request);

  function renderRequest() {
    getRequests();
  }

  function confirmRequest(req, res) {
    const updatedRequest = { ...req, status: res };
    updateRequest(updatedRequest);
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
          ? Object.values(request).map(singleReq => (
              <RequestPaper key={singleReq._id}>
                <div className="row">
                  <div className="col-1-of-5">
                    <Link to={`${match.url}/editrequest/${singleReq._id}`}>
                      <Pencil
                        style={{ marginRight: " 4rem", fill: "purple" }}
                      />
                    </Link>
                    <Bin
                      onClick={() => deleteRequest(singleReq._id)}
                      style={{ fill: "purple" }}
                    />
                    <RequestTitle>{singleReq.title}</RequestTitle>
                  </div>
                  <div className="col-3-of-5">
                    <RequestDescribtion>{singleReq.request}</RequestDescribtion>
                  </div>
                  <div className="col-1-of-5">
                    <RequestDetail>
                      {" "}
                      <RequestStatus>
                        {data.user.role === "admin" &&
                        singleReq.status === "pending" ? (
                          <>
                            <BtnSucess
                              onClick={() =>
                                confirmRequest(singleReq, "accepted")
                              }
                            >
                              Accept
                            </BtnSucess>{" "}
                            <BtnDanger
                              onClick={() =>
                                confirmRequest(singleReq, "cancelled")
                              }
                            >
                              Reject
                            </BtnDanger>
                          </>
                        ) : singleReq.status === "cancelled" ? (
                          <BtnDanger>{singleReq.status}</BtnDanger>
                        ) : (
                          <StatusText>{singleReq.status}</StatusText>
                        )}
                      </RequestStatus>{" "}
                      <RequestDateFormat>
                        <StatusText>
                          {String(new Date(singleReq.createdAt))
                            .split(" ")
                            .splice(1, 3)
                            .join("-")}
                        </StatusText>
                      </RequestDateFormat>
                    </RequestDetail>
                  </div>
                </div>
              </RequestPaper>
            ))
          : null}
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

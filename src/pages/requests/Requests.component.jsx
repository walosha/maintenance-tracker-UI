import React, { useEffect } from "react";
import { connect } from "react-redux";
import requireAuth from "../../hoc/requireAuth";
import { getRequest, deleteRequest } from "../../redux/actions/request.action";
import { ReactComponent as Bin } from "../../assets/bin.svg";
import {
  RequestSection,
  StatusText,
  RequestDateFormat,
  CreateRequestButton,
  HeaderBox,
  RequestDescribtion,
  RequestTitle,
  RequestDetail,
  RequestPaper,
  RequestStatus
} from "./requests.styles";

const Requests = ({ match, getRequest, request, deleteRequest }) => {
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
          ? Object.values(request).map(singleReq => (
              <RequestPaper key={singleReq._id}>
                <Bin
                  onClick={() => deleteRequest(request)}
                  style={{ fill: "purple" }}
                />
                <RequestTitle>{singleReq.title}</RequestTitle>
                <RequestDescribtion>{singleReq.request}</RequestDescribtion>
                <RequestDetail>
                  {" "}
                  <RequestStatus>
                    <StatusText>{singleReq.status}</StatusText>
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
              </RequestPaper>
            ))
          : null}
      </RequestSection>
    </>
  );
};

const mapStateToProps = state => state.requests;

export default connect(
  mapStateToProps,
  { getRequest, deleteRequest }
)(requireAuth(Requests));

import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Bin } from "../../assets/bin.svg";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import {
  StatusText,
  RequestDateFormat,
  RequestDescribtion,
  RequestTitle,
  RequestDetail,
  RequestPaper,
  RequestStatus
} from "../../pages/requests/requests.styles";

const RequestCard = ({
  url,
  _id,
  title,
  request,
  children,
  createdAt,
  deleteRequest
}) => (
  <RequestPaper>
    <div className="row">
      <div className="col-1-of-5">
        <Link to={`${url}/editrequest/${_id}`}>
          <Pencil style={{ marginRight: " 4rem", fill: "purple" }} />
        </Link>
        <Bin onClick={deleteRequest} style={{ fill: "purple" }} />
        <RequestTitle>{title}</RequestTitle>
      </div>
      <div className="col-3-of-5">
        <RequestDescribtion>{request}</RequestDescribtion>
      </div>
      <div className="col-1-of-5">
        <RequestDetail>
          {" "}
          <RequestStatus>{children}</RequestStatus>{" "}
          <RequestDateFormat>
            <StatusText>
              {String(new Date(createdAt))
                .split(" ")
                .splice(1, 3)
                .join("-")}
            </StatusText>
          </RequestDateFormat>
        </RequestDetail>
      </div>
    </div>
  </RequestPaper>
);

export default RequestCard;

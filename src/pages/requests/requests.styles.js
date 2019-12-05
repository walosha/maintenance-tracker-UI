import styled from "styled-components";
import { Link } from "react-router-dom";

export const RequestSection = styled.section`
  padding: 7rem 15rem;
`;
export const HeaderBox = styled.div`
  padding: 0.5rem 1.2rem;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5rem;
`;

export const CreateRequestButton = styled(Link)`
  box-shadow: ${props => props.theme.boxShadow};
  padding: 0.5rem 1.3rem;
  background-color: #ba68c8;
  color: #fff;
  text-transform: capitalize;
  font-size: 1.7rem;
  font-weight: 500;
  display: inline-block;
  border-radius: 0.3rem;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    color: ${props => props.theme.color};
  }
`;

export const RequestPaper = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  width: 80%;
  margin: 0 auto;
  margin: 0 auto;
  padding: 1rem 2rem;
  text-align: center;
  transform: skewX(1deg);
  transition: all 0.3s;
  transform: translatey(0);
  border-radius: 5px;
  transform: scale(1);

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &:hover {
    transform: translateY(-0.5rem);
    transform: scale(1.08);
  }
`;

export const RequestTitle = styled.h4`
  font-size: 1.4rem;
  padding: 2rem 3rem;
  color: ${props => props.theme.color};
  display: inline-block;
  text-transform: uppercase;
  margin-right: 0.7rem;
  border-right: 0.2rem solid ${props => props.theme.background1};
`;
export const RequestDescribtion = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.background2};
  display: inline-block;
  text-transform: uppercase;
  padding: 2rem 3rem;
`;

export const RequestDetail = styled.div`
  padding: 1rem 1rem;
  display: inline-block;
  text-align: center;
  border-left: 0.2rem solid ${props => props.theme.background1};
`;
export const RequestStatus = styled.div`
  font-weight: 500;
  border-radius: 3rem;
  text-align: center;
`;

export const StatusText = styled.p`
padding: 1rem 1rem;
  text-transform: capitalize;
  font-weight: 700;
  color: #fff;
  background-color: ${props => props.theme.color};
`;

export const RequestDateFormat = styled.div`
  padding: 1.5rem 1rem;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.8rem 1.5rem;
  color: #fff;
  border-radius: 3px;
`;

export const BtnSucess = styled(Button)`
  background-color: #f0f;
`;
export const BtnDanger = styled(Button)`
  background-color: red;
`;

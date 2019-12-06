import styled, { keyframes } from "styled-components";

const AlertAnimation = keyframes`
0%{
  opacity :0;
  transform:translateY(-100px)
}

50%{
  opacity :1;
  transform:translateY(30px)
}

100%{
  opacity :0;
  transform:translateY(-100px)
}

`;

export const StyledAlertBox = styled.div`
  background-color: ${props => props.bgColor || "#f0f"};
  position: absolute;
  left: 40%;
  transform: translateY(-100rem);
  height: 7.5rem;
  width: 33rem;
  text-align: center;
  padding: 1rem 3rem;
  border-radius: 0.5rem;
  animation: ${AlertAnimation} 5s ease-in-out;
`;
export const StyledAlertBoxText = styled.p`
  margin: 0 auto;
  display: inline-block;
  color: #fff;
  font-weight: 700;
  font-size: 1.6rem;
`;

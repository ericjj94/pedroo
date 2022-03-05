import styled from "styled-components";

const LoaderStyled = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  z-index: 9999;
  margin: auto;
  border: 20px solid #0072e4;
  border-radius: 50%;
  border-top: 20px solid #fff;
  width: 20px;
  height: 20px;
  animation: spinner 4s linear infinite;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default LoaderStyled;

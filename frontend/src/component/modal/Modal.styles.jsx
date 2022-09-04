import styled from "styled-components";

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapperStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border-top-left-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
`;

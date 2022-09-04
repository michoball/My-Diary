import styled from "styled-components";

export const BtnContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
  width: 100%;

  button {
    font-size: 20px;
    height: 50px;
    background-color: #9c27b0cc;
    border: none;
    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 767px) {
    button {
      font-size: 18px;
      height: 40px;

      svg {
        font-size: 18px;
        margin-right: 10px;
      }
    }
  }
`;

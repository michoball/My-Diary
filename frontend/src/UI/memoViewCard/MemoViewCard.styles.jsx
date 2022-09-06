import styled from "styled-components";

export const MemoViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 50px 20px;
  width: 100%;
  height: 75vh;

  background-color: ${(props) => props.theme.bg.container};

  border-radius: 10px;
  @media screen and (max-width: 767px) {
    padding: 10px 20px;
  }
`;

export const MemoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 90%;
  color: black;
  height: 100%;
  padding: 20px;
  margin: 10px 0;

  background-color: ${({ bgcolors }) => `${bgcolors}cc`};
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.7);
  overflow-y: scroll;

  @media screen and (max-width: 767px) {
    width: 85%;
  }
`;

export const MemoHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 20px 0;
  width: 700px;

  margin-bottom: 10px;

  border-bottom: 2px solid #623933;

  .date {
    position: absolute;
    right: 0;
    bottom: 10px;
  }
  h1 {
    color: ${(props) => props.theme.text.underline};
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
  }
  svg {
    display: ${({ major }) => (major ? "block" : "none")};
    margin-left: 10px;
    fill: #ff8a05;
  }
  @media screen and (max-width: 767px) {
    width: 480px;
    h1 {
      font-size: 25px;
      width: 300px;
    }
    .date {
      font-size: 12px;
    }
  }
`;

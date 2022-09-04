import styled from "styled-components";

export const MemoContainer = styled.div`
  padding: 10px 15px;
  word-break: break-word;
  overflow: hidden;
  font-size: 14px;

  color: ${(props) => props.theme.text.underline};
`;

export const MemoCardHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 0 0 10px 5px;
  margin: 0 10px 0 10px;
  font-weight: bold;

  color: ${(props) => props.theme.text.memoTitle};

  border-bottom: 1px solid ${(props) => props.theme.text.content};
  span {
    font-size: 20px;
  }
  svg {
    position: absolute;
    right: 10%;
    top: 7%;
    fill: ${({ major }) => (major ? "#FF8A05" : "transparent")};
  }
`;

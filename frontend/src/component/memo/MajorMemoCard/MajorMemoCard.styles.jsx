import styled from "styled-components";

export const MajorMemoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text.memoTitle};
  border-radius: 5px;
  background-color: ${({ bgcolor }) => `${bgcolor}b3`};
  padding: 10px;

  cursor: pointer;

  transition: all 0.3s ease-in-out;
  h5 {
    padding: 0 0 5px 5px;
    border-bottom: 1px solid ${(props) => props.theme.bg.main};
  }
  :hover {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
    transform: translateY(-1px);
  }
  :active {
    transform: translateY(1px);
  }
`;

export const MemoContentContainer = styled.div`
  display: flex;
  padding-top: 5px;
  color: ${(props) => props.theme.text.underline};
  p {
    font-size: 12px;
  }
`;

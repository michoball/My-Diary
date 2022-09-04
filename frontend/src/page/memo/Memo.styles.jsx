import styled from "styled-components";

export const MemoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  height: calc(100vh - 110px);

  @media screen and (max-width: 1023px) {
    height: unset;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: unset;
  }
`;

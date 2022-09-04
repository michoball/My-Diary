import styled from "styled-components";

export const EditorPageContainer = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 90px);
  padding: 0 20px;
  @media screen and (max-width: 767px) {
    height: unset;
    flex-direction: column;
  }
`;

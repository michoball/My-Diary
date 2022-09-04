import styled from "styled-components";

export const CalendarPageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  padding: 10px 20px;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    height: unset;
  }
`;

import styled from "styled-components";

export const SideBarWrapper = styled.div`
  padding: 0 20px 20px 0;
  width: 30%;

  min-height: 400px;
  min-width: 350px;
  @media screen and (max-width: 1023px) {
    padding: 0 0 20px 0;
    min-height: 350px;
    width: 100%;
    height: 400px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 0 20px 0;
    min-height: 300px;
    height: 350px;
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 1023px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const SideContentWapper = styled.div`
  padding: 10px 10px 0;
  width: 100%;

  border-radius: 10px;
  background-color: ${(props) => props.theme.bg.container};

  @media screen and (max-width: 767px) {
    padding: 10px 10px 0;
  }
`;

export const ListViewBox = styled(SideContentWapper)`
  padding-bottom: 10px;
  height: 40%;
  margin-top: 10px;
  @media screen and (max-width: 1023px) {
    width: 45%;
    height: 100%;
    margin-top: 0;
  }
  @media screen and (max-width: 767px) {
    width: 40%;
    min-width: 260px;
    height: 100%;
    margin-top: 0;
  }
`;

export const CalendarBox = styled(SideContentWapper)`
  height: 60%;
  margin-bottom: 10px;
  @media screen and (max-width: 1023px) {
    width: 55%;
    height: 100%;
    margin-bottom: 0;
  }
  @media screen and (max-width: 767px) {
    width: 60%;
    min-width: 340px;
    height: 100%;
    margin-bottom: 0;
  }
`;

import styled from "styled-components";
import { calendarCss } from "../../../../utill/calendar/Calendar.styles";

export const CalendarWrapper = styled.div`
  width: 70%;

  padding-bottom: 20px;

  min-width: 760px;
  min-height: 400px;

  z-index: ${({ zvalue }) => zvalue};
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 600px;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    height: 600px;
    min-width: 620px;
  }
`;

export const CalendarView = styled.div`
  position: relative;
  padding: 20px;
  display: flex;

  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bg.container};

  border-radius: 10px;
  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
  }
`;

export const CalendarContainer = styled.div`
  position: relative;
  width: 100%;

  ${calendarCss} {
    .fc-theme-standard .fc-scrollgrid {
      border-radius: 10px;
      border-color: ${(props) => `${props.theme.text.content}7f`};
    }
    .fc-toolbar.fc-header-toolbar {
      position: relative;
      margin-bottom: 10px;
      .fc-toolbar-chunk {
        display: flex;

        &:first-child {
          position: absolute;
          top: 0;
          left: 0;
          align-items: center;
          width: 40%;
          min-width: 400px;
          .fc-toolbar-title {
            margin: 0 10px;
            font-size: 25px;
            color: ${(props) => `${props.theme.text.head}`};
          }
        }
        &:nth-child(2) {
          position: absolute;
          top: 0;
          left: 40%;
          margin: 0 20px;
          gap: 10px;
        }
        &:last-child {
          min-width: 200px;
          height: 50px;
        }
        @media screen and (max-width: 1023px) {
          &:first-child {
            width: 35%;
            min-width: 250px;
            .fc-toolbar-title {
              font-size: 20px;
            }
          }
          &:nth-child(2) {
            margin: 0;
          }
          &:last-child {
            height: 40px;
          }
        }
        @media screen and (max-width: 767px) {
          &:first-child {
            width: 60%;
            min-width: 200px;
            .fc-toolbar-title {
              font-size: 20px;
            }
          }
          &:nth-child(2) {
            left: unset;
            right: 0;
            margin: 0;
          }
          &:last-child {
            height: 40px;
          }
        }
      }
    }
  }
  .fc-daygrid-event {
    font-size: 10px;
    .fc-event-title {
      font-size: 12px !important;
      padding: 1px 0;
    }
    &.fc-daygrid-dot-event {
      padding: 0;
      transform: translateY(2px);
    }
    &.fc-daygrid-block-event {
      text-align: center;
    }
  }
  .fc-col-header .fc-col-header-cell {
    padding: 10px 0;
    height: 30px;
    @media screen and (max-width: 767px) {
      padding: 5px 0;
      height: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  height: 35px;

  z-index: 5;
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 500px;
    right: 0;
  }
`;

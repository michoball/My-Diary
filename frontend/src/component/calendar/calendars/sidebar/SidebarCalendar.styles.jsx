import styled from "styled-components";
import { calendarCss } from "../../../../utill/calendar/Calendar.styles";

export const SidebarCalendarContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  position: relative;
  height: 100%;

  ${calendarCss} {
    .fc-theme-standard .fc-scrollgrid {
      border: none;
    }
    font-family: "Roboto", sans-serif;
    font-size: 8px;

    td,
    th {
      border: none;
    }
    .fc-toolbar-title {
      font-size: 16px !important;
      margin-right: 20px;
      color: #f2727d;
      @media screen and (max-width: 1023px) {
        font-size: 16px !important;
      }
    }

    .fc-header-toolbar.fc-toolbar {
      margin-bottom: 5px;
      @media screen and (max-width: 1023px) {
        margin-bottom: 10px;
      }
      .fc-toolbar-chunk {
        display: flex !important;
        align-items: center;
      }
    }

    .fc-button-primary:not(:disabled),
    .fc-button-primary:disabled {
      margin: 0;
      width: 50px;
      font-size: 10px !important;
      border: none;
      @media screen and (max-width: 1023px) {
        height: 23px;
      }
    }

    .fc-prev-button,
    .fc-next-button {
      height: 30px;
      border: none;

      & span {
        color: #d2d2d2 !important;
        font-weight: bold;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .fc-daygrid-day {
      .fc-daygrid-day-top {
        justify-content: center;
        font-weight: 300 !important;
      }
      .fc-daygrid-day-bottom {
        font-size: 8px !important;
        padding: 0;
        .fc-daygrid-more-link {
          font-size: 8px !important;
        }
      }
      .fc-event-title {
        font-weight: 300 !important;
        font-size: 8px !important;
        padding: 1px;
      }
    }

    .fc-col-header .fc-col-header-cell {
      .fc-col-header-cell-cushion {
        font-size: 12px !important;
      }
    }
  }
`;

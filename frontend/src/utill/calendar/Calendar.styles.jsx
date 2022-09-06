import styled, { css } from "styled-components";

export const calendarCss = css`
  .fc {
    background-color: ${(props) => props.theme.bg.container};
    th {
      border-color: ${(props) => `${props.theme.text.content}7f`};
      border-radius: 10px;
      border-bottom-right-radius: unset;
      border-bottom-left-radius: unset;
      overflow: hidden;
    }
    td {
      border-radius: 10px;
      border-color: ${(props) => `${props.theme.text.content}7f`};
      border-top-right-radius: unset;
    }

    .fc-button-primary {
      min-width: 60px;
      padding: 5px;
      margin-right: 5px;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
        width: 50px;
      }
    }

    .fc-daygrid {
      border-radius: 10px;
    }
    .fc-col-header-cell.fc-day.fc-day-sun {
      color: #f23d4c !important;
    }
    .fc-toolbar.fc-header-toolbar .fc-toolbar-title {
      font-size: 30px;
      color: #f2727d;
    }

    .fc-button-primary:not(:disabled) {
      border: none;
      background-color: #f2a7a7;
      &.fc-button-active {
        background-color: #f23d4c;
      }
      :hover {
        border: none;
        background-color: #f2727d;
      }
      :active {
        background-color: #f23d4c;
        transform: scale(0.95);
      }
    }

    .fc-button-primary:not(:disabled).fc-button-active,
    .fc-button-primary:not(:disabled).fc-button-active,
    .fc-button-primary:not(:disabled),
    .fc-button-primary:not(:disabled) {
      border: none;
      :active,
      :focus {
        box-shadow: none !important;
        border: none;
      }
    }
    .fc-col-header .fc-col-header-cell {
      .fc-col-header-cell-cushion {
        font-size: 20px;
        color: ${(props) => props.theme.text.content};
      }
      &.fc-day.fc-day-sun {
        .fc-col-header-cell-cushion {
          color: #f23d4c;
        }
      }
    }

    .fc-prev-button,
    .fc-next-button {
      margin: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 35px;
      background-color: transparent !important;

      span {
        color: #f23d4c;
        font-weight: bold;
        font-size: 40px;
      }
      &:hover {
        transform: scale(1.1);
        background-color: transparent !important;
      }
      @media screen and (max-width: 1023px) {
        width: 40px;
        height: 30px;
      }
      span {
        color: #f23d4c;
        font-weight: bold;
        font-size: 30px;
      }
    }

    .fc-list-table .fc-list-day-cushion {
      background-color: rgb(0, 0, 0, 20%) !important;
    }

    .fc-daygrid-day {
      &.fc-day {
        :hover {
          background-color: #d1d1d1;
        }
      }
      .fc-daygrid-event {
        font-size: 10px;

        &.fc-daygrid-block-event {
          text-align: center;
        }
      }
      .fc-daygrid-day-bottom {
        text-align: center;
      }
      .fc-daygrid-more-link {
        font-size: 24px;
        color: orange;
      }
    }
    .fc-timegrid {
      table .fc-col-header {
        .fc-col-header-cell {
          align-items: center;
          .fc-col-header-cell-cushion {
            font-size: 20px;
          }
        }
      }

      .fc-timegrid-event .fc-event-main {
        text-align: center;
        padding-top: 10px;
      }
    }
  }
`;

export const FullCalendarWarpper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

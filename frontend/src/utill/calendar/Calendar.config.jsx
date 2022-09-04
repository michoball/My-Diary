import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import React from "react";
import { FullCalendarWarpper } from "./Calendar.styles";

export const CALENDAR_VIEW_STYLE = {
  calender: {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev title next",
      center: "today dayGridMonth,timeGridWeek",
      right: "",
    },
  },
};

const CUSTOM_VIEW_STYLE = {
  dayGridMonth: {
    titleFormat: {
      year: "numeric",
      month: "short",
    },
  },
  timeGridWeek: {
    titleFormat: {
      month: "short",
      day: "2-digit",
    },
    dayHeaderFormat: {
      weekday: "short",
    },
  },
};

export const DefaultCalendar = React.forwardRef((props, ref) => {
  return (
    <FullCalendarWarpper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        buttonText={{
          today: "Today",
          month: "월",
          week: "주",
          day: "일",
        }}
        timeZone="UTC"
        height="100%"
        // businessHours={true}
        windowResizeDelay={300}
        views={CUSTOM_VIEW_STYLE}
        ref={ref}
        {...props}
      />
    </FullCalendarWarpper>
  );
});

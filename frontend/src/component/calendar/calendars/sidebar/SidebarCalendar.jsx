import { DefaultCalendar } from "../../../../utill/calendar/Calendar.config";
import { ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectCalendarEvents } from "../../../../features/calendar/calendar.select";

import { SidebarCalendarContainer } from "./SidebarCalendar.styles";
import { useState } from "react";
import { useEffect } from "react";
const SidebarCalendar = () => {
  const eventLists = useSelector(selectCalendarEvents);
  const [eventList, setEventList] = useState(eventLists);

  useEffect(() => {
    if (eventLists.length !== 0) {
      setEventList(eventLists);
    }
  }, [eventLists]);

  const moreLinkIconHandler = (event) => {
    event.text = <ThreeDots />;
  };

  return (
    <SidebarCalendarContainer>
      <DefaultCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title today",
          right: "next",
        }}
        events={eventList}
        titleFormat={{
          year: "numeric",
          month: "short",
        }}
        businessHours={false}
        dayMaxEvents={true}
        moreLinkContent={moreLinkIconHandler}
        displayEventTime={false}
      />
    </SidebarCalendarContainer>
  );
};

export default SidebarCalendar;

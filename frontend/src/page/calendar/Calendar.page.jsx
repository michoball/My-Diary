import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainCalendar from "../../component/calendar/calendars/main/MainCalendar";
import CalendarSideBar from "../../component/calendar/calendarSidebar/CalendarSideBar";
import { selectCalendarEvents } from "../../features/calendar/calendar.select";
import { getCalendars } from "../../features/calendar/calendar.thunk";
import { getLabels } from "../../features/label/label.thunk";
import { CalendarPageContainer } from "./Calendar.page.style";

function Calendar() {
  const eventLists = useSelector(selectCalendarEvents);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCalendars());
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <CalendarPageContainer>
      <CalendarSideBar eventLists={eventLists} />
      <MainCalendar eventLists={eventLists} />
    </CalendarPageContainer>
  );
}

export default Calendar;

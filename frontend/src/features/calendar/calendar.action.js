import { updateCalendar, createCalendar } from "./calendar.thunk";

const findEvent = (events, id) => {
  return events.find((event) => event._id === id);
};

export const addEvent = (eventList, newEventData) => {
  const exitingEvent = findEvent(eventList, newEventData._id);
  if (exitingEvent) {
    return updateCalendar({
      calendarId: exitingEvent._id,
      calendarData: newEventData,
    });
  } else {
    return createCalendar(newEventData);
  }
};

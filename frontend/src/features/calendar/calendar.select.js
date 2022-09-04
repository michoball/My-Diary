import { createSelector } from "reselect";

export const selectCalendarReducer = (state) => state.calendar;

export const selectCalendarEvents = createSelector(
  [selectCalendarReducer],
  (calendarEventsSlice) => {
    return calendarEventsSlice.eventList;
  }
);

export const selectEditEvent = createSelector(
  [selectCalendarReducer],
  (event) => {
    return event.selectedEvent;
  }
);

export const selectCalendarisLoading = createSelector(
  [selectCalendarReducer],
  (calendarIsLoadingSlice) => {
    return calendarIsLoadingSlice.isLoading;
  }
);

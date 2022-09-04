import { createSlice } from "@reduxjs/toolkit";
import {
  createCalendar,
  deleteCalendar,
  updateCalendar,
  getCalendars,
} from "./calendar.thunk";

const initialState = {
  eventList: [],
  selectedEvent: null,
  isLoading: false,
  isError: false,

  message: "",
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    selectEvent: (state, action) => {
      const exitingEvent = state.eventList.find(
        (event) => event._id === action.payload
      );
      return {
        ...state,
        selectedEvent: exitingEvent,
      };
    },
    clearSelectEvent: (state) => {
      return {
        ...state,
        selectedEvent: null,
      };
    },
    calendarReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCalendar.fulfilled, (state, action) => {
        state.isLoading = false;

        state.eventList = state.eventList.concat(action.payload);
      })
      .addCase(createCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCalendars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCalendars.fulfilled, (state, action) => {
        state.isLoading = false;

        state.eventList = action.payload;
      })
      .addCase(getCalendars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCalendar.fulfilled, (state, action) => {
        state.isLoading = false;

        state.eventList = state.eventList.filter(
          (calendar) => calendar._id !== action.payload
        );
      })
      .addCase(deleteCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCalendar.fulfilled, (state, action) => {
        state.isLoading = false;

        state.eventList = state.eventList.map((calendar) =>
          calendar._id === action.payload._id
            ? { ...calendar, ...action.payload }
            : calendar
        );
      })
      .addCase(updateCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { selectEvent, clearSelectEvent, calendarReset } =
  calendarSlice.actions;

export default calendarSlice.reducer;

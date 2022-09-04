import { createAsyncThunk } from "@reduxjs/toolkit";
import calendarApi from "./calendar.api";

//달력 이벤트 생성
export const createCalendar = createAsyncThunk(
  "calendars/create",
  async (calendarData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await calendarApi.createCalendar(calendarData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//달력 이벤트 전부 가져오기
export const getCalendars = createAsyncThunk(
  "calendars/getCalendars",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await calendarApi.getCalendars(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const { calendar } = getState();
      const fetchError = calendar.isError;
      if (fetchError) {
        return false;
      }
    },
  }
);

//달력 이벤트 삭제하기
export const deleteCalendar = createAsyncThunk(
  "calendars/delete",
  async (calendarId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await calendarApi.deleteCalendar(calendarId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//달력 이벤트 수정하기
export const updateCalendar = createAsyncThunk(
  "calendars/update",
  async ({ calendarId, calendarData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      return await calendarApi.updateCalendar(calendarId, calendarData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

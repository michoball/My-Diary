import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../features/calendar/calendarSlice";
import labelReducer from "../features/label/labelSlice";
import memoReducer from "../features/memo/memoSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    label: labelReducer,
    memo: memoReducer,
    user: userReducer,
  },
});

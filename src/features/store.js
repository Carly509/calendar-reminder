import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import calendarReducer from "./calendar/CalendarSlice";
import reminderReducer from "./reminder/ReminderSlice";
import weatherReducer from "./weather/WeatherSlice";

const reducer = combineReducers({
  reminder: reminderReducer,
  weather: weatherReducer,
  calendar: calendarReducer,
});

export const store = configureStore({
  reducer,
});

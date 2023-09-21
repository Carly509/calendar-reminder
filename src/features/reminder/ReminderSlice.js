import { createSlice } from "@reduxjs/toolkit";

export const reminderSlice = createSlice({
  name: "reminder",
  initialState: {
    reminders: [
      {
        id: 1,
        date: "2021-08-01",
        time: "10:00",
        city: "New York",
        description: "Meeting with John",
      },
    ],
  },
  reducers: {
    addReminder: (state, action) => {
      let newReminder = {
        id: Math.random(),
        date: action.payload.date,
        time: action.payload.time,
        city: action.payload.city,
        description: action.payload.description,
        //weather: action.payload.weather,
      };
      state.reminders.push(newReminder);
    },
    editReminder: (state, action) => {
      state.reminders = state.reminders.map((reminder) =>
        reminder.id === action.payload.id ? action.payload : reminder
      );
    },
    deleteReminder: (state, action) => {
      state.reminders = state.reminders.filter(
        (reminder) => reminder.id !== action.payload
      );
    },
  },
});

export const { editReminder, addReminder, deleteReminder } =
  reminderSlice.actions;

export default reminderSlice.reducer;

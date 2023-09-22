import { createSlice } from "@reduxjs/toolkit";

export const reminderSlice = createSlice({
  name: "reminder",
  initialState: {
    reminders: [
      {
        id: 1,
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        city: "Miami",
        description: "Start learning this new programming language today!",
      },
      {
        id: 2,
        date: new Date().toISOString().slice(0, 10),
        time: "03:00 PM",
        city: "Paris",
        description: "Piano lesson today",
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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMonthCalendar } from "../../utils/getMonth";

export const getMonth = createAsyncThunk(
  "calendar/getMonth",
  async (dateString) => {
    const response = await getMonthCalendar(dateString);
    return response;
  }
);

const initialState = {
  month: [],
  status: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers: {
    [getMonth.pending]: (state) => {
      state.status = "loading";
    },
    [getMonth.fulfilled]: (state, action) => {
      state.status = "success";
      state.month = action.payload;
    },
    [getMonth.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default calendarSlice.reducer;

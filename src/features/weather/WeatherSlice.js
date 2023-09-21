import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ApiUrl from "../../axios/ApiUrl";

const api_key = process.env.REACT_APP_API_KEY;

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (values) => {
    const response = await ApiUrl.get(
      `${values.city}/${values.date}/${values.date}?unitGroup=metric&key=${api_key}&contentType=json`
    );
    const final = response.data.days[0];
    final["id"] = values.id;
    return final;
  }
);

const initialState = {
  weather: [],
  status: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.status = "loading";
    },
    [getWeather.fulfilled]: (state, action) => {
      state.status = "success";
      state.weather.push(action.payload);
    },
    [getWeather.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default weatherSlice.reducer;

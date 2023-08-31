import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityWeatherStateType, WeatherRoot } from "../types";

const initialState: CityWeatherStateType = {
  city: {
    data: null,
    isLoading: false,
    error: "",
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    /* This action will trigger our saga middleware
       and set the loader to true and reset error message.
    */
    getWeatherAction: (
      state: CityWeatherStateType,
      { payload: city }: PayloadAction<string>
    ) => {
      console.log("inside ac");
      state.city.isLoading = true;
      state.city.error = "";
    },
    getWeatherSuccessAction: (
      state: CityWeatherStateType,
      { payload: city }: PayloadAction<WeatherRoot>
    ) => {
      console.log("inside suceess");
      console.log("Payload", city);
      state.city.isLoading = false;
      state.city.data = city;
    },
    getWeatherErrorAction: (
      state: CityWeatherStateType,
      { payload: error }: PayloadAction<string>
    ) => {
      state.city.isLoading = false;
      state.city.error = error;
    },
  },
});

export const {
  getWeatherAction,
  getWeatherSuccessAction,
  getWeatherErrorAction,
} = weatherSlice.actions;

export default weatherSlice.reducer;

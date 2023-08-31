import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getWeatherSuccessAction,
  getWeatherErrorAction,
} from "../slices/weatherSlice";
import { WeatherRoot } from "../types";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

// Generator function
function* getWeatherSaga({ payload: city }: PayloadAction<string>) {
  try {
    const response: AxiosResponse<WeatherRoot> = yield call(() =>
      axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10`
      )
    );
    yield put(getWeatherSuccessAction(response.data));
  } catch (error) {
    yield put(getWeatherErrorAction(error as string));
  }
}

// Generator Function
export function* watchGetWeather() {
  yield takeEvery("weather/getWeatherAction", getWeatherSaga);
}

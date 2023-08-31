import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RootState } from "./store/store";
import { getWeatherAction } from "./slices/weatherSlice";

function App() {
  const [cityWeather, setCityWeather] = useState<string>("Pandharpur");
  const { city } = useAppSelector((state: RootState) => state.weather);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWeatherAction(cityWeather));
  }, [cityWeather, dispatch]);

  console.log(city);
  return (
    <div>
      <h1>Weather App</h1>
      <button onClick={() => setCityWeather("Pune")}>serach</button>
    </div>
  );
}

export default App;

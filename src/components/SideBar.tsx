import React, { useState } from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getWeatherAction } from "../slices/weatherSlice";
import { Calendar, MapPin } from "lucide-react";
import { FormateDate } from "../utils/formateDate";
import { IWeatherRoot } from "../types";
import { FutureForecast } from "./cards/FutureForecast";

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState<string>("Mumbai");
  const { city } = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getWeatherAction(location));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(city);

  return (
    <div className="flex flex-col min-h-screen w-full lg:w-1/3 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden border-r-[.5px] border-gray-700">
      <div className="mt-2 flex items-center space-x-2 z-50">
        <input
          type="text"
          name="city"
          id="cityName"
          className="flex-1 border-0 bg-gray-900 py-1.5 pl-2 text-white sm:text-sm sm:leading-6 rounded-md font-semibold outline-none"
          placeholder="Mumbai"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={() => dispatch(getWeatherAction(location))}
          type="button"
          className="rounded-md bg-gray-900 px-2.5 py-2 text-sm font-semibold text-white/60 shadow-sm"
        >
          Search
        </button>
      </div>
      <Now city={city} />
      <h2 className="text-white my-4 text-md font-semibold">5 Days Forecast</h2>
      <FutureForecast />
    </div>
  );
};

const Now = ({ city }: { city: IWeatherRoot }) => {
  return (
    <>
      {city.isLoading ? (
        <div
          role="status"
          className="w-full h-44 rounded-lg animate-pulse bg-gray-900"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-md p-3">
          <p className="text-gray-300/80 font-medium text-sm">Now</p>
          <div className="mt-2 flex items-center space-x-6">
            <h1 className="text-gray-300 text-4xl font-medium">
              {Math.floor(city.data?.current.feelslike_c as number)}
              <span className="text-2xl text-gray-250">&deg;C</span>
            </h1>
            <img
              src={city.data?.current.condition.icon}
              alt="logo"
              className="h-12 w-12"
            />
          </div>
          <p className="mt-2 text-gray-300/80 font-medium text-sm">
            {city.data?.current.condition.text}
          </p>
          <hr className="h-px my-4 border-0 bg-gray-700" />
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-gray-300/80" />
            <p className="text-sm text-gray-300/80">
              {FormateDate(city.data?.current.last_updated as string)}
            </p>
          </div>
          <div className="mt-2 inline-flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-300/80" />
            <p className="text-sm text-gray-300/80">
              {city.data?.location.name}, {city.data?.location.country}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

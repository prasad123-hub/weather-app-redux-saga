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

  return (
    <div className="flex min-h-screen w-full flex-col space-y-10 overflow-x-hidden border-r-[.5px] border-gray-700 p-7 lg:w-1/3 lg:p-4 xl:p-7">
      <div className="z-50 mt-2 flex items-center space-x-2">
        <input
          type="text"
          name="city"
          id="cityName"
          className="flex-1 rounded-md border-0 bg-gray-900 py-1.5 pl-2 font-semibold text-white outline-none sm:text-sm sm:leading-6"
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
      <h2 className="text-md my-4 font-semibold text-white">5 Days Forecast</h2>
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
          className="h-44 w-full animate-pulse rounded-lg bg-gray-900"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="rounded-md bg-gray-900 p-3">
          <p className="text-sm font-medium text-gray-300/80">Now</p>
          <div className="mt-2 flex items-center space-x-6">
            <h1 className="text-4xl font-medium text-gray-300">
              {Math.floor(city.data?.current.feelslike_c as number)}
              <span className="text-gray-250 text-2xl">&deg;C</span>
            </h1>
            <img
              src={city.data?.current.condition.icon}
              alt="logo"
              className="h-12 w-12"
            />
          </div>
          <p className="mt-2 text-sm font-medium text-gray-300/80">
            {city.data?.current.condition.text}
          </p>
          <hr className="my-4 h-px border-0 bg-gray-700" />
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 text-gray-300/80" />
            <p className="text-sm text-gray-300/80">
              {FormateDate(city.data?.current.last_updated as string)}
            </p>
          </div>
          <div className="mt-2 inline-flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-gray-300/80" />
            <p className="text-sm text-gray-300/80">
              {city.data?.location.name}, {city.data?.location.country}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

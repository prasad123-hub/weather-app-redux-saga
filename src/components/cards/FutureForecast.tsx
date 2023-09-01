import React from "react";
import { useAppSelector } from "../../hooks";
import { FormateDate } from "../../utils/formateDate";
import { Calendar } from "lucide-react";

export const FutureForecast = () => {
  const { city } = useAppSelector((state) => state.weather);
  return (
    <>
      {city.isLoading ? (
        <div
          role="status"
          className="h-56 w-full animate-pulse rounded-lg bg-gray-900"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="rounded-md bg-gray-900 p-3">
          {city.data?.forecast.forecastday.map((day, index) => (
            <div
              key={day.date}
              className="flex items-center justify-between border-b border-gray-700 p-2"
            >
              <div className="text-left">
                <img
                  src={day.day.condition.icon}
                  alt="logo"
                  className="h-8 w-8"
                />
                <p className="text-sm text-gray-300/80">
                  {Math.floor(day.day.avgtemp_c as number)}
                  <span className="text-gray-250">&deg;C</span>
                </p>
              </div>
              <p className="hidden text-sm text-gray-300/80 md:block">
                {day.day.condition.text}
              </p>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-300/80" />
                <p className="text-sm text-gray-300/80">
                  {FormateDate(day.date as string)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

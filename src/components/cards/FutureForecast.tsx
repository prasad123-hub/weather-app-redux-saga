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
          className="w-full h-56 rounded-lg animate-pulse bg-gray-900"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-md p-3">
          {city.data?.forecast.forecastday.map((day, index) => (
            <div
              key={day.date}
              className="border-b border-gray-700 p-2 flex items-center justify-between"
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
              <p className="hidden md:block text-sm text-gray-300/80">
                {day.day.condition.text}
              </p>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-300/80" />
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

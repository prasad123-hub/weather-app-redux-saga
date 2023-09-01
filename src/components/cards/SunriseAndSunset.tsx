import { useAppSelector } from "../../hooks";
import { Sun, Moon } from "lucide-react";

export const SunriseAndSunset = () => {
  const { city } = useAppSelector((state) => state.weather);
  return (
    <>
      {city.isLoading ? (
        <div
          role="status"
          className="w-full md:w-1/2 h-24 rounded-lg animate-pulse bg-gray-900"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="w-full md:w-1/2 bg-gray-900 p-3 rounded-md">
          <p className="text-gray-300/80 text-xs">Sunrise and Sunset</p>
          <div className="mt-4 flex items-center space-x-6 lg:space-x-12">
            <Sun className="h-8 w-8 text-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-300/80">Sunrise</p>
              <h2 className="text-gray-300 text-lg font-semibold">
                {city.data?.forecast.forecastday[0].astro.sunrise}
              </h2>
            </div>
            <Moon className="h-8 w-8 text-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-300/80">Sunset</p>
              <h2 className="text-gray-300 text-lg font-semibold">
                {city.data?.forecast.forecastday[0].astro.sunset}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import { useAppSelector } from "../../hooks";
import { Wind } from "lucide-react";

export const AirQuality = () => {
  const { city } = useAppSelector((state) => state.weather);
  return (
    <>
      {city.isLoading ? (
        <div
          role="status"
          className="h-24 w-full animate-pulse rounded-lg bg-gray-900 md:w-1/2"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="w-full rounded-md bg-gray-900 p-3 md:w-1/2">
          <p className="text-xs text-gray-300/80">Air Quality</p>
          <div className="mt-4 flex items-center space-x-6 lg:space-x-12">
            <Wind className="h-8 w-8 text-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-300/80">PM10</p>
              <h2 className="text-lg font-semibold text-gray-300">
                {city.data?.current.air_quality.pm10}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-300/80">SO2</p>
              <h2 className="text-lg font-semibold text-gray-300">
                {city.data?.current.air_quality.so2}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-300/80">NO2</p>
              <h2 className="text-lg font-semibold text-gray-300">
                {city.data?.current.air_quality.no2}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-300/80">O3</p>
              <h2 className="text-lg font-semibold text-gray-300">
                {city.data?.current.air_quality.o3}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

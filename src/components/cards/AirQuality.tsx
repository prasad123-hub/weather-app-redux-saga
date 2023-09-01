import { useAppSelector } from "../../hooks";
import { Wind } from "lucide-react";

export const AirQuality = () => {
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
        <div className="bg-gray-900 p-3 rounded-md w-full md:w-1/2">
          <p className="text-gray-300/80 text-xs">Air Quality</p>
          <div className="mt-4 flex items-center space-x-6 lg:space-x-12">
            <Wind className="h-8 w-8 text-gray-300" />
            <div className="text-center">
              <p className="text-xs text-gray-300/80">PM10</p>
              <h2 className="text-gray-300 text-lg font-semibold">
                {city.data?.current.air_quality.pm10}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-300/80">SO2</p>
              <h2 className="text-gray-300 text-lg font-semibold">
                {city.data?.current.air_quality.so2}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-300/80">NO2</p>
              <h2 className="text-gray-300 text-lg font-semibold">
                {city.data?.current.air_quality.no2}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-300/80">O3</p>
              <h2 className="text-gray-300 text-lg font-semibold">
                {city.data?.current.air_quality.o3}
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

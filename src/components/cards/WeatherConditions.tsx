import { useAppSelector } from "../../hooks";
import { Droplets, GaugeCircle, Eye, ThermometerSun } from "lucide-react";

export const WeatherConditions = () => {
  const { city } = useAppSelector((state) => state.weather);

  const data = [
    {
      title: "Humidity",
      value: `${city.data?.current.humidity}%`,
      icon: <Droplets className="h-8 w-8 text-gray-300" />,
    },
    {
      title: "Pressure",
      value: `${city.data?.current.pressure_mb}hPa`,
      icon: <GaugeCircle className="h-8 w-8 text-gray-300" />,
    },
    {
      title: "Visibility",
      value: `${city.data?.current.vis_km}km`,
      icon: <Eye className="h-8 w-8 text-gray-300" />,
    },
    {
      title: "FeelsLike",
      value: `${city.data?.current.feelslike_c}`,
      icon: <ThermometerSun className="h-8 w-8 text-gray-300" />,
    },
  ];

  return (
    <>
      {city.isLoading ? (
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              role="status"
              className="h-20 w-full animate-pulse rounded-lg bg-gray-900"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {data.map((condition, index) => (
            <div key={index} className="rounded-md bg-gray-900 p-3">
              <p className="text-xs text-gray-300/80">{condition.title}</p>
              <div className="mt-4 flex items-center space-x-6 lg:space-x-12">
                {condition.icon}
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-gray-300">
                    {condition.value}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

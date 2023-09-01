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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              role="status"
              className="w-full h-20 rounded-lg animate-pulse bg-gray-900"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {data.map((condition, index) => (
            <div key={index} className="bg-gray-900 p-3 rounded-md">
              <p className="text-gray-300/80 text-xs">{condition.title}</p>
              <div className="mt-4 flex items-center space-x-6 lg:space-x-12">
                {condition.icon}
                <div className="text-center">
                  <h2 className="text-gray-300 text-xl font-semibold">
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

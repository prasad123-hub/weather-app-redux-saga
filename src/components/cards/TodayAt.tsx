import { useAppSelector } from "../../hooks";

export const TodayAt = () => {
  const { city } = useAppSelector((state) => state.weather);
  return (
    <>
      {city.isLoading ? (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              role="status"
              className="w-full h-28 rounded-lg animate-pulse bg-gray-900"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {city.data?.forecast.forecastday[0].hour.map((h, index) => (
            <div key={index} className="bg-gray-900 rounded-md p-3 text-center">
              <p className="text-gray-300/80 text-xs">{h.time.split(" ")[1]}</p>
              <img
                src={h.condition.icon}
                alt={h.condition.text}
                className="h-12 w-12 mx-auto mt-2"
              />
              <p className="text-gray-300/80 text-xs mt-2">
                {h.feelslike_c}&deg;
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

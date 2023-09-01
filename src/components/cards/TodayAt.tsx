import { useAppSelector } from "../../hooks";

export const TodayAt = () => {
  const { city } = useAppSelector((state) => state.weather);
  return (
    <>
      {city.isLoading ? (
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              role="status"
              className="h-28 w-full animate-pulse rounded-lg bg-gray-900"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-8">
          {city.data?.forecast.forecastday[0].hour.map((h, index) => (
            <div key={index} className="rounded-md bg-gray-900 p-3 text-center">
              <p className="text-xs text-gray-300/80">{h.time.split(" ")[1]}</p>
              <img
                src={h.condition.icon}
                alt={h.condition.text}
                className="mx-auto mt-2 h-12 w-12"
              />
              <p className="mt-2 text-xs text-gray-300/80">
                {h.feelslike_c}&deg;
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

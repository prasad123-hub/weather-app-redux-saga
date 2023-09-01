import { AirQuality } from "./cards/AirQuality";
import { SunriseAndSunset } from "./cards/SunriseAndSunset";
import { WeatherConditions } from "./cards/WeatherConditions";
import { TodayAt } from "./cards/TodayAt";

export const MainContent = () => {
  return (
    <section className="flex flex-col min-h-screen w-full lg:w-2/3 p-7 lg:p-4 xl:p-7 space-y-10 overflow-x-hidden">
      <div className="w-full rounded-md p-3">
        <h1 className="text-gray-300 font-semibold">Todays Highlight</h1>
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-between space-x-0 space-y-4 lg:space-y-0 lg:space-x-4">
          <AirQuality />
          <SunriseAndSunset />
        </div>
        <WeatherConditions />
        <h1 className="text-gray-300 font-semibold my-6">Today at -</h1>
        <TodayAt />
      </div>
    </section>
  );
};

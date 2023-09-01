import { AirQuality } from "./cards/AirQuality";
import { SunriseAndSunset } from "./cards/SunriseAndSunset";
import { WeatherConditions } from "./cards/WeatherConditions";
import { TodayAt } from "./cards/TodayAt";

export const MainContent = () => {
  return (
    <section className="flex min-h-screen w-full flex-col space-y-10 overflow-x-hidden p-7 lg:w-2/3 lg:p-4 xl:p-7">
      <div className="w-full rounded-md p-3">
        <h1 className="font-semibold text-gray-300">Todays Highlight</h1>
        <div className="mt-6 flex flex-col items-center justify-between space-x-0 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <AirQuality />
          <SunriseAndSunset />
        </div>
        <WeatherConditions />
        <h1 className="my-6 font-semibold text-gray-300">Today at -</h1>
        <TodayAt />
      </div>
    </section>
  );
};

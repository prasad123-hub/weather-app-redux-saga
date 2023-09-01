import { SideBar } from "./components/SideBar";
import { MainContent } from "./components/MainContent";
import { useAppSelector } from "./hooks";

function App() {
  const { city } = useAppSelector((state) => state.weather);
  return (
    <div className="flex min-h-screen flex-col bg-[#100E1D] lg:flex-row">
      {city.error.length ? (
        <div className="my-12 w-full text-center">
          <h1 className="text-2xl font-semibold text-gray-300">
            Oops ... Something went wrong. Please refresh page and enter correct
            city
          </h1>
        </div>
      ) : (
        <>
          <SideBar />
          <MainContent />
        </>
      )}
    </div>
  );
}

export default App;

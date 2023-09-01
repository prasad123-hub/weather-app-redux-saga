import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { RootState } from "./store/store";
import { getWeatherAction } from "./slices/weatherSlice";
import { SideBar } from "./components/SideBar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-[#100E1D] flex flex-col lg:flex-row">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;

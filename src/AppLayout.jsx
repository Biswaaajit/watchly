import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useState } from "react";

function AppLayout() {
  const [showFull, setShowFull] = useState(true);
  return (
    <div className="w-full h-fit  flex flex-col overflow-hidden">
      <Header setShowFull={setShowFull} />
      <div className="grow w-full h-full flex divide-x-2 divide-slate-200/40">
        <Navigation showFull={showFull} />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

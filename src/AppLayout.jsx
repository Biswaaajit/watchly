import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { useState } from "react";

function AppLayout() {
  const [showFull, setShowFull] = useState(true);
  return (
    <div className="w-full max-h-screen  flex flex-col overflow-hidden">
      <Header setShowFull={setShowFull} />
      <div className="grow w-full h-fit flex divide-x-2 overflow-auto divide-slate-200/40">
        <Navigation showFull={showFull} />
        <div className="grow overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

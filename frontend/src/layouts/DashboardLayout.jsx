import { Outlet } from "react-router-dom";
import Sidebar from "../components/molecules/Sidebar/index.js";
import Header from "../components/molecules/Header/index.js";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
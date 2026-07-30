import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

// Shared layout: Navbar stays fixed, routed pages render below via <Outlet />.
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/Navbar/index.js";
import Footer from "../components/molecules/Footer/index.js";

function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
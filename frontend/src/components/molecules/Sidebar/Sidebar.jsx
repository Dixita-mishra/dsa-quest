import { NavLink } from "react-router-dom";
import { LayoutDashboard, Map, TrendingUp, User, Settings, LogOut } from "lucide-react";

const navItems = [
  { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  { label: "Roadmap", to: "/dashboard/roadmap", icon: Map },
  { label: "Progress", to: "/dashboard/progress", icon: TrendingUp },
  { label: "Profile", to: "/dashboard/profile", icon: User },
  { label: "Settings", to: "/dashboard/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 bg-slate-900 border-r border-slate-800 px-4 py-6">
      <div className="px-2 mb-8">
        <span className="text-lg font-semibold tracking-tight text-slate-100">DSA Quest</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive ? "bg-slate-800 text-slate-100" : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <button type="button" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 transition-colors">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="w-full border-b border-slate-800 bg-slate-950 px-6 py-5 flex items-center justify-between">
      <p className="text-base md:text-lg text-slate-100">Good Evening, Adventurer 👋</p>
      <div className="flex items-center gap-5">
        <button type="button" className="text-slate-400 hover:text-slate-100 transition-colors" aria-label="Notifications">
          <Bell size={20} />
        </button>
        <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700" aria-label="User avatar placeholder" />
      </div>
    </header>
  );
}

export default Header;
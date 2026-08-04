function StatCard({ title, value, icon, footer }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>
        {icon && <span className="text-blue-500">{icon}</span>}
      </div>

      <p className="mt-3 text-2xl font-semibold text-slate-100">{value}</p>

      {footer && <p className="mt-2 text-xs text-slate-400">{footer}</p>}
    </div>
  );
}

export default StatCard;
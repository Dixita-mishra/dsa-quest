function ActionCard({ icon, title, description, buttonText, onClick }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
      <div>
        {icon && <div className="text-blue-500 mb-4">{icon}</div>}
        <h3 className="text-base font-semibold text-slate-100">{title}</h3>
        {description && <p className="mt-2 text-sm text-slate-400">{description}</p>}
      </div>

      {buttonText && (
        <button
          type="button"
          onClick={onClick}
          className="mt-6 w-full rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-blue-600 transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default ActionCard;
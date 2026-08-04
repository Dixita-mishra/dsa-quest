function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center text-center rounded-xl border border-slate-800 bg-slate-900 px-6 py-12">
      <p className="text-base font-medium text-slate-100">{title}</p>
      {description && <p className="mt-2 text-sm text-slate-400">{description}</p>}
    </div>
  );
}

export default EmptyState;
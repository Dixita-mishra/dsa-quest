function ProgressBar({ value }) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
      <div
        className="h-full rounded-full bg-blue-500 transition-[width] duration-500 ease-out"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export default ProgressBar;
import ProgressBar from "../../atoms/ProgressBar/index.js";

function ContinueLearningCard({ world, currentTechnique, progress, buttonText, onResume }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 md:p-8 shadow-sm">
      <h2 className="text-lg md:text-xl font-semibold text-slate-100">
        Continue Your Journey
      </h2>

      <div className="mt-4 space-y-1">
        <p className="text-sm text-slate-400">
          World: <span className="text-slate-100">{world}</span>
        </p>
        <p className="text-sm text-slate-400">
          Current Technique: <span className="text-slate-100">{currentTechnique}</span>
        </p>
      </div>

      <div className="mt-5">
        <ProgressBar value={progress} />
      </div>

      {buttonText && (
        <button
          type="button"
          onClick={onResume}
          className="mt-6 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-slate-100 hover:bg-blue-600 transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default ContinueLearningCard;
export default function CareerProgress() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Career Progress
      </h2>

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm text-slate-400">
          <span>Overall Readiness</span>
          <span>62%</span>
        </div>

        <div className="h-3 rounded-full bg-slate-800">

          <div className="h-3 w-[62%] rounded-full bg-indigo-600"></div>

        </div>

        <div className="mt-8 space-y-3">

          <div className="flex justify-between">
            <span className="text-slate-400">React</span>
            <span className="text-white">80%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Node.js</span>
            <span className="text-white">45%</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Machine Learning</span>
            <span className="text-white">72%</span>
          </div>

        </div>

      </div>

    </div>
  );
}
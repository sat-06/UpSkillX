export default function ContinueLearning() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Continue Learning
      </h2>

      <div className="mt-6 space-y-5">

        <div>
          <p className="text-white">Data Structures</p>

          <div className="mt-2 h-2 rounded-full bg-slate-800">

            <div className="h-2 w-[75%] rounded-full bg-green-500"></div>

          </div>
        </div>

        <div>
          <p className="text-white">Next.js</p>

          <div className="mt-2 h-2 rounded-full bg-slate-800">

            <div className="h-2 w-[45%] rounded-full bg-indigo-500"></div>

          </div>
        </div>

        <div>
          <p className="text-white">Machine Learning</p>

          <div className="mt-2 h-2 rounded-full bg-slate-800">

            <div className="h-2 w-[60%] rounded-full bg-pink-500"></div>

          </div>
        </div>

      </div>

    </div>
  );
}
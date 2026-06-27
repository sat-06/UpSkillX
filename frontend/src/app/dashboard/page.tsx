export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">

        <aside className="w-72 h-screen border-r border-slate-800 p-6">

          <h1 className="text-3xl font-bold text-indigo-500">
            UpSkillX
          </h1>

          <nav className="mt-12 space-y-4">

            <p className="cursor-pointer hover:text-indigo-400">
              Dashboard
            </p>

            <p className="cursor-pointer hover:text-indigo-400">
              Assessment
            </p>

            <p className="cursor-pointer hover:text-indigo-400">
              Roadmap
            </p>

            <p className="cursor-pointer hover:text-indigo-400">
              Resources
            </p>

            <p className="cursor-pointer hover:text-indigo-400">
              Projects
            </p>

            <p className="cursor-pointer hover:text-indigo-400">
              Internship Readiness
            </p>

            <p className="cursor-pointer hover:text-indigo-400">
              Profile
            </p>

          </nav>

        </aside>

        <section className="flex-1 p-10">

          <h2 className="text-4xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="text-slate-400 mt-2">
            Here's your career progress.
          </p>

        </section>

      </div>
    </main>
  );
}
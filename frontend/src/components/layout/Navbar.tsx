export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">

      <h2 className="text-2xl font-bold text-white">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <input
          placeholder="Search..."
          className="rounded-lg bg-slate-800 px-4 py-2 text-white outline-none"
        />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
          S
        </div>

      </div>

    </header>
  );
}
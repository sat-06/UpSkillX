export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
          S
        </div>
      </div>
    </header>
  );
}
import Link from "next/link";

const menuItems = [
  "Dashboard",
  "Assessment",
  "Roadmap",
  "Resources",
  "Projects",
  "Readiness",
  "Profile",
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 text-white p-6">
      <h1 className="text-3xl font-bold text-indigo-500 mb-10">
        UpSkillX
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item}
            href="#"
            className="block rounded-lg px-4 py-3 hover:bg-slate-800 transition"
          >
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
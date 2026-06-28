import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Assessment", "/assessment"],
  ["Roadmap", "/roadmap"],
  ["Resources", "/resources"],
  ["Projects", "/projects"],
  ["Readiness", "/readiness"],
  ["Profile", "/profile"],
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-slate-900 border-r border-slate-800 p-6 text-white">

      <h1 className="mb-10 text-3xl font-bold text-indigo-500">
        UpSkillX
      </h1>

      <nav className="space-y-3">

        {links.map(([title, url]) => (
          <Link
            key={title}
            href={url}
            className="block rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            {title}
          </Link>
        ))}

      </nav>

    </aside>
  );
}
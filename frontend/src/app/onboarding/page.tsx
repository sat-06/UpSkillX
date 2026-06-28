"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const goals = [
  "AI/ML Engineer",
  "Data Scientist",
  "Data Analyst",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Cloud Engineer",
];

const skills = [
  "Python",
  "C++",
  "Java",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Machine Learning",
  "Deep Learning",
  "Git",
  "Docker",
];

export default function OnboardingPage() {
  const router = useRouter();

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-bold">
          Welcome to UpSkillX 🚀
        </h1>

        <p className="mt-3 text-slate-400">
          Let's personalize your career journey.
        </p>

        <div className="mt-10 space-y-8">

          <div>

            <label className="mb-3 block">
              Full Name
            </label>

            <input
              className="w-full rounded-xl bg-slate-900 border border-slate-800 p-4"
              placeholder="Enter your name"
            />

          </div>

          <div>

            <label className="mb-3 block">
              Career Goal
            </label>

            <select className="w-full rounded-xl bg-slate-900 border border-slate-800 p-4">

              {goals.map((goal) => (
                <option key={goal}>{goal}</option>
              ))}

            </select>

          </div>

          <div>

            <label className="mb-3 block">
              Upload Resume
            </label>

            <input
              type="file"
              className="w-full rounded-xl border border-slate-800 bg-slate-900 p-4"
            />

          </div>

          <div>

            <label className="mb-4 block">
              Current Skills
            </label>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (

                <button
                  key={skill}
                  type="button"
                  onClick={() => toggleSkill(skill)}
                  className={`rounded-full px-5 py-2 transition ${
                    selectedSkills.includes(skill)
                      ? "bg-indigo-600"
                      : "bg-slate-800"
                  }`}
                >
                  {skill}
                </button>

              ))}

            </div>

          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold"
          >
            Generate My AI Roadmap
          </button>

        </div>

      </div>

    </main>
  );
}
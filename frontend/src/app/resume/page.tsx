"use client";

import { useState } from "react";
import { uploadResume } from "@/services/resume";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit() {
    if (!file) return;

    try {
      setLoading(true);

      const response = await uploadResume(file, role);

      setResult(response);
    } catch (err) {
      console.log(err);
      alert("Resume Analysis Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-4xl font-bold">
        AI Resume Analyzer
      </h1>

      <p className="mt-2 text-slate-400">
        Upload your resume and receive an AI-generated career roadmap.
      </p>

      <input
        className="mt-8 block"
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files) setFile(e.target.files[0]);
        }}
      />

      <input
        className="mt-6 rounded-lg bg-slate-900 p-3 w-96"
        placeholder="Target Role (ML Engineer)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-8 rounded-lg bg-indigo-600 px-6 py-3"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div className="mt-10 rounded-xl bg-slate-900 p-6">

          <pre className="whitespace-pre-wrap text-green-400">

            {JSON.stringify(result, null, 2)}

          </pre>

        </div>
      )}

    </main>
  );
}
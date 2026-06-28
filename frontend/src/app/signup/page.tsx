"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Create Account 🚀
        </h1>

        <p className="mt-2 text-slate-400">
          Start your AI-powered career journey.
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />

          <button className="w-full rounded-xl bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700">
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-400 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
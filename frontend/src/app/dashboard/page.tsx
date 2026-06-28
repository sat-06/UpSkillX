import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

import StatsCard from "@/components/dashboard/StatsCard";
import CareerProgress from "@/components/dashboard/CareerProgress";
import AIRecommendations from "@/components/dashboard/AIRecommendations";
import ContinueLearning from "@/components/dashboard/ContinueLearning";

import {
  Award,
  BookOpen,
  FolderKanban,
  Flame,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-950">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <section className="p-8">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Your AI Career Operating System
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatsCard
              title="Readiness"
              value="62%"
              icon={Award}
            />

            <StatsCard
              title="Skills"
              value="18"
              icon={BookOpen}
            />

            <StatsCard
              title="Projects"
              value="5"
              icon={FolderKanban}
            />

            <StatsCard
              title="Streak"
              value="14 Days"
              icon={Flame}
            />

          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">

            <CareerProgress />

            <AIRecommendations />

          </div>

          <div className="mt-8">

            <ContinueLearning />

          </div>

        </section>

      </div>

    </main>
  );
}
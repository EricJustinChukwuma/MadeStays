import { Hand } from "lucide-react";
import rawData from "../../data/onboarding-data.json";
import { DashboardData } from "../../types/property";

const dashBoardData = rawData as unknown as DashboardData;

export default function WelcomeSection() {
  return (
    <section className="w-full text-left">
      <h1 className="text-3xl font-bold text-slate-900 text-left">
        Good afternoon, {dashBoardData.owner.name} 👋
      </h1>

      <p className="mt-2 max-w-2xl text-slate-600">
        Track your properties through every stage of the onboarding process,
        monitor progress, and see what needs your attention.
      </p>
    </section>
  );
}

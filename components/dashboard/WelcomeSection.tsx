import { Hand } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="w-full text-left">
      <h1 className="text-3xl font-bold text-slate-900 text-left">
        Good afternoon, Michael 👋
      </h1>

      <p className="mt-2 max-w-2xl text-slate-600">
        Track your properties through every stage of the onboarding process,
        monitor progress, and see what needs your attention.
      </p>
    </section>
  );
}
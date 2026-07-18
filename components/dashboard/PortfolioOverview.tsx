import SummaryCard from "./SummaryCard";

export default function PortfolioSummary() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <SummaryCard
        title="Properties"
        value={8}
        subtitle="Total portfolio"
      />

      <SummaryCard
        title="Live"
        value={2}
        subtitle="Currently accepting guests"
      />

      <SummaryCard
        title="In Progress"
        value={5}
        subtitle="Still onboarding"
      />

      <SummaryCard
        title="Needs Attention"
        value={1}
        subtitle="Action required"
      />
    </section>
  );
}
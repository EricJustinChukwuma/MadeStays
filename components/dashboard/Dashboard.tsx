import WelcomeSection from "./WelcomeSection";
import PortfolioOverview from "./PortfolioOverview";
import FilterBar from "./FilterBar";
import PropertyGrid from "./PropertyGrid";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50 w-full">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

        <WelcomeSection />

        <PortfolioOverview />

        <FilterBar />

        <PropertyGrid />

      </div>
    </main>
  );
}
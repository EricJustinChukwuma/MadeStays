"use client";

import { useMemo, useState } from "react";

import rawData from "../../data/onboarding-data.json";
import type { DashboardData } from "../../types/property";
import { getOverallStatus } from "../../utils/property";

import FilterBar, { type StatusFilter } from "./FilterBar";
import PortfolioOverview from "./PortfolioOverview";
import PropertyGrid from "./PropertyGrid";
import WelcomeSection from "./WelcomeSection";

const dashboardData = rawData as unknown as DashboardData;

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>("All Statuses");

  const totalSteps =
    dashboardData.onboardingStepDefinitions.length;

  const filteredProperties = useMemo(() => {
    const normalisedSearchTerm = searchTerm
      .trim()
      .toLowerCase();

    return dashboardData.properties.filter((property) => {
      const matchesSearch =
        normalisedSearchTerm === "" ||
        property.name
          .toLowerCase()
          .includes(normalisedSearchTerm) ||
        property.location
          .toLowerCase()
          .includes(normalisedSearchTerm);

      const propertyStatus = getOverallStatus(property);

      const matchesStatus =
        statusFilter === "All Statuses" ||
        propertyStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return (
    <main className="min-h-screen w-full bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <WelcomeSection />

        <PortfolioOverview />

        <FilterBar
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          onSearchChange={setSearchTerm}
          onStatusChange={setStatusFilter}
        />

        <PropertyGrid
          properties={filteredProperties}
          totalSteps={totalSteps}
        />
      </div>
    </main>
  );
}


// import WelcomeSection from "./WelcomeSection";
// import PortfolioOverview from "./PortfolioOverview";
// import FilterBar from "./FilterBar";
// import PropertyGrid from "./PropertyGrid";

// import { dashboardData } from "../../data/index";

// export default function Dashboard() {

//   const { properties, onboardingStepDefinitions } = dashboardData;

//   const filteredProperty = properties.filter(
//     (property) => 
//   )
//   return (
//     <main className="min-h-screen bg-slate-50 w-full">
//       <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

//         <WelcomeSection />

//         <PortfolioOverview />

//         <FilterBar />

//         <PropertyGrid />

//       </div>
//     </main>
//   );
// }
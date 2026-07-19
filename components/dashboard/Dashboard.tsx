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
  // Create a state to hold the current Search Bar value and Status Filter value
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>("All Statuses");

  // const totalSteps = dashboardData.onboardingStepDefinitions.length;

  // Property Filter Function to create a new array that meets the search text value or status filter value
  // Avoids recalculation when an unrelated component in the app changes.
  const filteredProperties = useMemo(() => {
    // trims the search value and converts it to lowercase to prepare it
    const normalisedSearchTerm = searchTerm.trim().toLowerCase();

    // Filters the Properties
    return dashboardData.properties.filter((property) => {
      // if the search text is an empty string, the property name, or the property location,
      const matchesSearch =
        normalisedSearchTerm === "" ||
        property.name.toLowerCase().includes(normalisedSearchTerm) ||
        property.location.toLowerCase().includes(normalisedSearchTerm);

      const propertyStatus = getOverallStatus(property);

      const matchesStatus =
        statusFilter === "All Statuses" || propertyStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  return (
    <main className="min-h-screen w-full bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <WelcomeSection />

        <PortfolioOverview properties={dashboardData.properties} />

        <FilterBar
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          onSearchChange={setSearchTerm}
          onStatusChange={setStatusFilter}
        />

        <PropertyGrid
          properties={filteredProperties}
          stepDefinitions={dashboardData.onboardingStepDefinitions}
        />
      </div>
    </main>
  );
}

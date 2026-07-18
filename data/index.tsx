// Import the raw JSON Data here
import rawData from "./onboarding-data.json";
// import the typeScript Property type from the types Property.ts
import type { DashboardData } from "@/types/property";

// Export the Data to be used in the PropertyGrid.tsx
export const dashboardData =
  rawData as unknown as DashboardData;





// import rawData from "@/data/onboarding-data.json";
// import type { DashboardData } from "@/types/property";
// import PropertyCard from "./PropertyCard";

// const dashboardData =
//   rawData as unknown as DashboardData;
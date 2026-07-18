import type { Property } from "../../types/property";

import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  totalSteps: number;
}

export default function PropertyGrid({
  properties,
  totalSteps,
}: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
        <h2 className="text-lg font-semibold text-slate-900">
          No matching properties
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Try changing your search term or selected
          status.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="properties-heading">
      <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="properties-heading"
            className="text-xl font-semibold text-slate-900"
          >
            Your properties
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track the onboarding progress of every
            property in your portfolio.
          </p>
        </div>

        <p className="text-sm font-medium text-slate-500">
          {properties.length}{" "}
          {properties.length === 1
            ? "property"
            : "properties"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            totalSteps={totalSteps}
          />
        ))}
      </div>
    </section>
  );
}




// // Import JSON data from index.ts that handles the rwa JSON data adn exports it
// import { dashboardData } from "../../data/index";
// import PropertyCard from "./PropertyCard";

// export default function PropertyGrid() {
//   // Destructure the Objects gotten from the DashBoardData imported
//   const { properties, onboardingStepDefinitions } = dashboardData;
//   // Calculate the total steps for Onboarding
//   const totalSteps = onboardingStepDefinitions.length;

//   // Checks if the length of the properties is zero
//   if (properties.length === 0) {
//     return (
//       <section className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
//         <h2 className="text-lg font-semibold text-slate-900">
//           No properties found
//         </h2>

//         <p className="mt-2 text-sm text-slate-500">
//           Properties will appear here when they are added.
//         </p>
//       </section>
//     );
//   }

//   return (
//     <section aria-labelledby="properties-heading">
//       <div className="mb-5">
//         <h2
//           id="properties-heading"
//           className="text-xl font-semibold text-slate-900"
//         >
//           Your properties
//         </h2>

//         <p className="mt-1 text-sm text-slate-500">
//           Track the onboarding progress of every property in your portfolio.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {properties.map((property) => (
//           <PropertyCard
//             key={property.id}
//             property={property}
//             totalSteps={totalSteps}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

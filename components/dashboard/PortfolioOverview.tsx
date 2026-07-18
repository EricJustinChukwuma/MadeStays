import type { Property } from "../../types/property";

import {
  getOverallStatus,
  type OverallStatus,
} from "../../utils/property";

interface PortfolioOverviewProps {
  properties: Property[];
}

export default function PortfolioOverview({
  properties,
}: PortfolioOverviewProps) {
  const statusCounts = properties.reduce<
    Record<OverallStatus, number>
  >(
    (counts, property) => {
      const status = getOverallStatus(property);

      counts[status] += 1;

      return counts;
    },
    {
      Live: 0,
      "In Progress": 0,
      "Needs Attention": 0,
      "On Hold": 0,
      "Not Started": 0,
    }
  );

  const summaryItems = [
    {
      label: "Total properties",
      value: properties.length,
    },
    {
      label: "Live",
      value: statusCounts.Live,
    },
    {
      label: "In progress",
      value: statusCounts["In Progress"],
    },
    {
      label: "Needs attention",
      value: statusCounts["Needs Attention"],
    },
    {
      label: "On hold",
      value: statusCounts["On Hold"],
    },
    {
      label: "Not started",
      value: statusCounts["Not Started"],
    },
  ];

  return (
    <section aria-labelledby="portfolio-overview-heading">
      <div className="mb-4">
        <h2
          id="portfolio-overview-heading"
          className="text-lg font-semibold text-slate-900"
        >
          Portfolio overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          A summary of your property onboarding statuses.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {summaryItems.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">
              {item.label}
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {item.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}



// import SummaryCard from "./SummaryCard";

// export default function PortfolioSummary() {
//   return (
//     <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//       <SummaryCard
//         title="Properties"
//         value={8}
//         subtitle="Total portfolio"
//       />

//       <SummaryCard
//         title="Live"
//         value={2}
//         subtitle="Currently accepting guests"
//       />

//       <SummaryCard
//         title="In Progress"
//         value={5}
//         subtitle="Still onboarding"
//       />

//       <SummaryCard
//         title="Needs Attention"
//         value={1}
//         subtitle="Action required"
//       />
//     </section>
//   );
// }
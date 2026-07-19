import { Search } from "lucide-react";

import type { OverallStatus } from "../../utils/property";

export type StatusFilter =
  | "All Statuses"
  | OverallStatus;

interface FilterBarProps {
  searchTerm: string;
  statusFilter: StatusFilter;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: StatusFilter) => void;
}

const statusOptions: StatusFilter[] = [
  "All Statuses",
  "Live",
  "In Progress",
  "Needs Attention",
  "On Hold",
  "Not Started",
];

export default function FilterBar({
  searchTerm,
  statusFilter,
  onSearchChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <section
      aria-label="Property filters"
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search input */}
        <div className="relative w-full md:max-w-md">
          <label
            htmlFor="property-search"
            className="sr-only"
          >
            Search properties
          </label>

          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          />

          <input
            id="property-search"
            type="search"
            value={searchTerm}
            onChange={(event) =>
              onSearchChange(event.target.value)
            }
            placeholder="Search by property name or location..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        {/* Status dropdown */}
        <div className="w-full md:w-48">
          <label
            htmlFor="status-filter"
            className="sr-only"
          >
            Filter by property status
          </label>

          <select
            id="status-filter"
            value={statusFilter}
            onChange={(event) =>
              onStatusChange(
                event.target.value as StatusFilter
              )
            }
            className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition hover:bg-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}




// import { Search } from "lucide-react";

// export default function FilterBar() {
//   return (
//     <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
//       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//         <div className="relative w-full md:max-w-md">
//           <Search
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
//             size={18}
//           />

//           <input
//             type="text"
//             placeholder="Search properties..."
//             className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none transition focus:border-slate-900 text-slate-600"
//           />
//         </div>

//         <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-slate-900">
//           <option>All Statuses</option>
//           <option>Live</option>
//           <option>In Progress</option>
//           <option>Action Required</option>
//           <option>Not Started</option>
//         </select>
//       </div>
//     </section>
//   );
// }

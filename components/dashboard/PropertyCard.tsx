import { BedDouble, CalendarDays, ImageIcon, MapPin } from "lucide-react";

// Import Property Type from types
import type { Property } from "../../types/property";
// import utility functions from Utils/property.ts
import {
  calculateProgress,
  formatDate,
  getOverallStatus,
} from "@/utils/property";

import StatusBadge from "../ui/StatusBadge";
import ProgressBar from "./ProgressBar";

interface PropertyCardProps {
  property: Property;
  totalSteps: number;
}

export default function PropertyCard({
  property,
  totalSteps,
}: PropertyCardProps) {
  const progress = calculateProgress(property, totalSteps);
  const status = getOverallStatus(property);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        {property.image ? (
          // The dataset uses remote Picsum images. A regular img element avoids
          // requiring remote image configuration during this sprint.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.image}
            alt={property.name}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
            <ImageIcon aria-hidden="true" className="h-8 w-8" />
            <span className="text-sm font-medium">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2
              className="line-clamp-2 text-lg font-semibold leading-6 text-slate-900"
              title={property.name}
            >
              {property.name}
            </h2>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin aria-hidden="true" className="h-4 w-4 shrink-0" />

              <span className="truncate">{property.location}</span>
            </div>
          </div>

          <StatusBadge status={status} />
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-sm text-slate-600">
          <BedDouble aria-hidden="true" className="h-4 w-4" />

          <span>
            {property.bedrooms}{" "}
            {property.bedrooms === 1 ? "bedroom" : "bedrooms"}
          </span>
        </div>

        <div className="mt-5">
          <ProgressBar progress={progress} />
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="flex items-center gap-2">
            <CalendarDays
              aria-hidden="true"
              className="h-4 w-4 text-slate-400"
            />

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Target go-live
              </p>

              <p className="text-sm font-semibold text-slate-700">
                {formatDate(property.targetGoLiveDate)}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          View details
        </button>
      </div>
    </article>
  );
}

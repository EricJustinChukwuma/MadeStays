"use client";

import { useEffect } from "react";
import {
  BedDouble,
  CalendarDays,
  MapPin,
  X,
} from "lucide-react";

// Import Types
import type {
  Property,
  StepDefinition,
  StepStatus,
} from "../../types/property";

// Import utility functions
import {
  calculateProgress,
  formatDate,
  getOverallStatus,
} from "../../utils/property";

import StatusBadge from "../ui/StatusBadge";
import ProgressBar from "./ProgressBar";

interface PropertyModalProps {
  property: Property;
  stepDefinitions: StepDefinition[];
  isOpen: boolean;
  onClose: () => void;
}

const stepStatusLabels: Record<StepStatus, string> = {
  complete: "Complete",
  in_progress: "In progress",
  action_required: "Action required",
  not_started: "Not started",
  on_hold: "On hold",
};

const stepStatusStyles: Record<StepStatus, string> = {
  complete: "bg-emerald-50 text-emerald-700",
  in_progress: "bg-amber-50 text-amber-700",
  action_required: "bg-red-50 text-red-700",
  not_started: "bg-slate-100 text-slate-600",
  on_hold: "bg-indigo-50 text-indigo-700",
};

export default function PropertyModal({
  property,
  stepDefinitions,
  isOpen,
  onClose,
}: PropertyModalProps) {
  // Handles the modal pop that's outside the scope of React State management
  useEffect(() => {
    // if is open is false stops below code from executing
    if (!isOpen) {
      return;
    }

    // Listens for a global Key Press. If user press escape, it trigers the onClose() function
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Stops the webpage from scrolling in the background while the user inetracts with the modal
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup Code cleaning the gloabl key event listener to close the modal
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const progress = calculateProgress(
    property,
    stepDefinitions.length
  );

  const overallStatus = getOverallStatus(property);

  // create a new array that sorts out which steps comes first
  const orderedStepDefinitions = [...stepDefinitions].sort(
    (firstStep, secondStep) =>
      firstStep.order - secondStep.order
  );

  // Maps through the property array steps and creates a new array with 
  // the step id as the key and the original step object as the value of that key
  const propertySteps = new Map(
    property.steps.map((step) => [step.id, step])
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-modal-title"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        {/* Modal header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white px-6 py-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h2
                id="property-modal-title"
                className="text-xl font-semibold text-slate-900"
              >
                {property.name}
              </h2>

              <StatusBadge status={overallStatus} />
            </div>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin
                aria-hidden="true"
                className="h-4 w-4"
              />

              <span>{property.location}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close property details"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-8 p-6">
          {/* Property summary */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <div className="rounded-lg bg-white p-2 shadow-sm">
                <BedDouble
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-600"
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Bedrooms
                </p>

                <p className="font-semibold text-slate-900">
                  {property.bedrooms}{" "}
                  {property.bedrooms === 1
                    ? "bedroom"
                    : "bedrooms"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <div className="rounded-lg bg-white p-2 shadow-sm">
                <CalendarDays
                  aria-hidden="true"
                  className="h-5 w-5 text-slate-600"
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Target go-live
                </p>

                <p className="font-semibold text-slate-900">
                  {formatDate(property.targetGoLiveDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Overall progress
            </h3>

            <ProgressBar progress={progress} />
          </div>

          {/* Onboarding steps */}
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Onboarding steps
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Review the current status of each onboarding
                requirement.
              </p>
            </div>

            <div className="space-y-3">
              {orderedStepDefinitions.map((definition) => {
                const propertyStep = propertySteps.get(
                  definition.id
                );

                const stepStatus: StepStatus =
                  propertyStep?.status ?? "not_started";

                return (
                  <div
                    key={definition.id}
                    className="rounded-xl border border-slate-200 p-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                          {definition.order}
                        </span>

                        <div>
                          <h4 className="font-medium text-slate-900">
                            {definition.label}
                          </h4>

                          {propertyStep?.note && (
                            <p className="mt-1 text-sm text-slate-500">
                              {propertyStep.note}
                            </p>
                          )}
                        </div>
                      </div>

                      <span
                        className={`inline-flex w-fit shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${stepStatusStyles[stepStatus]}`}
                      >
                        {stepStatusLabels[stepStatus]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="sticky bottom-0 flex justify-end border-t border-slate-200 bg-white px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
}
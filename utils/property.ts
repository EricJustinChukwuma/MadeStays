// Import Property and Step Type from Types Property.ts
import type { Property, Step } from "@/types/property";

// Create Little Helper Utility Functions
export type OverallStatus =
  | "Live"
  | "Needs Attention"
  | "On Hold"
  | "In Progress"
  | "Not Started";

// Calculates the steps needed to take for each property and converts it to percentage
export function calculateProgress(
  property: Property,
  totalSteps: number
): number {
  if (totalSteps <= 0 || property.steps.length === 0) {
    return 0;
  }

  // Filters out the steps from property where steps has a status of 'complete' 
  // and sets the completedSteps variable to the length of the filtered steps
  const completedSteps = property.steps.filter(
    (step) => step.status === "complete"
  ).length;

  // Calculates the percentage
  const percentage = Math.round((completedSteps / totalSteps) * 100);

  // Ensures that the percentage never drops below 0 or goes above 100.
  return Math.min(Math.max(percentage, 0), 100);
}

export function getCurrentStep(property: Property): Step | null {
  if (property.steps.length === 0) {
    return null;
  }

  return (
    property.steps.find((step) => step.status === "action_required") ??
    property.steps.find((step) => step.status === "on_hold") ??
    property.steps.find((step) => step.status === "in_progress") ??
    property.steps.find((step) => step.status === "not_started") ??
    null
  );
}

export function getOverallStatus(property: Property): OverallStatus {
  if (property.steps.length === 0) {
    return "Not Started";
  }

  if (property.steps.every((step) => step.status === "complete")) {
    return "Live";
  }

  if (property.steps.some((step) => step.status === "action_required")) {
    return "Needs Attention";
  }

  if (property.steps.some((step) => step.status === "on_hold")) {
    return "On Hold";
  }

  if (property.steps.some((step) => step.status === "in_progress")) {
    return "In Progress";
  }

  return "Not Started";
}

export function getStatusColor(status: OverallStatus): string {
  const styles: Record<OverallStatus, string> = {
    Live: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    "Needs Attention": "bg-red-50 text-red-700 ring-red-600/20",
    "On Hold": "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
    "In Progress": "bg-amber-50 text-amber-700 ring-amber-600/20",
    "Not Started": "bg-slate-100 text-slate-700 ring-slate-500/20",
  };

  return styles[status];
}

export function formatDate(date: string): string {
  if (!date) {
    return "No date set";
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Invalid date";
  }

  return parsedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
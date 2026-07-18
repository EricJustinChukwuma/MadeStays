import {
  getStatusColor,
  type OverallStatus,
} from "@/utils/property";

interface StatusBadgeProps {
  status: OverallStatus;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
}
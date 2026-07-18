export type StepStatus =
  | "complete"
  | "in_progress"
  | "action_required"
  | "not_started"
  | "on_hold";

export interface Step {
  id: string;
  status: StepStatus;
  note?: string;
}

export interface Property {
  id: string;
  name: string;
  location: string;
  bedrooms: number;
  image: string;
  targetGoLiveDate: string;
  steps: Step[];
}

export interface Owner {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  accountManager: string;
}

export interface StepDefinition {
  id: string;
  label: string;
  order: number;
}

export interface DashboardData {
  owner: Owner;
  onboardingStepDefinitions: StepDefinition[];
  statusLegend: Record<string, string>;
  properties: Property[];
}
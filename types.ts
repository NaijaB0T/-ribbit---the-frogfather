
export interface TokenomicItem {
  element: string;
  amount: string;
  notes: string;
}

export interface RoadmapPhase {
  title: string;
  emoji?: string;
  points: string[];
  goal: string;
}

export interface NavItem {
  name: string;
  href: string;
}

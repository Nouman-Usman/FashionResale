export interface TimelineItem {
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  color: string;
}

export interface TargetGroup {
  id: string;
  title: string;
  iconName: string;
  description: string;
  tagline: string;
  metric: string;
  metricLabel: string;
}

export interface CompetitorComparison {
  feature: string;
  poshmark: string | boolean;
  thredup: string | boolean;
  fashionResale: string | boolean;
}

export interface BidItem {
  id: string;
  title: string;
  brand: string;
  image: string;
  originalPrice: number;
  currentBid: number;
  endTime: string;
  totalBids: number;
  isCustomBid?: boolean;
}

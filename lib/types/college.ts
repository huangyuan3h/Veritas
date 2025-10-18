export interface CollegeHighlight {
  title: string;
  description: string;
}

export interface College {
  rank: number;
  name: string;
  city: string;
  country: string;
  region: string;
  founded: number;
  acceptanceRate: number;
  undergraduatePopulation: number;
  graduationRate: number;
  tuitionUSD: number;
  rankingScore: number;
  focusAreas: string[];
  summary: string;
  highlights: CollegeHighlight[];
  website: string;
}

export type FacingDirection = 'EAST' | 'WEST' | 'NORTH' | 'SOUTH' | 'CORNER';
export type PlotStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD';

export interface PlotUnit {
  number: number;
  facing: FacingDirection;
  sqYards: number;
  ratePerYard: number;
  status: PlotStatus;
  dimensions?: string;
  roadWidthFt?: number;
}

export type ProjectCategory = 
  | 'Residential Open Plots'
  | 'Villa Plots'
  | 'Open Plots'
  | 'Managed Farmland & Agro-Investment'
  | 'Theme Gated Community'
  | 'Luxury Apartments';

export type CorridorType =
  | 'Bangalore Highway (NH-44)'
  | 'Srisailam Highway / Future City'
  | 'Mumbai Highway (NH-65)'
  | 'Financial District / Kokapet'
  | 'Regional Ring Road (RRR)';

export interface ProjectApprovals {
  hmdaLp?: string;
  dtcpLp?: string;
  tsreraNo?: string;
  status: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  corridor: CorridorType;
  category: ProjectCategory;
  categoryType: 'openplots' | 'farmlands' | 'villas' | 'apartments';
  listedRate?: string;
  ratePerYard?: number;
  plotSizes: string;
  minSqYards?: number;
  maxSqYards?: number;
  scale?: string;
  unitsCount?: number;
  approvals: ProjectApprovals;
  roadWidths?: string;
  keyInfrastructure: string[];
  highlights: string[];
  description: string;
  heroImage: string;
  galleryImages: string[];
  specialAttraction?: string;
  plantations?: string;
  revenueModel?: string;
  plots: PlotUnit[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  amenities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  author: string;
  category: string;
  coverImage: string;
  content: string; // Markdown or rich HTML-like formatted text
  keyTakeaways: string[];
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}


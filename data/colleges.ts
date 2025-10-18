import type { College } from "@/lib/types/college";

export const colleges: College[] = [
  {
    rank: 1,
    name: "Aurora Institute of Technology",
    city: "Cambridge",
    country: "United States",
    region: "North America",
    founded: 1861,
    acceptanceRate: 0.075,
    undergraduatePopulation: 4600,
    graduationRate: 0.94,
    tuitionUSD: 58200,
    rankingScore: 98.6,
    focusAreas: ["Engineering", "Sciences", "Business"],
    summary:
      "Pioneering institute known for breakthrough research in robotics, climate resilience, and ethical innovation.",
    highlights: [
      {
        title: "AI & Robotics Collective",
        description:
          "Interdisciplinary labs that pair human-centered design with advanced automation to solve global challenges.",
      },
      {
        title: "Sustainable Cities Studio",
        description:
          "Students collaborate with municipalities to prototype carbon-neutral infrastructure and equitable housing models.",
      },
    ],
    website: "https://auroratech.edu",
  },
  {
    rank: 2,
    name: "Verde Global University",
    city: "Zurich",
    country: "Switzerland",
    region: "Europe",
    founded: 1855,
    acceptanceRate: 0.12,
    undergraduatePopulation: 9800,
    graduationRate: 0.91,
    tuitionUSD: 21900,
    rankingScore: 97.8,
    focusAreas: ["Sciences", "Engineering", "Social Impact"],
    summary:
      "Public research leader championing sustainable energy systems, alpine ecology, and circular economy practices.",
    highlights: [
      {
        title: "Global Hydrology Observatory",
        description:
          "Student-led satellite monitoring network tracking water security and informing UN climate policy.",
      },
      {
        title: "Impact Innovation Fellows",
        description:
          "Cross-disciplinary venture studio funding student founders tackling food security and clean energy access.",
      },
    ],
    website: "https://verdeglobal.edu",
  },
  {
    rank: 3,
    name: "Horizon Liberal Arts College",
    city: "Kyoto",
    country: "Japan",
    region: "Asia-Pacific",
    founded: 1890,
    acceptanceRate: 0.18,
    undergraduatePopulation: 7200,
    graduationRate: 0.89,
    tuitionUSD: 27400,
    rankingScore: 96.2,
    focusAreas: ["Humanities", "Arts", "Social Impact"],
    summary:
      "Cultural powerhouse weaving philosophy, arts, and civic leadership into immersive storytelling curricula.",
    highlights: [
      {
        title: "Living Museum Residency",
        description:
          "Intergenerational studio where students co-create with local artisans to preserve intangible heritage.",
      },
      {
        title: "Peace & Policy Lab",
        description:
          "Simulation-based seminars linking historical narratives with contemporary diplomacy practice.",
      },
    ],
    website: "https://horizonliberalarts.jp",
  },
  {
    rank: 4,
    name: "Atlas School of Future Health",
    city: "Toronto",
    country: "Canada",
    region: "North America",
    founded: 1924,
    acceptanceRate: 0.16,
    undergraduatePopulation: 5400,
    graduationRate: 0.92,
    tuitionUSD: 33800,
    rankingScore: 95.1,
    focusAreas: ["Sciences", "Social Impact", "Business"],
    summary:
      "Healthcare innovation campus integrating genomics, public policy, and design thinking to reimagine care systems.",
    highlights: [
      {
        title: "Community Wellness Engine",
        description:
          "Real-time health dashboard deployed across partner neighborhoods to co-create preventative care interventions.",
      },
      {
        title: "Global Bioethics Forum",
        description:
          "Annual summit led by students exploring responsible AI diagnostics and inclusive clinical research.",
      },
    ],
    website: "https://atlashealthschool.ca",
  },
  {
    rank: 5,
    name: "Nova Creative Conservatory",
    city: "Barcelona",
    country: "Spain",
    region: "Europe",
    founded: 1912,
    acceptanceRate: 0.22,
    undergraduatePopulation: 4800,
    graduationRate: 0.87,
    tuitionUSD: 25600,
    rankingScore: 94.5,
    focusAreas: ["Arts", "Humanities", "Engineering"],
    summary:
      "Transdisciplinary arts institution blending digital fabrication, performance, and narrative design.",
    highlights: [
      {
        title: "Immersive Story Lab",
        description:
          "Students craft XR experiences translating historical archives into multisensory learning journeys.",
      },
      {
        title: "Resilient Materials Studio",
        description:
          "Collaborations between dancers, architects, and engineers to prototype adaptive public spaces.",
      },
    ],
    website: "https://novacreative.es",
  },
];

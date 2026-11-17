// src/data/focusAreas.ts
// Single source of truth for Focus Areas and everything published under them.
//
// - Focus area pages read their copy and theme from `focusAreas`.
// - Every brief/report lives in `publications` with a `focusArea` slug.
//   One entry there updates: the focus area's page, the home page "Insights"
//   section (via getLatestPublications) and the full Reports library.
//
// To publish something new: add an object to the TOP of `publications`.

export type FocusArea = {
  slug: string; // matches the folder: /focus-areas/<slug>
  title: string;
  themeColor: string;
  heroImageSrc: string | null; // null = solid-colour hero
  heroDescription?: string;
  overview: string;
};

export type PublicationType =
  | 'Policy Brief'
  | 'Governance Brief'
  | 'Democracy Brief'
  | 'Climate & Energy Brief'
  | 'Migration & Mobility Brief'
  | 'Peace & Security Brief'
  | 'Economic Brief'
  | 'Report'
  | 'Case Study'
  | 'Annual Report';

export type Publication = {
  id: string; // unique, url-safe
  type: PublicationType;
  focusArea: FocusArea['slug'];
  title: string;
  summary: string;
  publishedAt: string; // 'YYYY-MM' or 'YYYY-MM-DD'
  author: string;
  coverSrc: string; // e.g. '/images/policy-briefs/<name>.jpg'
  pdfHref: string; // e.g. '/uploads/<focus-area>/<file>.pdf'
};

export const focusAreas: FocusArea[] = [
  {
    slug: 'democracy-governance',
    title: 'Democracy, Governance & Civic Innovation',
    themeColor: '#6CAED9',
    heroImageSrc: null,
    heroDescription:
      'Pioneering solutions for accountable governance and enhanced civic engagement.',
    overview: `We investigate models of accountable governance and democratic renewal, from electoral integrity to decentralization reforms. By mapping institutional bottlenecks and citizen-state trust gaps, we identify opportunities for civic-tech solutions—such as digital feedback platforms and participatory budgeting tools—that deepen public participation. Our policy briefs and workshops support lawmakers and grassroots organizations in co-creating transparent, rights-based frameworks that strengthen institutions and uphold the rule of law.`,
  },
  {
    slug: 'economic-systems',
    title: 'Economic Systems, Equity & Inclusive Development',
    themeColor: '#E1B07E',
    heroImageSrc: '/images/focus-areas/economic-systems.jpg',
    heroDescription:
      'Examining how economic policies can drive equitable growth and reduce disparities.',
    overview: `This focus area examines how economic policies can drive equitable growth and reduce disparities. From tax justice and social protection schemes to value chain analyses in agriculture and industry, we assess which interventions most effectively uplift marginalized communities. Through mixed methods research and stakeholder convenings, we chart pathways for SMEs, cooperatives, and public private partnerships to foster inclusive markets—ensuring that economic expansion benefits all segments of society.`,
  },
  {
    slug: 'migration-human-rights',
    title: 'Migration, Mobility & Human Rights',
    themeColor: '#4682B4',
    heroImageSrc: '/images/focus-areas/migration-human-rights.jpg',
    heroDescription:
      'Exploring the full spectrum of human mobility through a rights-based lens.',
    overview: `We explore the full spectrum of human mobility—from internal displacement and labour migration to refugee protection—through a rights-based lens. Our research tracks migration drivers, evaluates border-management frameworks, and assesses the socio-economic impacts of diasporas. In partnership with advocacy groups, we craft policy recommendations that safeguard migrants' dignity, facilitate safe pathways, and strengthen regional cooperation mechanisms for orderly, humane mobility.`,
  },
  {
    slug: 'peace-security',
    title: 'Peace & Security',
    themeColor: '#4BA3A0',
    heroImageSrc: '/images/focus-areas/peace-security.jpg',
    heroDescription:
      'Analyzing the root causes and dynamics of conflict, with attention to youthful drivers of change.',
    overview: `In this area, we analyze the root causes and evolving dynamics of conflict across Africa and beyond, with special attention to youthful drivers of change. Our work spans early warning systems, community-led peacebuilding initiatives, and evaluations of disarmament and reintegration programs. We partner with local actors to design inclusive dialogues that bring together government, civil society, and marginalized groups, ensuring that policy responses bolster resilience and prevent relapse into violence.`,
  },
  {
    slug: 'sustainable-energy',
    title: 'Sustainable Energy & Climate Resilience',
    themeColor: '#7BB661',
    heroImageSrc: '/images/focus-areas/sustainable-energy.jpg',
    heroDescription:
      'Our work here centers on the intersection of climate justice and energy transitions.',
    overview: `Our work here centers on the intersection of climate justice and energy transitions. We evaluate policies for scaling renewables in off-grid and peri-urban contexts, and co-develop adaptation strategies with communities facing climate shocks. By integrating gender-sensitive analyses and indigenous knowledge, we aim to ensure that resilience planning is both equitable and grounded in local realities. Outputs include toolkits for community-led adaptation and policy roadmaps for just energy transitions.`,
  },
];

// Newest first (the helpers below also sort by publishedAt).
export const publications: Publication[] = [
  {
    id: 'kenya-opens-doors-migration-mobility-brief-2026-11',
    type: 'Migration & Mobility Brief',
    focusArea: 'migration-human-rights',
    title: 'Kenya Opens Its Doors, but Protection Lags Behind',
    summary: `Kenya hosted 879,452 refugees and asylum-seekers in September 2026. It has adopted the Shirika Plan to turn its camps into municipalities, removed visa requirements for most African visitors and signed a labour agreement with Saudi Arabia. But employment among refugees in the camps has fallen from 13% to 7% as aid has been cut, and growth in remittances has slowed sharply. Media reports put the number of Kenyan workers who died in Saudi Arabia over five years at 274. This brief brings together the latest data on refugees, labour migration, remittances and climate displacement, in the context of IOM’s World Migration Report 2026, and sets out practical next steps.`,
    publishedAt: '2026-11',
    author: 'Nala Center',
    coverSrc: '/images/migration-mobility-briefs/kenya-migration-mobility-brief-cover.jpg',
    pdfHref:
      '/uploads/migration-human-rights/Nala-Center-Migration-Mobility-Brief-Kenya-2026.pdf',
  },
  {
    id: 'kenya-clean-power-climate-energy-brief-2026-11',
    type: 'Climate & Energy Brief',
    focusArea: 'sustainable-energy',
    title: 'Kenya’s Clean Power Lead Meets a Harsher Climate',
    summary: `Electricity access in Kenya rose from 19% of the population in 2010 to 77% in 2024, and almost nine-tenths of its power comes from renewable sources. Yet access has barely moved since 2021. About 13 million Kenyans still have no electricity, and 38 million cook with firewood, charcoal or kerosene. Meanwhile, 2024 was Kenya’s hottest year on record, and crops failed in parts of the arid and semi-arid lands in 2025. This brief draws on the 2026 Tracking SDG7 report and the State of the Climate in Kenya 2025. It shows where progress has slowed and suggests what can be done before the late-2026 rains.`,
    publishedAt: '2026-11',
    author: 'Nala Center',
    coverSrc: '/images/climate-energy-briefs/kenya-climate-energy-brief-cover.jpg',
    pdfHref:
      '/uploads/sustainable-energy/Nala-Center-Climate-Energy-Brief-Kenya-2026.pdf',
  },
  {
    id: 'kenya-elections-civic-freedoms-democracy-brief-2026-11',
    type: 'Democracy Brief',
    focusArea: 'democracy-governance',
    title: 'Kenya’s Elections Improve as Civic Freedoms Narrow',
    summary: `Kenya scores 62.4 in Participation, Rights & Inclusion in the 2026 Ibrahim Index of African Governance and ranks 13th in Africa. The Index shows two trends: Kenya now ranks 9th for Democratic Elections, after gaining 4.8 points while the African average fell by the same amount. Women’s Equality has risen by 9.6 points. At the same time, Freedom of Association & Assembly has fallen to 25.0 and Media Freedom has lost 12.9 points. Since 2021, 17 of Kenya’s 24 indicators in this category have lost ground. This brief sets out the evidence and suggests practical steps to protect democratic freedoms during the election period.`,
    publishedAt: '2026-11',
    author: 'Nala Center',
    coverSrc: '/images/democracy-briefs/kenya-democracy-brief-cover.jpg',
    pdfHref:
      '/uploads/democracy-governance/Nala-Center-Democracy-Brief-Kenya-2026.pdf',
  },
  {
    id: 'kenya-rule-of-law-peace-security-brief-2026-11',
    type: 'Peace & Security Brief',
    focusArea: 'peace-security',
    title: 'Kenya’s Rule of Law Holds as Security and Integrity Weaken',
    summary: `Kenya scores 54.0 in Security & Rule of Law in the 2026 Ibrahim Index of African Governance and ranks 21st in Africa, well below its 10th place overall. The decline is concentrated in physical security and corruption: Absence of Violence against Civilians has fallen by 20.6 points. Public Procurement Procedures have fallen by 36.4 points, Kenya’s largest drop on any indicator. The justice system is more mixed: judicial processes have improved, but Impartiality of the Judicial System has fallen by 19.1 points. Kenya ranks 4th in Africa for anti-corruption mechanisms but 27th for Anti-Corruption overall. This brief sets out the evidence and suggests practical steps ahead of the 2027 general election.`,
    publishedAt: '2026-11',
    author: 'Nala Center',
    coverSrc: '/images/peace-security-briefs/kenya-peace-security-brief-cover.jpg',
    pdfHref:
      '/uploads/peace-security/Nala-Center-Peace-Security-Brief-Kenya-2026.pdf',
  },
  {
    id: 'kenya-ibrahim-index-governance-brief-2026-11',
    type: 'Governance Brief',
    focusArea: 'democracy-governance',
    title: 'Kenya Stays in Africa’s Top Ten as Security and Trust Slip',
    summary: `Kenya scores 61.0 out of 100 in the 2026 Ibrahim Index of African Governance. It keeps its place in Africa’s top ten and leads the East African Community. Most of its progress comes from infrastructure, rural finance, business conditions and public administration, and it has made strong gains in women’s equality and in access to water and sanitation. But its Security & Rule of Law score has fallen by 4.2 points since 2016, and it ranks 41st in Africa for Security & Safety. Citizens’ views of health services, the rule of law and accountability have also dropped sharply. This brief sets out the evidence, compares Kenya with its neighbours and suggests steps to protect the gains ahead of the 2027 election.`,
    publishedAt: '2026-11',
    author: 'Nala Center',
    coverSrc: '/images/governance-briefs/kenya-governance-brief-cover.jpg',
    pdfHref:
      '/uploads/democracy-governance/Nala-Center-Governance-Brief-Kenya-2026.pdf',
  },
  {
    id: 'kenya-growth-governance-economic-brief-2026-11',
    type: 'Economic Brief',
    focusArea: 'economic-systems',
    title: 'Kenya’s Growth Has a Governance Problem',
    summary: `Kenya’s economy grew by 5.2% in the first half of 2026, yet most new jobs are informal and the budget deficit reached 6.8% of GDP against a target of 4.7%. In this economic brief, Nala Center reviews the World Bank’s November 2026 Kenya Economic Update, which identifies corruption as the main constraint on faster growth and better jobs. The brief sets out the evidence in plain language, explains what it means for public finances, businesses, and young people, and proposes practical next steps that build on reforms already under way.`,
    publishedAt: '2026-11',
    author: 'Nala Center',
    coverSrc: '/images/economic-briefs/kenya-growth-governance-cover.jpg',
    pdfHref:
      '/uploads/economic-systems/Nala-Center-Economic-Brief-Kenya-November2026.pdf',
  },
  {
    id: 'kenya-peace-security-diplomacy-policy-brief-2026-08',
    type: 'Policy Brief',
    focusArea: 'peace-security',
    title: "Kenya's Peace and Security Diplomacy: Gains and Gaps",
    summary: `Informed by a national youth dialogue, this brief assesses Kenya's peace and security diplomacy against the commitments of Sessional Paper No. 1 of 2025, examining its record in Sudan, South Sudan, the eastern DRC, Somalia and Haiti. It finds that Kenya's challenge is not a shortage of diplomatic assets but a shortage of institutional machinery to convert them into durable outcomes, and recommends a permanent mediation support unit, transparent intervention criteria, and a national action plan on youth, peace and security.`,
    publishedAt: '2026-08',
    author: 'Youth in Governance and Global Affairs, Nala Center & MuemAction Post',
    coverSrc: '/images/policy-briefs/kenya-peace-security-diplomacy.jpg',
    pdfHref: '/uploads/peace-security/Nala-Center-Policy-Brief-003.pdf',
  },
  {
    id: 'harnessing-kenya-france-relations-policy-brief-2026-06',
    type: 'Policy Brief',
    focusArea: 'democracy-governance',
    title: 'Harnessing Kenya-France Relations in a Shifting Global Order',
    summary: `Following the 2026 Africa Forward Summit, this policy brief evaluates Kenya's strategic alignment with France across maritime security, economic transformation, and global diplomacy. It details actionable strategies for moving beyond operational exposure to technical internalization, safeguarding fiscal sovereignty through equity-based frameworks, and anchoring bilateral ties within African-led institutions.`,
    publishedAt: '2026-06',
    author: 'Getrude Maina',
    coverSrc: '/images/policy-briefs/democracy-governance-policy-brief.jpg',
    pdfHref: '/uploads/democracy-governance/Nala-Center-Policy-Brief-002.pdf',
  },
  {
    id: 'paralysis-in-peacekeeping-policy-brief-2026-01',
    type: 'Policy Brief',
    focusArea: 'peace-security',
    title: "Paralysis in Peacekeeping: The African Union's Mediation Challenges in Sudan",
    summary: `This policy brief highlights the urgent need for a coordinated African response to Sudan's escalating war, which has exposed the African Union's institutional constraints and declining credibility as a peace broker.`,
    publishedAt: '2026-01',
    author: 'Getrude Maina',
    coverSrc: '/images/policy-briefs/paralysis-in-peacekeeping.jpg',
    pdfHref: '/uploads/peace-security/Nala-Center-Policy-Brief-001.pdf',
  },
];

// ---------- Helpers (pages should use these instead of hardcoded lists) ----------

export function getFocusArea(slug: string): FocusArea | undefined {
  return focusAreas.find((f) => f.slug === slug);
}

/** All publications, newest first. */
export function getAllPublications(): Publication[] {
  return [...publications].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
}

/** Publications for one focus area, newest first. */
export function getPublicationsByFocusArea(slug: string): Publication[] {
  return getAllPublications().filter((p) => p.focusArea === slug);
}

/** Newest `count` publications across all focus areas (home page Insights). */
export function getLatestPublications(count: number): Publication[] {
  return getAllPublications().slice(0, count);
}

/** 'YYYY-MM' or 'YYYY-MM-DD' -> 'November 2026' */
export function formatPublicationDate(publishedAt: string): string {
  const d = new Date(publishedAt.length === 7 ? `${publishedAt}-01` : publishedAt);
  return d.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
// src/data/advisoryBoard.ts
// Single source of truth for Advisory Board members.
// The listing page and the [slug] detail page both read from this array,
// so adding a member here updates both. Add new members to the END of the array.

export type AdvisoryBoardMember = {
  name: string;
  designation: string;
  imageSrc: string; // e.g. '/images/who-we-are/jane-doe.png'
  slug: string; // used in the URL: /who-we-are/advisory-board/<slug>
  bio: string; // paragraphs separated by a blank line
  socials?: {
    linkedin?: string;
    x?: string;
    instagram?: string;
  };
};

export const advisoryBoardMembers: AdvisoryBoardMember[] = [
  {
    name: 'Andrew J. Franklin, Former US Marine',
    designation: 'Peace and Security',
    imageSrc: '/images/who-we-are/Andrew-Franklin.png',
    slug: 'andrew-franklin',
    bio: `Andrew J. Franklin is a seasoned security and risk management professional with over four decades of extensive experience in Sub-Saharan Africa. His career spans logistics, political, legal, economic, military, and paramilitary issues, with specialized expertise in counterinsurgency and crisis management.

A former U.S. Marine Corps Commissioned Officer, Andrew served actively and in reserve for 22 years, retiring at the rank of Major. He holds a Juris Doctor (J.D.) in International Law and Legal Studies from New York Law School and has built a strong track record as a Managing Director in the security and investigations industry.

Beyond his operational and advisory roles, Andrew is widely recognized as a writer, security consultant, political analyst, and media commentator on foreign and security policy. His ability to navigate complex security landscapes and provide nuanced analysis continues to shape dialogue on governance, stability, and security in Africa.`,
    socials: {
      linkedin: '#',
      x: '#',
      instagram: '#',
    },
  },
  {
    name: 'Dr. Emily Okuto',
    designation: 'Peace and Security',
    imageSrc: '/images/who-we-are/emily-okuto.jpg',
    slug: 'emily-okuto',
    bio: `Dr. Emily Okuto is a researcher and educator whose work focuses on peace, conflict and security in Africa. She serves as a Senior Researcher in the Peace and Security Research Department at the International Peace Support Training Centre (IPSTC), Kenya, contributing to applied research, curriculum development and policy engagement. Her interests include peace operations, gender, women’s leadership and emerging security challenges.

Previously a lecturer at Africa Nazarene University, Emily brings experience in academic teaching, research and peacebuilding training. She has contributed to international policy discussions on women, peace and security, including the future of United Nations–African Union peace operations and the influence of gender norms in peacekeeping settings.

Beyond her research and teaching roles, Emily contributes to scholarly publishing through her editorial work with the Africa Amani Journal. Her work connects research evidence with training, policy and practice. As a member of the Nala Center Advisory Board, she brings this experience to support the Center’s research agenda, policy engagement and institutional development.`,
    socials: {},
  },
];
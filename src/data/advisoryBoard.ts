// src/data/advisoryBoard.ts
// Single source of truth for Advisory Board members.
// The listing page and the [slug] detail page both read from this array,
// so adding a member here updates both. Add new members to the END of the array.

export type AdvisoryBoardMember = {
  name: string;
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
    imageSrc: '/images/who-we-are/emily-okuto.jpg',
    slug: 'emily-okuto',
    bio: `Dr. Emily Okuto is a researcher and educator whose work focuses on peace, conflict and security in Africa. She serves as a Senior Researcher in the Peace and Security Research Department at the International Peace Support Training Centre (IPSTC), Kenya, contributing to applied research, curriculum development and policy engagement. Her interests include peace operations, gender, women’s leadership and emerging security challenges.

Previously a lecturer at Africa Nazarene University, Emily brings experience in academic teaching, research and peacebuilding training. She has contributed to international policy discussions on women, peace and security, including the future of United Nations–African Union peace operations and the influence of gender norms in peacekeeping settings.

Beyond her research and teaching roles, Emily contributes to scholarly publishing through her editorial work with the Africa Amani Journal. Her work connects research evidence with training, policy and practice. As a member of the Nala Center Advisory Board, she brings this experience to support the Center’s research agenda, policy engagement and institutional development.`,
    socials: {},
  },
  {
    name: 'Prof. Moses Obimbo Madadi',
    imageSrc: '/images/who-we-are/moses-obimbo.jpg',
    slug: 'moses-obimbo',
    bio: `Prof. Moses Obimbo Madadi is a Kenyan clinician-scientist and women’s health advocate. He is Professor and Chair of the Department of Human Anatomy and Medical Physiology at the University of Nairobi, practises as an obstetrician and gynaecologist at Kenyatta National Hospital, and serves as Honorary Secretary of the Kenya Obstetrical and Gynaecological Society and Editor-in-Chief of the Journal of Obstetrics and Gynaecology for Eastern and Central Africa. He holds a PhD in Human Anatomy from the University of Nairobi and completed postdoctoral training at the University of California, San Francisco. In 2021 he became one of fourteen African scientists awarded the Gates Foundation-funded Calestous Juma Science Leadership Fellowship, which supports his research on the vaginal microbiome and pregnancy outcomes.

He leads the End Postpartum Haemorrhage Initiative and its “Run for Her” campaign, which began in October 2024 with more than 1,500 participants. By its third edition on 27 September 2026, it had grown to about 50,000 runners in Nairobi and 25 other counties, with participants from about 19 countries, and it collected 3,350 units of blood at its finish lines.

He was a keynote speaker at the 2025 FIGO World Congress, and in 2024 New African Magazine named him one of the 100 Most Influential Africans. His other honours include the University of Nairobi’s 2019 award for outstanding research, supervision and scholarly record among preclinical departments, an honourable mention for the John J. Sciarra IJGO Prize Paper Award in 2010, and an International Mentored Scientist Award in HIV/AIDS from UCSF. He has published more than 90 journal articles and mentors master’s and doctoral researchers.`,
    socials: {},
  },
];
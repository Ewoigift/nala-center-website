// src/data/associateFellows.ts
// Single source of truth for Associate Fellows.
// The listing page and the [slug] detail page both read from this array,
// so adding a fellow here updates both. Add new fellows to the END of the array.

export type AssociateFellow = {
  name: string;
  designation: string;
  imageSrc: string; // e.g. '/images/team/jane-doe.jpg'
  slug: string; // used in the URL: /who-we-are/associate-fellows/<slug>
  bio: string; // paragraphs separated by a blank line
  socials?: {
    email?: string;
    linkedin?: string;
    x?: string;
    bluesky?: string;
  };
};

export const associateFellows: AssociateFellow[] = [
  {
    name: 'Isaac Mureithi',
    designation: 'Climate Policy Expert',
    imageSrc: '/images/team/isaac-mureithi.jpg',
    slug: 'isaac-mureithi',
    bio: `Isaac is an Oppenheimer Impact Scholar at the University of Exeter and a Research Fellow at the African Wildlife Foundation, driving research on conservation governance and pastoralism’s sedentarisation in Eastern Africa. As an emerging leader in sustainable development, he leverages his background in BSc Actuarial Science and MSc Conservation & Biodiversity to design resilient solutions by modelling complex socio-ecological systems. His hands-on experience in asset management, climate policy and disaster risk financing is amplified by his roles within the LDYC, CYMG, GYBN & KDMECC, championing inclusive, youth-led policy development.`,
    socials: {
      email: 'mailto:imnduta1@gmail.com',
      linkedin: 'https://linkedin.com/in/isaacmureithi-ismurn',
      x: 'https://x.com/mureithiin',
      bluesky: 'https://bsky.app/profile/ismurn.bsky.social',
    },
  },
  {
    name: 'Rahma Oda',
    designation: 'Health Policy and Systems Expert',
    imageSrc: '/images/team/Rahma-Oda.png',
    slug: 'rahma-oda',
    bio: 'Rahma Oda is a health researcher with interest in narrative medicine. She has experience working in governance, peacebuilding, climate change, education, and emergency response programming across Africa. Much of her work has focused on women and vulnerable populations in the coastal and northern regions of Kenya. Rahma is also a content writer at The New Global Order, where her writings help counter misinformation about the African landscape. Currently, she is conducting research on women’s stories and their experiences in accessing the right to healthcare, leveraging her background in English Literatue(B.A. from Pwani University).',
    socials: {
      email: '#',
      linkedin:
        'https://www.linkedin.com/in/rahma-oda-04583b233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      x: 'https://x.com/RahmaOda?t=dImGk3Su5rraGHL8QVEVgQ&s=09',
    },
  },
  {
    name: 'Rayner Sakari',
    designation: 'Peace, Security and Governance Expert',
    imageSrc: '/images/team/rayner-sakari.jpg',
    slug: 'rayner-sakari',
    bio: `Rayner Sakari's work explores the critical intersections of peace, security, democracy, and governance. He holds a B.A. in International Relations and Diplomacy and has practical experience as a Program Officer with the International Centre for Peace, Human Rights and Development in Africa, where he supported initiatives to strengthen institutional frameworks and empower communities. His research focuses on how governance systems can promote stability and build resilience against evolving challenges. Committed to bridging theory and practice, Rayner develops actionable analysis to provide decision-makers with insights that inform practical, sustainable solutions.`,
    socials: {},
  },

  {
    name: 'Salma Kadry',
    designation: 'Climate, Peace, and Security',
    imageSrc: '/images/team/salma-kadry.png',
    slug: 'salma-kadry',
    bio: `Salma Kadry is a Climate, Peace, and Security Specialist at CGIAR, where she leads work at the nexus of climate change, food–land–water systems, and peace and security across the Middle East and North Africa (MENA) region. With nearly a decade of experience, Salma specializes in qualitative research, capacity development, and project management focusing on climate-resilient livelihoods, gender, and migration.

Before joining CGIAR, she was the Inaugural Officer of the Climate, Peace and Development Program at Egypt’s Cairo International Center for Conflict Resolution, Peacekeeping and Peacebuilding (CCCPA), where she contributed to the COP27 Presidency initiative “Climate Responses for Sustaining Peace.” Recognized as a regional thought leader, Salma became the first Arab and CGIAR scientist to brief the United Nations Security Council on climate, peace, and security in 2023. She holds an MA in Global Studies (summa cum laude) from Ghent University, Belgium, and a BA in Political Science and Multimedia Journalism from the American University in Cairo.`,
    socials: {},
  },

  {
    name: 'Getrude Wangui Maina',
    designation: 'Policy, Diplomacy, and Sustainable Development',
    imageSrc: '/images/team/getrude-maina.jpg',
    slug: 'getrude-maina',
    bio: `Getrude Wangui Maina is a proactive and adaptable professional with a strong foundation in operations, governance, and research. She holds a Bachelor of Science in Disaster Management and International Diplomacy from Masinde Muliro University of Science and Technology and as developed a diverse portfolio across emergency response, legal administration, and policy analysis

With over two years of professional experience, Getrude has demonstrated expertise in data and information management, process improvement, and project coordination. Her experience as a Legal Secretary at PROW & Co. Advocates and previously as a Legal Administrative Assistant has refined her capabilities in managing sensitive documentation, stakeholder communication, and organizational efficiency — improving information systems and compliance processes across multiple projects.

Her earlier work in disaster management and ongoing engagement in AI-driven legal aid volunteer initiatives underscore her commitment to impactful, community-centered solutions. Certified through the ALX Virtual Assistant Program and trained in Data Analytics, Getrude brings an analytical yet pragmatic approach to problem-solving, operational support, and governance.

Passionate about the intersection of policy, diplomacy, and sustainable development, she aspires to contribute to initiatives that strengthen governance systems, enhance institutional effectiveness, and promote inclusive growth across Africa.`,
    socials: {},
  },

  {
    name: 'Jessica Johansen',
    designation: 'Sustainability, Environment and Development',
    imageSrc: '/images/team/jess-johansen.png',
    slug: 'jessica-johansen',
    bio: `Jessica Johansen is a UK based associate fellow passionate about the capacity of environmental psychology to shift norms and strengthen social and economic policy and behaviour in multi-scale policy and governance towards just and transdisciplinary global climate action. As an emerging professional in the field, Jessica's values align with and advocate for Nala Centres commitment to social justice, regional peace and climate resilience.

Jessica holds a BSc in Psychology and an MSc in Environment and Development from the University of Leeds, where she was awarded the Environment and Development prize for the highest achieving student. To support her commitment to just climate action Jessica has undergone multiple menteeship schemes and is currently working towards publishing her research paper on the potential of using participatory approaches to authentically bring rural voices into policy arenas. 

Jessica currently works as research assistant on the Civic Voices for Just Rural Transition project, partnering with Clim-eat and The University of Leeds, and supported by the UK Foreign, Commonwealth and Development Office. 
`,
    socials: {},
  },
  {
    name: 'Dr. Stanley Kipsang',
    designation: 'Human Resource Management Expert',
    imageSrc: '/images/team/stanley-kipsang.jpg',
    slug: 'stanley-kipsang',
    bio: `Dr. Stanley Kipsang is a Senior Lecturer at Moi University's School of Business and Economics, specializing in Human Resource Management. With a PhD and Master's in Human Resource Development from Moi University, he has extensive experience in teaching, research, and academic leadership. Currently, he serves as the Departmental Programme Leader for BSc. in Human Resource Management and Overall Coordinator for Postgraduate Programmes. Dr. Kipsang has supervised numerous undergraduate, master's, and PhD students, authored a book, Mastering the HRM Cycle, and published over 20 academic journal articles. He holds professional certifications in Google Data Analytics, Microsoft Power BI, and People Analytics from Wharton. An active member of the Institute of Human Resource Management (Kenya), he also engages in consultancy, community service, and research funded by organizations like the United States Institute of Peace. Dr. Kipsang is fluent in English and Kiswahili, with interests in research, reading and environmental conservation.`,
    socials: {},
  },
  {
    name: 'Mohammed ElDesouky',
    designation: 'Social Policy Specialist',
    imageSrc: '/images/team/mohammed-eldesouky.jpg',
    slug: 'mohammed-eldesouky',
    bio: `Mohammed ElDesouky is an applied economist with over nine years of international experience across Europe, the Middle East, Africa, and Asia. He has worked with institutions including the World Bank, UNICEF, and ILO, supporting research, policy analysis, evaluation, and advisory work. Since joining the World Bank in 2021, he has worked across multiple development practices and regions and currently serves as a Social Policy Specialist within the MENA, Afghanistan, and Pakistan unit. His interests include evidence-informed policymaking, organizational learning, knowledge management, artificial intelligence for public-good applications, poverty and inequality, impact evaluation, sustainable development, and social protection for climate and economic shock resilience.`,
    socials: {},
  },
  {
    name: 'Natalia Tsamalashvili',
    designation: 'African and Middle Eastern Studies Researcher',
    imageSrc: '/images/team/natalia-tsamalashvili.jpg',
    slug: 'natalia-tsamalashvili',
    bio: `Natalia Tsamalashvili is a researcher specialising in African and Middle Eastern studies, with interests in Red Sea geopolitics, governance, conflict dynamics, and international security. She holds an Erasmus Mundus Joint Master’s degree in European Interdisciplinary Master African Studies (EIMAS) and a Master’s degree in Oriental Studies (Arabic Studies) from Tbilisi State University. Her international experience includes research internships at the HORN International Institute for Strategic Studies in Nairobi and Concordis International, and she is currently an intern with UN-Habitat in Nairobi. She is also a Junior Fellow at MENA Lab, further developing her research on regional geopolitics.`,
    socials: {},
  },
  {
    name: 'Hanna Awoke Telila',
    designation: 'Development Economics and Human Resources Expert',
    imageSrc: '/images/team/hanna-telila.jpg',
    slug: 'hanna-telila',
    bio: `Hanna Awoke Telila holds a Master’s in Development Economics and a Bachelor’s in Economics, both from Unity University. She spent more than four years at IOM Ethiopia, growing from HR Intern to HR Associate and working on US Government-funded programmes, including USAID. She later served as an economic affairs intern with UNCTAD at ECA. Hanna is currently Senior Human Resources Officer at CoffeeNet PLC in Addis Ababa, responsible for HR for over 60 staff alongside procurement, logistics, and asset management.`,
    socials: {},
  },
  {
    name: 'Neque Alcino António João Francisco',
    designation: 'Human Rights, Education and Indigenous Knowledge Researcher',
    imageSrc: '/images/team/neque-francisco.jpg',
    slug: 'neque-francisco',
    bio: `Neque Alcino António João Francisco is a Mozambican researcher, multilingual translator, and science communicator with a background in Educational Psychology. His work focuses on human rights, education, African studies, indigenous knowledge systems, mental health, and digital inclusion. He has contributed to research involving displaced communities in northern Mozambique and explores the intersections of local knowledge, cultural identity, and social development. As a CODESRIA/AFRIAK Research Fellow, he investigates how indigenous knowledge systems shape community experiences and responses to social challenges. He is also the founder of Africanidade Studio, a platform promoting African identity, journalism, science, and storytelling.`,
    socials: {},
  },
  {
    name: 'Jessica France',
    designation: 'Development Economics Expert',
    imageSrc: '/images/team/jessica-france.jpg',
    slug: 'jessica-france',
    bio: `Jessica France is a Ghanaian development economist who recently completed her Master in Public Administration in International Development (MPA/ID) at Harvard Kennedy School (HKS). Her research has explored social protection, economic opportunity, and the challenges facing women-led businesses in Ghana. She has worked in research, policy consulting, climate finance, and development finance, bringing together quantitative analysis and an understanding of the policy decisions that shape people’s lives. She cares deeply about Africa’s development and hopes to contribute to solutions that respond to the realities people face and create opportunities for communities to thrive.`,
    socials: {},
  },
  {
    name: 'Dr. Andile Sokani',
    designation: 'Sociology and Gender Studies Expert',
    imageSrc: '/images/team/andile-sokani.jpg',
    slug: 'andile-sokani',
    bio: `Dr. Andile Sokani is a Lecturer in Sociology and Honours Programme Coordinator at the University of Mpumalanga, South Africa. He holds a PhD in Sociology from the University of Fort Hare and has over ten years of experience in higher education, research and academic leadership. He is the author of two books published by IGI Global on the feminisation of poverty, women’s livelihoods, and land rights in the Global South. His research interests include gender, governance, political sociology, public health, and education.`,
    socials: {},
  },
  {
    name: 'Kareem Abdulrasaq',
    designation: 'Political Economy and Development Policy Researcher',
    imageSrc: '/images/team/kareem-abdulrasaq.jpg',
    slug: 'kareem-abdulrasaq',
    bio: `Kareem Abdulrasaq is a Nigerian policy researcher and PhD candidate in Political Economy and Development Studies at Nasarawa State University. With eight years of experience in development research, his work spans poverty, social protection, conflict, governance, public finance and AI governance. He has contributed to peer-reviewed publications and policy research on development challenges in Nigeria. Kareem is an Agora Policy Writing Fellow, a Peace Promotion Fellow with Equal Access International, and an alumnus of the African Presidential Leadership Programme. He holds a master's degree in History from the University of Ilorin.`,
    socials: {},
  },
  {
    name: 'Bello Muhammad Abdullahi',
    designation: 'Macroeconomics and Development Economist',
    imageSrc: '/images/team/bello-abdullahi.jpg',
    slug: 'bello-abdullahi',
    bio: `Bello Muhammad Abdullahi is an economist and a Doctoral student at Lancaster University with research interests in macroeconomics and economic development. He holds a first-class bachelor’s degree in Economics and Development Studies from the Federal University of Kashere and an MSc in Applied Economics with distinction from the University of Strathclyde. Previously, he worked with the Centre for the Study of the Economies of Africa (CSEA), contributing to macroeconomic monitoring and policy-oriented research in Africa. His work is focused on generating evidence-based insights to address development challenges and promote inclusive economic growth across Africa.`,
    socials: {},
  },
  {
    name: 'Hossamaldeen Ibrahim',
    designation: 'Governance, Conflict and Security Analyst',
    imageSrc: '/images/team/hossamaldeen-ibrahim.jpg',
    slug: 'hossamaldeen-ibrahim',
    bio: `Hossamaldeen Ibrahim is a political analyst specialising in governance, political violence, and security dynamics in Sudan, the Horn of Africa, and the Middle East. He currently serves as Africa Analyst at the Bloomsbury Intelligence and Security Institute (BISI), producing policy briefs and early-warning assessments. Previously a Research Fellow at the International Council on Human Rights, Peace and Politics, he has also worked with the European Union Delegation to Sudan and the University of Khartoum. His research focuses on armed actors, war economies, and the role of regional and international actors in conflict. He holds an Honours degree in Economics, Political Science and International Relations and is fluent in Arabic and English.`,
    socials: {},
  },
  {
    name: 'Benjamin Onyatta',
    designation: 'Human Rights, Governance and Peace Policy Analyst',
    imageSrc: '/images/team/benjamin-onyatta.jpg',
    slug: 'benjamin-onyatta',
    bio: `Benjamin Onyatta is a policy analyst and researcher based in Nairobi, Kenya, with a growing interest in human rights, democracy and governance, equity and inclusive development, and peace and security. He currently supports the largest criminal justice programme in Africa at the United Nations Office on Drugs and Crime (UNODC). He has also worked with Save the Children, the World Agriculture Forum, and Ipas, building experience across programme development & support, research, and policy analysis. Driven by a desire to contribute to positive change, Benjamin uses policy analysis and evidence-based influence to advance more accountable, inclusive, and peaceful societies.`,
    socials: {},
  },
  {
    name: 'Tsion Hagos',
    designation: 'International Humanitarian Law and Human Rights Expert',
    imageSrc: '/images/team/tsion-hagos.jpg',
    slug: 'tsion-hagos',
    bio: `Tsion Hagos is an experienced researcher with a demonstrated history of working in the civic and social organisation industry in the fields of peace and security, human rights, and humanitarian affairs, with a particular interest and focus on African peace and security concerns. Tsion holds a Master of Laws in International Humanitarian Law and Human Rights from the Geneva Academy of International Humanitarian Law and Human Rights, and a Master of Laws in Human Rights and Democratisation in Africa from the University of Pretoria. Professionally, Tsion’s journey covers working with a number of CSOs and intergovernmental organisations.`,
    socials: {},
  },
  {
    name: 'Ahmed Mohamed Abdi',
    designation: 'Legal and Economic Governance Expert',
    imageSrc: '/images/team/ahmed-abdi.jpg',
    slug: 'ahmed-abdi',
    bio: `Ahmed Mohamed Abdi is a legal expert and policy advisor specializing in economic governance, trade and investment policy, legislative reform, and access to justice across Somalia and the wider East Africa region. Ahmed's work bridges legal research and analysis, public policy design and implementation, and institutional reform in fragile and conflict-affected contexts. Ahmed holds an LLB from the University of Somalia and is pursuing an LLM in International Business Law at the University of Liverpool. His work spans commercial law reform, trade facilitation, regional integration, legislative drafting, and development policy.`,
    socials: {},
  },
  {
    name: 'Dr. Zelalem Yekoye Alemayehu',
    designation: 'Climate and Environmental Researcher',
    imageSrc: '/images/team/zelalem-alemayehu.jpg',
    slug: 'zelalem-alemayehu',
    bio: `Dr. Zelalem Yekoye Alemayehu is a climate and environmental researcher and university academic at Bahir Dar University, Ethiopia. He holds a PhD in Environment and Natural Resources Management, specializing in climate change, land-use/land-cover change, livelihoods, and environmental sustainability. With over a decade of experience in teaching, research, and project leadership, he has published more than ten peer-reviewed articles and supervised postgraduate research. His expertise includes GIS, remote sensing, climate analysis, environmental education, and climate adaptation. His research focuses on generating evidence-based solutions for climate-vulnerable communities and strengthening sustainable environmental management.`,
    socials: {},
  },
  {
    name: 'Daberechukwu “Dab” Ogbuishi',
    designation: 'Policy, Trade and Investment Lawyer',
    imageSrc: '/images/team/dab-ogbuishi.jpg',
    slug: 'dab-ogbuishi',
    bio: `Daberechukwu “Dab” Ogbuishi is a policy lawyer and strategic thinker working at the intersection of law, public policy, and international capital. His interests span geopolitical strategy, cross-border investment, trade policy, regulatory governance, and the institutional foundations of economic development in Africa. A graduate of the University of Nigeria and the Nigerian Law School, he also holds an MBA from Rome Business School. His commentary on policy, business, and governance has appeared in BusinessDay, Borg, and Veriv Africa.

He is a co-founder of The Total Transformation Foundation, advancing education policy and institutional reform in Nigeria. His broader focus is on bridging public policy and private capital to strengthen African institutions, economic competitiveness, and development outcomes.`,
    socials: {},
  },
  {
    name: 'Ally Gakweli',
    designation: 'Policy Communications Specialist',
    imageSrc: '/images/team/ally-gakweli.jpg',
    slug: 'ally-gakweli',
    bio: `Ally Gakweli is an impact storyteller passionate about solving policy challenges through communications. He is particularly interested in how communications can improve public participation to yield better policy outcomes. Currently, he leads marketing at the Kenya School of Law, where he focuses on digital and stakeholder engagement to drive uptake in legal education. In the same role, he volunteers as communications and monitoring lead for donor projects, working with donors and civil society partners to further access to justice through stakeholder engagement, policy translation, and advocacy of paralegal-led initiatives. In his previous role as a journalist at The Kenyan Wallstreet he grew their podcast from scratch into a Top Ten Podcast in Kenya, as named by Citizen Media, shedding light on conversations on startup funding, public finance policy, and investing in Africa by engaging leaders at The IMF, Facebook, Equity Group, SWVL and the UK Department for International Trade. As an Associate Fellow at Nala Center, he explores how communications can deepen people’s engagement with policy.`,
    socials: {},
  },
  {
    name: 'Barry Nkomo',
    designation: 'Social Impact Assessment Consultant',
    imageSrc: '/images/team/barry-nkomo.jpg',
    slug: 'barry-nkomo',
    bio: `Barry Nkomo, a Bachelor of Social Science (Honours) graduate, currently working as an Independent Social Impact Assessment Consultant and having completed 20 years of service in various public and private organisations. Core expertise in Socio-Economic Impacts Assessments, Community Development, Stakeholder Engagement, Strategic Planning, Risk Analysis, Research, Monitoring and Evaluation disciplines. He has acquired immense skills by participating in multi-disciplinary project teams across different sectors i.e. mining, energy and infrastructure development. As a UCT and WITS Alumni, He is an active participant in their respective alumni activities for academic development especially in traditional communities for access to skills development and capacity-building for sustainable development in vulnerable communities. Through academic and institutional public policy research and development his objective is to empower and transform the communities to foster innovative approach for development problems and agenda.`,
    socials: {},
  },
  {
    name: 'Dr. Daniel Kirogo Wahungu',
    designation: 'Education Policy Expert',
    imageSrc: '/images/team/daniel-wahungu.jpg',
    slug: 'daniel-wahungu',
    bio: `Dr. Daniel Kirogo Wahungu, PhD, is an education expert, research consultant, public policy analyst and public sector leadership with over 30 years of experience spanning basic, TVET and higher education. He holds a PhD in Sociology of Education and Policy Studies from Kenyatta University, Kenya, and has expertise in sociology of education, comparative and international education, research and public policy analysis. His research interests include TVET and skills development, refugee education and forced migration, gender and social inclusion, youth economic empowerment, community resilience, governance, sustainable development and emotional health.`,
    socials: {},
  },
  {
    name: 'Emmanuel Karabo Moshe',
    designation: 'Energy and Climate Policy Expert',
    imageSrc: '/images/team/emmanuel-moshe.jpg',
    slug: 'emmanuel-moshe',
    bio: `Emmanuel Karabo Moshe is a mechanical and energy engineer driving African green energy transitions by bridging practical engineering with climate policy. A Doctoral candidate researching Botswana’s green energy pathways, Emmanuel holds a Master’s degree and an MBA. His diverse experience spans technical coordination, university teaching, and community-focused innovation, with sustainability contributions recognised by Finnova at the 2024 Renewable for City Accelerathon. As a Nala Center Fellow, Emmanuel draws upon this cross-disciplinary acumen to positively contribute to resilient climate and clean energy frameworks, advancing actionable, sustainable development policy solutions across the south and east Africa region.`,
    socials: {},
  },
  {
    name: 'Deusdedit Makoti',
    designation: 'Agroforestry and Rural Livelihoods Expert',
    imageSrc: '/images/team/deusdedit-makoti.jpg',
    slug: 'deusdedit-makoti',
    bio: `Deusdedit Makoti is a Project Management and Research Professional with over five years of experience advancing smallholder farmer livelihoods through sustainable agroforestry models at Trees for the Future. Holding a Master’s degree in Community Development and Project Management from the University of Iringa, Deusdedit brings extensive expertise in empirical research, rigorous data analysis, and program leadership. He specializes in designing and supporting high-impact agricultural interventions that strengthen rural resilience and foster long-term community development. Driven by a commitment to shaping Africa's future, Deusdedit leverages evidence-based research and field insights to inform policy frameworks and advance sustainable socio-economic growth across the continent.`,
    socials: {},
  },
  {
    name: 'Dr. Nyasha Ndemo-Masimbarasi',
    designation: 'Gender, Climate and Development Scholar',
    imageSrc: '/images/team/nyasha-ndemo-masimbarasi.jpg',
    slug: 'nyasha-ndemo-masimbarasi',
    bio: `Dr. Nyasha Ndemo-Masimbarasi is a development scholar, author, and researcher whose work sits at the intersection of gender, climate change, vulnerability, and sustainable development. With a strong commitment to advancing inclusive and evidence-informed solutions, she explores how social and environmental inequalities shape the lives and opportunities of communities, particularly women and other vulnerable groups. She holds a DPhil in Development Science and Policy, an MSc in Development Studies, and a BSc Honours in Development Studies. Her scholarly contribution includes 34 peer-reviewed publications, comprising three books, 17 book chapters, and 14 journal articles. Her work bridges research, policy, and practice to inspire meaningful social change.`,
    socials: {},
  },
  {
    name: 'Bright Sowu',
    designation: 'Anti-Corruption Expert',
    imageSrc: '/images/team/bright-sowu.jpg',
    slug: 'bright-sowu',
    bio: `Bright Sowu has 12 years anti-corruption experience. He works with the Office of the Special Prosecutor. He has previously worked for the Ghana Anti-Corruption Coalition, European Union and Japan Embassy. Bright has undertaken anti-corruption projects in Ghana, Sierra Leone, Benin and Sudan. He has served as an anti-corruption consultant for the New York firm – ERGO, for the UNCAC Coalition and for Project Expedite Justice.

Bright has been a Transform Norms Fellow, a Fisher Family Summer Fellow (Stanford University, CA) and a Mandela Washington Fellow (Presidential Precinct, VA). He holds an MPhil in Development Studies from the University of Cambridge, U.K.`,
    socials: {},
  },
  {
    name: 'Ainomugisha Matthew',
    designation: 'Youth Empowerment and Public Policy Expert',
    imageSrc: '/images/team/ainomugisha-matthew.jpg',
    slug: 'ainomugisha-matthew',
    bio: `Ainomugisha Matthew is a Ugandan development practitioner at the intersection of youth empowerment, public policy and inclusive development. He leads donor-funded programmes that have equipped over 46,000 marginalised young people with entrepreneurship, financial literacy and work-readiness skills. His expertise spans resource mobilisation, partnerships, inclusion and safeguarding. A Fellow of Emerging Leaders in Australia–Africa Diplomacy, he is pursuing postgraduate studies in policy and international relations. His interests include peace and security; democracy, governance and civic innovation; and migration, mobility and human rights. A lifelong learner who values being empowered, he is passionate about empowering others to become effective community changemakers.`,
    socials: {},
  },
  {
    name: 'Barrack Ogada',
    designation: 'Governance and Electoral Politics Researcher',
    imageSrc: '/images/team/barrack-ogada.jpg',
    slug: 'barrack-ogada',
    bio: `Barrack Ogada is a Kenyan researcher and policy professional specializing in governance, democratic institutions, electoral politics, peace and security, and sustainable development. He holds an MA in Political Science and Public Administration and a First-Class Honours BA in Political Science and Sociology from the University of Nairobi. His research examines electoral governance, digital technologies, democratic legitimacy, and institutional reform in Africa. Barrack has contributed to policy research, field-based studies, and international academic and policy forums. As an Associate Fellow at Nala Center, he advances evidence-informed policy, impactful research, and inclusive dialogue on Africa’s governance and development challenges.`,
    socials: {},
  },
  {
    name: 'Safia Sheikh',
    designation: 'Migration Researcher and Writer',
    imageSrc: '/images/team/safia-sheikh.jpg',
    slug: 'safia-sheikh',
    bio: `Safia Sheikh is a writer and migration researcher whose own experience has led her to reflect on the possibility that migration is not only about crossing geographical borders, but also about inner transformation. After all, we do not migrate as empty vessels; we carry inherited narratives, internalized beliefs, perceptions, and interpretations that continue to shape how we experience new places and opportunities. Through research and writing, she seeks to understand how the stories we inherit shape the lives we live, and how becoming aware of them can open up the possibility of seeing ourselves and the world differently.`,
    socials: {},
  },
  {
    name: 'Passent Moussa',
    designation: 'Human Rights and Middle East Politics Researcher',
    imageSrc: '/images/team/passent-moussa.jpg',
    slug: 'passent-moussa',
    bio: `Passent Moussa is a researcher and human rights professional based in Germany. Moussa has an MA from the Essex Human Rights Centre and a PhD from the Department of Sociology at the University of Essex. Her research interests lie in the sociology of human rights, structures of authoritarianism, processes of subjectivation, social theory, and politics of the Middle East.

Moussa was also selected as a Runner Up of the 2024 Leigh Douglas Memorial Prize by the British Society for Middle Eastern Studies. The prize is awarded annually to the writer of the best PhD dissertation on a Middle Eastern topic in the Social Sciences or Humanities awarded by a British University.`,
    socials: {},
  },
  {
    name: 'Noah Keya Otinga',
    designation: 'Finance and Financial Inclusion Expert',
    imageSrc: '/images/team/noah-otinga.png',
    slug: 'noah-otinga',
    bio: `Noah Keya Otinga is a finance scholar and Lecturer at Strathmore Business School, Kenya, with a PhD in Business and Management (Finance). His research examines financial inclusion, fintech, remittances, and capital market development, and he has published refereed articles in Cogent Economics and Finance and the Journal of Financial Economic Policy. He has taught finance-related courses since 2017, supervised over 100 undergraduate research projects, and presented at international research conferences. Noah serves on the board of Mzima Springs SACCO and chairs its Credit Committee. He also leads surgical outreach camps in western Kenya with Operation International.`,
    socials: {},
  },
];
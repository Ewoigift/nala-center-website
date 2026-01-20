// src/app/who-we-are/leadership-team/[slug]/page.tsx
'use client';

import Image from "next/legacy/image";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import React, { use } from 'react';

// Core team member data only
const allTeamMembers = [
    {
      name: 'Bravin Onditi',
      designation: 'Founder and Executive Director',
      imageSrc: '/images/team/bravin-onditi.png',
      slug: 'bravin-onditi',
      bio: `Bravin Onditi is the Founder and Chairman of Nala Center and currently serves as its Executive Director. A passionate advocate for social justice, regional peace, and climate resilience, Bravin leads the Center's vision to advance evidence-based policy, dialogue, and action across Africa.

Bravin holds a degree in International Relations and Diplomacy from Zetech University. He has received specialized training from leading institutions, including a Certificate on Gender Inclusivity in Peacebuilding from the United States Institute of Peace (USIP), and a Certificate on Protection and Assistance for Migrants Vulnerable to Violence, Exploitation, and Abuse from the International Organization for Migration (IOM–UN Migration). He has also completed several other certificate programs from USIP focusing on conflict resolution, peacebuilding, and humanitarian response.

Bravin has authored a number of articles and policy papers on climate change, peace, and security in the Horn of Africa. His work reflects a deep commitment to advancing inclusive and sustainable solutions to the region's most pressing challenges.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/bravin-onditi-2141981b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ', 
        x: 'https://x.com/BravinOnditi?t=GihWABFNCIL5keXen_4Zew&s=08', 
        instagram: 'https://www.instagram.com/bravinveer?igsh=eTAzeXoydDhycHl4', 
      },
    },
    {
      name: 'Stella Cherop',
      designation: 'Deputy Executive Director',
      imageSrc: '/images/team/stella-cherop.png',
      slug: 'stella-cherop',
      bio: `Stella Cherop serves as the Deputy Executive Director of Nala Center, where she plays a critical leadership role in driving the Center's strategic direction and programmatic work. With over five years of experience working with both local and international organizations, Stella brings deep expertise in climate resilience, peace and security, youth and women in conflict, geopolitics, and statecraft. She is passionate about bridging research, policy, and grassroots experiences to influence practical, inclusive solutions for Africa's evolving challenges.

In addition to her role at Nala Center, Stella is a Research Fellow at the Africa Policy Institute, an independent Pan-African think tank committed to generating policy-relevant research that informs transformative change across the continent. Stella is also a committed advocate for local-global partnerships and believes that lived experiences especially those of communities directly affected by conflict or climate shocks must be at the heart of policy design and implementation. Her approach is shaped by a holistic understanding of the interconnectedness between governance, human security, and development.

She is currently pursuing a Master of Arts in Armed Conflict and Peace Studies at the University of Nairobi, deepening her academic grounding in conflict transformation, mediation, and post-conflict recovery. Stella is known for her collaborative spirit, strategic thinking, and commitment to empowering communities through knowledge, advocacy, and inclusive leadership.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/stella-cherop-21ir1997?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      },
    },
    {
      name: 'Marwa Ali Khamis',
      designation: 'Legal Advisor',
      imageSrc: '/images/team/marwa-ali-khamis.jpg',
      slug: 'marwa-ali-khamis',
      bio:`Marwa Ali Khamis serves as the Head of Legal Affairs at Nala Center, where she brings her legal acumen and strong dedication to justice, youth empowerment, and gender equity to the organization's mission. She is currently an Advocate Trainee at the Kenya School of Law, with a keen interest in civil law and human rights. Marwa is deeply passionate about using law as a tool for positive social change, especially in advancing the rights and voices of young people and women in society.

Her commitment is grounded in lived experience and a firm belief in leadership driven by purpose and service. She has previously served as the President of the General Assembly for the Kenya Model United Nations (KMUN) – Mount Kenya University Chapter, a position that sharpened her leadership, diplomacy, and advocacy skills. In addition, she held the position of Chairlady of the Muslim Association at Mount Kenya University and led various student initiatives. These roles nurtured her values of integrity, resilience, humility, and decisive leadership.

Outside of her professional commitments, Marwa enjoys reading thrillers and fiction, swimming, and playing chess pursuits that reflect her analytical mind and balanced lifestyle. She lives by the mantra: “Do not stop when you are tired, stop when you are done,” a principle that fuels her drive and persistence in all areas of life.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/marwa-ali-khamis-65816a258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      },
    },
    {
      name: 'Immanuel Kiilu',
      designation: 'Head of Research/Policy',
      imageSrc: '/images/team/immanuel-kiilu.jpg',
      slug: 'immanuel-kiilu',
      bio:`Immanuel Mwendwa Kiilu is the Head of Research and Policy at Nala Center, where he leads the organization’s research agenda, policy analysis, and youth-centered advocacy on governance, peace, and security across Africa. A Pan-Africanist committed to evidence-based change, Immanuel brings a strong interdisciplinary approach to his work, drawing from his expertise in security, diplomacy, migration, environmental governance, and regional integration.
      
      He is currently pursuing a Bachelor of Arts in International Studies at Strathmore University, deepening his academic foundation in international affairs and African development. Immanuel is also a writer and researcher whose work has earned national, continental, and international recognition, with awards for essays on anti-corruption, migration, democracy, and economic integration.
      
      Passionate about advancing African-led solutions, he bridges research, advocacy, and youth engagement to inform inclusive and transformative policy. His work reflects a deep commitment to building a peaceful, integrated, and resilient Africa through knowledge, collaboration, and visionary leadership.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/immanuel-mwendwa-kiilu-ab6627260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        x: 'https://x.com/InkImmanuel',
      },
    },
    {
      name: 'Zuleika Hassan',
      designation: 'Head of Finance',
      imageSrc: '/images/team/zuleika-hassan.png',
      slug: 'zuleika-hassan',
      bio: `Zuleika Hassan serves as the Head of Finance and Administration Officer at Nala Center, where she oversees financial planning, budgeting, reporting, and administrative operations. With over three years of experience in financial management at Delhi College, she has developed a strong foundation in transaction processing, reconciliation, compliance, and audit preparation ensuring financial accuracy, accountability, and transparency. Her role has been pivotal in supporting institutional financial health and enabling strategic decision-making through timely and precise reporting.

In addition to her financial expertise, Zuleika brings a solid background in customer service, having worked in client-facing roles that refined her communication, interpersonal, and problem-solving abilities. She holds a Bachelor's degree in Accounting from KCA University, is a CPA (intermediate level), and also holds a Diploma in Business Management with a focus on Human Resource Management. This interdisciplinary training equips her with a unique blend of technical financial skills and people-centered administrative competence.

Zuleika is deeply committed to operational efficiency, team collaboration, and ethical financial stewardship. At Nala Center, she plays a vital role in ensuring smooth internal operations, enabling the organization to focus on its mission-driven programming. Her professional interests lie in nonprofit finance, organizational sustainability, and financial literacy for youth and women. She is passionate about using finance as a tool to build resilient institutions and empower communities.`,
      socials: {
        
      },
    },
    {
      name: 'Edwin Mwangi',
      designation: 'Head of Operations',
      imageSrc: '/images/team/edwin-maina.png',
      slug: 'edwin-mwangi',
      bio: `Edwin Mwangi is the Head of Operations at Nala Center, where he leads the planning, coordination, and execution of the Center's programs. With a background in International Relations and Diplomacy, Edwin has a unique systems-thinking approach to organizational management bridging global policy insights with local implementation strategies. He is deeply passionate about international cooperation, environmental sustainability, and the security implications of climate change.

His work focuses on integrating climate resilience and sustainability into core operational practices, advancing green financing models, and promoting community-centered environmental solutions across Africa. Edwin has played a key role in designing and executing programs that address the complex relationship between climate change and peacebuilding working to ensure that marginalized communities are not only protected from climate risks but are also empowered to lead the change. His leadership at Nala emphasizes efficiency, transparency, and impact, ensuring that every initiative contributes meaningfully to the Center's mission.

In addition to his operational responsibilities, Edwin is a strong advocate for youth engagement, environmental education, and policy reforms that address the intersection of development, climate, and human security. His belief in the power of local action backed by global thinking drives his commitment to building a more sustainable, just, and secure future.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/edwin-maina-46478b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
       
      },
    },
    {
      name: 'Antony Nyabuto',
      designation: 'Head of Events and Partnerships',
      imageSrc: '/images/team/antony-nyabuto.jpg',
      slug: 'antony-nyabuto',
      bio:`Antony Nyabuto is the Head of Partnerships at Nala Center, where he leads the organization's engagement with strategic partners, institutions, and networks to advance collaborative initiatives. A dynamic researcher and advocate, Antony has a multidisciplinary background that spans international human rights, global health, international commerce, peace and security, and knowledge management. He holds a Bachelor's degree in International Relations and Diplomacy from Zetech University and has worked extensively with government agencies, think tanks, youth-led initiatives, and non-governmental organizations to develop policy-driven solutions for environmental, governance, and sociopolitical challenges.

Currently, Antony also serves as a Research Fellow at the International Council on Human Rights, Peace and Politics, where he contributes to studies on governance, regional stability, and inclusive development. His research interests focus on the intersections of climate justice, democratic accountability, and regional peacebuilding frameworks—particularly within the African context.

Antony's career is marked by a strong commitment to interdisciplinary collaboration and civic engagement. He has been involved in several volunteer research and fellowship programs across sectors, demonstrating a consistent ability to foster innovative, cross-sectoral partnerships that drive tangible, lasting change. At Nala Center, he is instrumental in cultivating meaningful alliances with local and international actors ensuring that the Center's mission is both amplified and supported through strategic cooperation.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/antony-kengere-nyabuto-b75478285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      
      },
    },

     {
       name:'Dahabo Dagane',
designation:'Communications Assistant',
imageSrc:'/images/team/dahabo-dagane.png',
slug:'dahabo-dagane',
      bio:` Dahabo Dagane is a Communications Assistant at the Nala Center, where she supports strategic communication, public engagement, and the dissemination of the Center’s research and policy outputs. In her role, she contributes to crafting narratives that advance the Center’s mission of promoting governance, inclusion, and regional cooperation across Africa.

      She is currently pursuing a degree in International Relations and Diplomacy at the University of Nairobi, where she continues to deepen her understanding of global affairs, communication, and development. Her professional interests include strategic communication, youth empowerment, governance, and the role of media in shaping public policy and social transformation.

      Dahabo is passionate about using communication as a bridge between research and impact, ensuring that ideas translate into meaningful action. Outside her professional work, she is actively involved in community and volunteer initiatives that promote empowerment and civic engagement.
She is guided by the mantra: “Rise with purpose, lead with heart, and leave every space better than you found it.”
      `,
      socials: {
        
      },
    },

   {
   name:'Nadia Khalifa',
designation:'Events and Partnerships Assistant',
imageSrc:'/images/team/nadia-khalifa.jpg',
slug:'nadia-khalifa',
bio:`Nadia Khalifa is a committed advocate for a just, peaceful, and sustainable future, with a focus that spans the African continent and the global stage. Her work is grounded in the belief that lasting progress emerges from the interconnected pursuit of equality, democratic governance, environmental stewardship, and the protection of human rights and human dignity. Nadia is currently a junior at the United States International University–Africa (USIU-A), where she is pursuing a major in Peace and Conflict Studies. Through her academic training, she examines the structural drivers of conflict, instability, and peacebuilding, with a particular interest in inclusive and sustainable governance. She complements this focus with a minor in Accounting, reflecting her understanding that transparency, accountability, and sound financial management are essential to resilient institutions and equitable development.

At the Nala Center, Nadia serves as Assistant for Events and Partnerships, where she supports the planning and coordination of convenings and collaborations, ensuring that initiatives are impactful, inclusive, and aligned with the Center’s mission. Nadia contributes to the Nala Center through a bridge-builder’s mindset—translating research and policy ideas into well-structured, actionable engagements—alongside a strong commitment to inclusive platforms that elevate diverse voices, particularly emerging African scholars. Her combined background in peace studies and accounting enables her to approach partnerships and event coordination with analytical rigor, operational efficiency, and attention to long-term impact.

As a full-time student and member of the Nala Center team, Nadia represents the dynamic intersection of research, policy, and practice. She is eager to support the Center’s work in advancing resilient and equitable futures by strengthening the platforms through which dialogue, collaboration, and change are made possible. `,
socials: {
      linkedin: 'https://www.linkedin.com/in/khalifa-nadia-b6a4a029a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      instagram: 'https://www.instagram.com/ctrl.nk?igsh=MWEycTR0dXg5ZXRmNQ%3D%3D&utm_source=',
    },
  },

    {
  name:'Keith Sangolo',
designation:'Intern',
imageSrc:'/images/team/keith-sangolo.png',
slug:'keith-sangolo',
bio:`Keith Sangolo is an intern, currently completing his Bachelor of Arts in International Relations and Diplomacy at Zetech University. He has built a strong foundation in foreign policy, international law, and governance, with a keen interest in applying this knowledge to practical challenges. During a recent attachment at the State Department of Tourism, he contributed to policy-related tasks and stakeholder engagement, gaining firsthand experience in using tourism as a tool for national development and economic diplomacy.

Beyond his academic and professional work, Keith has honed his leadership and advocacy skills through active participation in the Kenya Model United Nations and Amnesty International. His primary research interests lie in Kenya’s foreign policy, particularly its foreign direct investment (FDI) strategy, the impact of electoral disputes on human rights, and the dynamics of African regional integration. He is passionate about contributing to data-driven solutions that strengthen international cooperation and sustainable development across the continent.`,
socials: {
      
    },
},

{
  name:'Abdulmalik Ibrahim Salim',
designation:'Intern',
imageSrc:'/images/who-we-are/ibrahim-salim.png',
slug:'ibrahi-salim',
bio:`Abdulmalik Ibrahim Salim is an intern and an International Studies student at Strathmore University with a primary focus on governance, peace, and security. His research is centered on the critical nexus between climate change and security, examining how environmental challenges impact stability and peace on the continent. 

He is passionate about diplomacy, democratic practices, and the essential role of youth in leading social and political change. His academic background is complemented by experience in projects focused on policy analysis, climate action, and civic education. At the Nala Center, Salim applies his skills to research and policy innovation, aiming to advance advocacy for a more equitable, resilient, and sustainable Africa.`,
socials: {
      
  },
}

];


interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const router = useRouter();
  const { slug } = use(params);

  const member = allTeamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <main className="bg-white text-[#050505] pt-[75px] py-16 px-4 text-center">
        <h1 className="text-3xl font-bold font-serif mb-4">Member Not Found</h1>
        <p>The team member you are looking for does not exist.</p>
        <button onClick={() => router.back()} className="mt-8 bg-[#050505] text-white py-2 px-6 rounded-md hover:bg-[#2F2F2F] transition-colors">
          Go Back
        </button>
      </main>
    );
  }

  return (
    <main className="bg-white text-[#050505] pt-[75px] py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center gap-8">
        <div className="flex-shrink-0 w-full flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#050505] shadow-md -mt-24 mb-4">
            <Image
              src={member.imageSrc}
              alt={member.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold font-serif mb-2 text-[#050505]">{member.name}</h1>
          <p className="text-xl text-[#050505] font-medium mb-4">{member.designation}</p>
          {member.socials && (
            <div className="flex justify-center space-x-6 mt-4 mb-8">
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#0077B5] transition-colors duration-300 text-3xl" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {member.socials.instagram && (
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#C13584] transition-colors duration-300 text-3xl" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              )}
              {member.socials.x && (
                <a href={member.socials.x} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#000000] transition-colors duration-300 text-3xl" aria-label="X (Twitter)">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              )}
            </div>
          )}
          <div className="text-left">
            {member.bio.split('\n').map((paragraph, index) => (
              paragraph.trim() !== '' && (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4 last:mb-0">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
          <button onClick={() => router.back()} className="mt-8 bg-[#050505] text-white py-2 px-6 rounded-md hover:bg-[#2F2F2F] transition-colors">
            Go Back to Team
          </button>
        </div>
      </div>
    </main>
  );
}

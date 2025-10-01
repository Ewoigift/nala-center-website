// src/app/who-we-are/board-of-directors/[slug]/page.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import React, { use } from 'react';

const allBoardMembers = [
  {
    name: 'Bravin Onditi',
      designation: 'Chairperson',
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
     name: 'Zuleika Hassan',
      designation: 'Treasurer of the Board',
      imageSrc: '/images/team/zuleika-hassan.png',
      slug: 'zuleika-hassan',
      bio: `Zuleika Hassan serves as the Head of Finance and Administration Officer at Nala Center, where she oversees financial planning, budgeting, reporting, and administrative operations. With over three years of experience in financial management at Delhi College, she has developed a strong foundation in transaction processing, reconciliation, compliance, and audit preparation ensuring financial accuracy, accountability, and transparency. Her role has been pivotal in supporting institutional financial health and enabling strategic decision-making through timely and precise reporting.

In addition to her financial expertise, Zuleika brings a solid background in customer service, having worked in client-facing roles that refined her communication, interpersonal, and problem-solving abilities. She holds a Bachelor's degree in Accounting from KCA University, is a CPA (intermediate level), and also holds a Diploma in Business Management with a focus on Human Resource Management. This interdisciplinary training equips her with a unique blend of technical financial skills and people-centered administrative competence.

Zuleika is deeply committed to operational efficiency, team collaboration, and ethical financial stewardship. At Nala Center, she plays a vital role in ensuring smooth internal operations, enabling the organization to focus on its mission-driven programming. Her professional interests lie in nonprofit finance, organizational sustainability, and financial literacy for youth and women. She is passionate about using finance as a tool to build resilient institutions and empower communities.`,
      socials: {
        linkedin: '#',
        x: '#',
        instagram: '#',
      },
  },
  {
     name: 'Antony Nyabuto',
      designation: 'Secretary of the Board',
      imageSrc: '/images/team/antony-nyabuto.jpg',
      slug: 'antony-nyabuto',
      bio:`Antony Nyabuto is the Head of Partnerships at Nala Center, where he leads the organization's engagement with strategic partners, institutions, and networks to advance collaborative initiatives. A dynamic researcher and advocate, Antony has a multidisciplinary background that spans international human rights, global health, international commerce, peace and security, and knowledge management. He holds a Bachelor's degree in International Relations and Diplomacy from Zetech University and has worked extensively with government agencies, think tanks, youth-led initiatives, and non-governmental organizations to develop policy-driven solutions for environmental, governance, and sociopolitical challenges.

Currently, Antony also serves as a Research Fellow at the International Council on Human Rights, Peace and Politics, where he contributes to studies on governance, regional stability, and inclusive development. His research interests focus on the intersections of climate justice, democratic accountability, and regional peacebuilding frameworks—particularly within the African context.

Antony's career is marked by a strong commitment to interdisciplinary collaboration and civic engagement. He has been involved in several volunteer research and fellowship programs across sectors, demonstrating a consistent ability to foster innovative, cross-sectoral partnerships that drive tangible, lasting change. At Nala Center, he is instrumental in cultivating meaningful alliances with local and international actors ensuring that the Center's mission is both amplified and supported through strategic cooperation.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/antony-kengere-nyabuto-b75478285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        x: '#',
        instagram: '#',
      },
  },
  {
    name: 'Edwin Mwangi',
      designation: 'Board Member',
      imageSrc: '/images/team/edwin-maina.png',
      slug: 'edwin-mwangi',
      bio: `Edwin Mwangi is the Head of Operations at Nala Center, where he leads the planning, coordination, and execution of the Center's programs. With a background in International Relations and Diplomacy, Edwin has a unique systems-thinking approach to organizational management bridging global policy insights with local implementation strategies. He is deeply passionate about international cooperation, environmental sustainability, and the security implications of climate change.

His work focuses on integrating climate resilience and sustainability into core operational practices, advancing green financing models, and promoting community-centered environmental solutions across Africa. Edwin has played a key role in designing and executing programs that address the complex relationship between climate change and peacebuilding working to ensure that marginalized communities are not only protected from climate risks but are also empowered to lead the change. His leadership at Nala emphasizes efficiency, transparency, and impact, ensuring that every initiative contributes meaningfully to the Center's mission.

In addition to his operational responsibilities, Edwin is a strong advocate for youth engagement, environmental education, and policy reforms that address the intersection of development, climate, and human security. His belief in the power of local action backed by global thinking drives his commitment to building a more sustainable, just, and secure future.`,
      socials: {
        linkedin: 'https://www.linkedin.com/in/edwin-maina-46478b243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
        x: '#',
        instagram: '#',
      },
  },
  {
      name: 'Brian Serem',
      designation: 'Board Member',
      imageSrc: '/images/team/brian_serem.png', 
      slug: 'brian-serem',
      bio: `Brian Serem is a committed professional with a degree in International Relations and Diplomacy from Zetech University. He has worked with the Kenya Red Cross on outreach programs addressing humanitarian needs and completed specialized training in Disaster Management and First Aid, strengthening his capacity to respond to complex challenges.

      Currently serving as a Computer Operator Prosecutor at the Kenya National Highways Authority (KeNHA), Brian combines operational experience with civic responsibility. As a member of the Nala Group Board of Directors, Brian plays a vital role in providing strategic guidance, oversight, and leadership to advance the organization’s mission. His background in diplomacy, humanitarian engagement, and operational management equips him to contribute to shaping policy discussions, strengthening governance, and ensuring that Nala’s research and advocacy generate sustainable and meaningful impact.`,


      socials: {
        linkedin: '#',
        x: '#',
        instagram: '#',
      },
  },
];

interface BoardOfDirectorsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BoardOfDirectorsPage({ params }: BoardOfDirectorsPageProps) {
  const router = useRouter();
  const { slug } = use(params);
  const member = allBoardMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <main className="bg-white text-[#050505] pt-[75px] py-16 px-4 text-center">
        <h1 className="text-3xl font-bold font-serif mb-4">Member Not Found</h1>
        <p>The board member you are looking for does not exist.</p>
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
            Go Back to Board of Directors
          </button>
        </div>
      </div>
    </main>
  );
}

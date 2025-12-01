// src/app/who-we-are/advisory-board/[slug]/page.tsx
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

const allAdvisoryBoardMembers = [
  {
     name: 'Andrew J. Franklin, Former US Marine',
      designation: 'Peace and Security',
      imageSrc: '/images/who-we-are/Andrew-Franklin.png', 
      slug: 'andrew-franklin',
    bio: `Andrew J. Franklin is a seasoned security and risk management professional with over four decades of extensive experience in Sub-Saharan Africa. His career spans logistics, political, legal, economic, military, and paramilitary issues, with specialized expertise in counterinsurgency and crisis management.

A former U.S. Marine Corps Commissioned Officer, Andrew served actively and in reserve for 22 years, retiring at the rank of Major. He holds a Juris Doctor (J.D.) in International Law and Legal Studies from New York Law School and has built a strong track record as a Managing Director in the security and investigations industry.Beyond his operational and advisory roles, Andrew is widely recognized as a writer, security consultant, political analyst, and media commentator on foreign and security policy. His ability to navigate complex security landscapes and provide nuanced analysis continues to shape dialogue on governance, stability, and security in Africa.`,
    socials: {
      linkedin: '#',
      x: '#',
      instagram: '#',

    },
  },
];

interface AdvisoryBoardPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function AdvisoryBoardPage({ params }: AdvisoryBoardPageProps) {
  const router = useRouter();
  const { slug } = use(params);
  const member = allAdvisoryBoardMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <main className="bg-white text-[#050505] pt-[75px] py-16 px-4 text-center">
        <h1 className="text-3xl font-bold font-serif mb-4">Member Not Found</h1>
        <p>The advisory board member you are looking for does not exist.</p>
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
            Go Back to Advisory Board
          </button>
        </div>
      </div>
    </main>
  );
}

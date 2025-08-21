// src/app/who-we-are/advisory-board/[slug]/page.tsx
'use client';

import Image from 'next/image';
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
    name: 'Dr. Kennedy Kiguru',
    designation: 'Advisor, Peace and Security',
    imageSrc: 'https://placehold.co/600x400/D0F0C0/050505?text=Dr.+Kennedy+Kiguru', // Placeholder
    slug: 'kennedy-kiguru',
    bio: `Dr. Kennedy Kiguru is a Peace and Security Advisor with extensive experience in conflict analysis, peacebuilding, and security sector reform. He provides strategic counsel to Nala Center on its programs related to governance, human security, and regional stability.`,
    socials: {
      linkedin: '#',
      x: '#',
      instagram: '#',

    },
  },
  {
    name: 'Dr. Faith Mwangi',
    designation: 'Advisor, Climate & Sustainability',
    imageSrc: 'https://placehold.co/600x400/D0F0C0/050505?text=Dr.+Faith+Mwangi', // Placeholder
    slug: 'faith-mwangi',
    bio: `Dr. Faith Mwangi is a leading expert in climate change, environmental policy, and sustainable development. As an advisor, she guides Nala Center’s work on climate resilience, green financing, and the intersection of climate action with peace and security.`,
    socials: {
      linkedin: '#',
      x: '#',
    },
  },
  {
    name: 'Dr. Josephine Ojiambo',
    designation: 'Advisor, Global Health',
    imageSrc: 'https://placehold.co/600x400/D0F0C0/050505?text=Dr.+Josephine+Ojiambo', // Placeholder
    slug: 'josephine-ojiambo',
    bio: `Dr. Josephine Ojiambo is a global health expert with a distinguished career in public health, policy, and advocacy. She advises the Nala Center on health policy, youth wellbeing, and the critical linkages between health, human security, and development in Africa.`,
    socials: {
      linkedin: '#',
      x: '#',
    },
  },
  {
    name: 'Wairimu Gathimba',
    designation: 'Advisor, Gender & Youth',
    imageSrc: 'https://placehold.co/600x400/D0F0C0/050505?text=Wairimu+Gathimba', // Placeholder
    slug: 'wairimu-gathimba',
    bio: `Wairimu Gathimba is a passionate advocate for gender equality and youth empowerment. She provides key insights on how to integrate gender-responsive and youth-led approaches into all of Nala Center’s programs, ensuring inclusivity and sustainability.`,
    socials: {
      linkedin: '#',
      x: '#',
    },
  },
  {
    name: 'Ahmed Gure',
    designation: 'Advisor, Research',
    imageSrc: 'https://placehold.co/600x400/D0F0C0/050505?text=Ahmed+Gure', // Placeholder
    slug: 'ahmed-gure',
    bio: `Ahmed Gure is a seasoned researcher and analyst specializing in governance, regional integration, and policy evaluation. He advises the Center on its research methodologies, data-driven strategies, and evidence-based policy publications.`,
    socials: {
      linkedin: '#',
      x: '#',
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

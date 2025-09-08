// src/app/who-we-are/associate-fellows/[slug]/page.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faXTwitter,
  faBluesky,
} from '@fortawesome/free-brands-svg-icons';
import React, { use } from 'react';

// Data for all Associate Fellows
const allAssociateFellows = [
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
  name:'Denis Muniu',
  designation:'Foreign Policy, Security, and Defence Expert',
  imageSrc:'/images/team/denis-muniu.png',
  slug:'denis-muniu',
   bio: `Mr. Denis Muniu is a Research Fellow at the Global Centre for Policy and Strategy, where he focuses on foreign policy, security, and defense. He previously served at the Ministry of Foreign and Diaspora Affairs, and at the Ministry of East African Community, Arid and Semi-Arid Lands (ASALs), and Regional Development. His research interests center on peace, security, and foreign policy. Denis holds a BA in International Relations and Diplomacy from the Technical University of Kenya and is currently pursuing a Master of Arts in International Relations at Kenyatta University.`,
    socials: {
      email: '#',
      linkedin: 'https://www.linkedin.com/in/denis-muniu-7721b318a/',
      x: '#',
 
    },
}
];


interface AssociateFellowPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export default function AssociateFellowPage({ params }: AssociateFellowPageProps) {
  const router = useRouter();
  // Unwrap the params Promise using React.use()
  const { slug } = use(params);

  // Find the fellow based on the slug
  const fellow = allAssociateFellows.find((f) => f.slug === slug);

  if (!fellow) {
    return (
      <main className="bg-white text-[#050505] pt-[75px] py-16 px-4 text-center">
        <h1 className="text-3xl font-bold font-serif mb-4">Fellow Not Found</h1>
        <p>The associate fellow you are looking for does not exist.</p>
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
              src={fellow.imageSrc}
              alt={fellow.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold font-serif mb-2 text-[#050505]">{fellow.name}</h1>
          <p className="text-xl text-[#050505] font-medium mb-4">{fellow.designation}</p>
          {fellow.socials && (
            <div className="flex justify-center space-x-6 mt-4 mb-8">
              {fellow.socials.linkedin && (
                <a href={fellow.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#0077B5] transition-colors duration-300 text-3xl" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              )}
              {fellow.socials.x && (
                <a href={fellow.socials.x} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#000000] transition-colors duration-300 text-3xl" aria-label="X (Twitter)">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              )}
              {fellow.socials.bluesky && (
                <a href={fellow.socials.bluesky} target="_blank" rel="noopener noreferrer" className="text-[#050505] hover:text-[#005cff] transition-colors duration-300 text-3xl" aria-label="BlueSky">
<FontAwesomeIcon icon={faBluesky} />                
</a>
              )}
            </div>
          )}
          <div className="text-left">
            {fellow.bio.split('\n').map((paragraph, index) => (
              paragraph.trim() !== '' && (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-4 last:mb-0">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
          <button onClick={() => router.back()} className="mt-8 bg-[#050505] text-white py-2 px-6 rounded-md hover:bg-[#2F2F2F] transition-colors">
            Go Back to Fellows
          </button>
        </div>
      </div>
    </main>
  );
}

// src/app/who-we-are/leadership-team/[slug]/page.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Dummy data for a single member (in a real app, this would come from an API or CMS)
const allTeamMembers = [
  {
    name: 'Bravin Onditi',
    designation: 'Founder and Executive Director',
    imageSrc: '/images/team/bravin-onditi.png',
    slug: 'bravin-onditi',
    bio: `Bravin Onditi is the Founder and Chairman of Nala Center and currently serves as its Executive Director. A passionate advocate for social justice, regional peace, and climate resilience, Bravin leads the Center&apos;s vision to advance evidence-based policy, dialogue, and action across Africa.

Bravin holds a degree in International Relations and Diplomacy from Zetech University. He has received specialized training from leading institutions, including a Certificate on Gender Inclusivity in Peacebuilding from the United States Institute of Peace (USIP), and a Certificate on Protection and Assistance for Migrants Vulnerable to Violence, Exploitation, and Abuse from the International Organization for Migration (IOM–UN Migration). He has also completed several other certificate programs from USIP focusing on conflict resolution, peacebuilding, and humanitarian response.

Bravin has authored a number of articles and policy papers on climate change, peace, and security in the Horn of Africa. His work reflects a deep commitment to advancing inclusive and sustainable solutions to the region&apos;s most pressing challenges.`,
    socials: {
      linkedin: '#', // Changed to placeholder
      x: '#', // Changed to placeholder
      instagram: '#', // Changed to placeholder
    },
  },
  {
    name: 'Stella Cherop',
    designation: 'Deputy Executive Director',
    imageSrc: '/images/team/stella-cherop.png',
    slug: 'stella-cherop',
    bio: `Stella Cherop serves as the Deputy Executive Director of Nala Center, where she plays a critical leadership role in driving the Center&apos;s strategic direction and programmatic work. With over five years of experience working with both local and international organizations, Stella brings deep expertise in climate resilience, peace and security, youth and women in conflict, geopolitics, and statecraft. She is passionate about bridging research, policy, and grassroots experiences to influence practical, inclusive solutions for Africa&apos;s evolving challenges.

In addition to her role at Nala Center, Stella is a Research Fellow at the Africa Policy Institute, an independent Pan-African think tank committed to generating policy-relevant research that informs transformative change across the continent. Stella is also a committed advocate for local-global partnerships and believes that lived experiences especially those of communities directly affected by conflict or climate shocks must be at the heart of policy design and implementation. Her approach is shaped by a holistic understanding of the interconnectedness between governance, human security, and development.

She is currently pursuing a Master of Arts in Armed Conflict and Peace Studies at the University of Nairobi, deepening her academic grounding in conflict transformation, mediation, and post-conflict recovery. Stella is known for her collaborative spirit, strategic thinking, and commitment to empowering communities through knowledge, advocacy, and inclusive leadership.`,
    socials: {
      linkedin: '#', // Changed to placeholder
      x: '#', // Changed to placeholder
      instagram: '#', // Changed to placeholder
    },
  },
  {
    name: 'Marwa Ali Khamis',
    designation: 'Legal Advisor',
    imageSrc: '/images/team/marwa-ali-khamis.jpg',
    slug: 'marwa-ali-khamis',
    bio: `Marwa Ali Khamis serves as the Head of Legal Affairs at Nala Center, where she brings her legal acumen and strong dedication to justice, youth empowerment, and gender equity to the organization&apos;s mission. She is currently an Advocate Trainee at the Kenya School of Law, with a keen interest in civil law and human rights. Marwa is deeply passionate about using law as a tool for positive social change, especially in advancing the rights and voices of young people and women in society.

Her commitment is grounded in lived experience and a firm belief in leadership driven by purpose and service. She has previously served as the President of the General Assembly for the Kenya Model United Nations (KMUN) – Mount Kenya University Chapter, a position that sharpened her leadership, diplomacy, and advocacy skills. In addition, she held the position of Chairlady of the Muslim Association at Mount Kenya University and led various student initiatives. These roles nurtured her values of integrity, resilience, humility, and decisive leadership.

Outside of her professional commitments, Marwa enjoys reading thrillers and fiction, swimming, and playing chess pursuits that reflect her analytical mind and balanced lifestyle. She lives by the mantra: “Do not stop when you are tired, stop when you are done,” a principle that fuels her drive and persistence in all areas of life.`,
    socials: {
      linkedin: '#', // Changed to placeholder
      x: '#', // Changed to placeholder
      instagram: '#', // Changed to placeholder
    },
  },
  {
    name: 'Immanuel Kiilu',
    designation: 'Head of Research/Policy',
    imageSrc: '/images/team/immanuel-kiilu.jpg',
    slug: 'immanuel-kiilu',
    bio: `Immanuel Kiilu leads Nala Center&apos;s research and policy agenda, overseeing the development of rigorous, evidence-based insights. With a strong academic background and a passion for impactful research, Immanuel guides the team in exploring complex global challenges and translating findings into actionable policy recommendations. (Bio to be added)`, // Placeholder for now
    socials: {
      linkedin: '#',
      x: '#',
      instagram: '#',
    },
  },
  {
    name: 'Zuleika Hassan',
    designation: 'Head of Finance',
    imageSrc: '/images/team/zuleika-hassan.png',
    slug: 'zuleika-hassan',
    bio: `Zuleika Hassan serves as the Head of Finance and Administration Officer at Nala Center, where she oversees financial planning, budgeting, reporting, and administrative operations. With over three years of experience in financial management at Delhi College, she has developed a strong foundation in transaction processing, reconciliation, compliance, and audit preparation ensuring financial accuracy, accountability, and transparency. Her role has been pivotal in supporting institutional financial health and enabling strategic decision-making through timely and precise reporting.

In addition to her financial expertise, Zuleika brings a solid background in customer service, having worked in client-facing roles that refined her communication, interpersonal, and problem-solving abilities. She holds a Bachelor&apos;s degree in Accounting from KCA University, is a CPA (intermediate level), and also holds a Diploma in Business Management with a focus on Human Resource Management. This interdisciplinary training equips her with a unique blend of technical financial skills and people-centered administrative competence.

Zuleika is deeply committed to operational efficiency, team collaboration, and ethical financial stewardship. At Nala Center, she plays a vital role in ensuring smooth internal operations, enabling the organization to focus on its mission-driven programming. Her professional interests lie in nonprofit finance, organizational sustainability, and financial literacy for youth and women. She is passionate about using finance as a tool to build resilient institutions and empower communities.`,
    socials: {
      linkedin: '#', // Changed to placeholder
      x: '#', // Changed to placeholder
      instagram: '#', // Changed to placeholder
    },
  },
  {
    name: 'Edwin Mwangi', // Updated name
    designation: 'Head of Operations',
    imageSrc: '/images/team/edwin-maina.jpg', // Keep the image path as it was, assuming it's for Edwin Mwangi
    slug: 'edwin-mwangi', // Updated slug
    bio: `Edwin Mwangi is the Head of Operations at Nala Center, where he leads the planning, coordination, and execution of the Center&apos;s programs. With a background in International Relations and Diplomacy, Edwin has a unique systems-thinking approach to organizational management bridging global policy insights with local implementation strategies. He is deeply passionate about international cooperation, environmental sustainability, and the security implications of climate change.

His work focuses on integrating climate resilience and sustainability into core operational practices, advancing green financing models, and promoting community-centered environmental solutions across Africa. Edwin has played a key role in designing and executing programs that address the complex relationship between climate change and peacebuilding working to ensure that marginalized communities are not only protected from climate risks but are also empowered to lead the change. His leadership at Nala emphasizes efficiency, transparency, and impact, ensuring that every initiative contributes meaningfully to the Center&apos;s mission.

In addition to his operational responsibilities, Edwin is a strong advocate for youth engagement, environmental education, and policy reforms that address the intersection of development, climate, and human security. His belief in the power of local action backed by global thinking drives his commitment to building a more sustainable, just, and secure future.`,
    socials: {
      linkedin: '#', // Changed to placeholder
      x: '#', // Changed to placeholder
      instagram: '#', // Changed to placeholder
    },
  },
  {
    name: 'Antony Nyabuto',
    designation: 'Head of Events and Partnerships',
    imageSrc: '/images/team/antony-nyabuto.jpg',
    slug: 'antony-nyabuto',
    bio: `Antony Nyabuto is the Head of Partnerships at Nala Center, where he leads the organization&apos;s engagement with strategic partners, institutions, and networks to advance collaborative initiatives. A dynamic researcher and advocate, Antony has a multidisciplinary background that spans international human rights, global health, international commerce, peace and security, and knowledge management. He holds a Bachelor&apos;s degree in International Relations and Diplomacy from Zetech University and has worked extensively with government agencies, think tanks, youth-led initiatives, and non-governmental organizations to develop policy-driven solutions for environmental, governance, and sociopolitical challenges.

Currently, Antony also serves as a Research Fellow at the International Council on Human Rights, Peace and Politics, where he contributes to studies on governance, regional stability, and inclusive development. His research interests focus on the intersections of climate justice, democratic accountability, and regional peacebuilding frameworks—particularly within the African context.

Antony&apos;s career is marked by a strong commitment to interdisciplinary collaboration and civic engagement. He has been involved in several volunteer research and fellowship programs across sectors, demonstrating a consistent ability to foster innovative, cross-sectoral partnerships that drive tangible, lasting change. At Nala Center, he is instrumental in cultivating meaningful alliances with local and international actors ensuring that the Center&apos;s mission is both amplified and supported through strategic cooperation.`,
    socials: {
      linkedin: '#', // Changed to placeholder
      x: '#', // Changed to placeholder
      instagram: '#', // Changed to placeholder
    },
  },
];

interface TeamMemberPageProps {
  params: {
    slug: string; // The slug from the URL, e.g., 'bravin-onditi'
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const router = useRouter();
  const { slug } = params;

  // Find the member based on the slug
  const member = allTeamMembers.find((m) => m.slug === slug);

  // If member not found, you might want to redirect to a 404 page or a list of members
  if (!member) {
    // In a real application, you might redirect to a 404 page
    // router.push('/404');
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
          {/* Image container with negative top margin for overlap */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#050505] shadow-md -mt-24 mb-4">
            <Image
              src={member.imageSrc}
              alt={member.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Text content container */}
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold font-serif mb-2 text-[#050505]">{member.name}</h1>
          <p className="text-xl text-[#050505] font-medium mb-4">{member.designation}</p>
          {/* Social Media Section - moved here */}
          {member.socials && (
            <div className="flex justify-center space-x-6 mt-4 mb-8"> {/* Added mt-4 mb-8 for spacing */}
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
          {/* Bio section with left alignment and paragraph spacing */}
          <div className="text-left">
            {member.bio.split('\n').map((paragraph, index) => (
              paragraph.trim() !== '' && ( // Render only non-empty paragraphs
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

'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/israeli-recognition-somaliland`;

// --- Define Block Types ---
type ParagraphBlock = {
  type: 'paragraph';
  text: string | ReactNode;
};

type HeadingBlock = {
  type: 'heading';
  text: string;
};

type ListBlock = {
  type: 'list';
  items: string[];
};

type Block = ParagraphBlock | HeadingBlock | ListBlock;

// --- Define Article Data Type ---
interface ArticleData {
  title: string;
  author: string;
  date: string;
  heroImage: string;
  body: Block[];
}

// --- Component for SEO and Social Media Meta Tags ---
const MetaTags = () => {
  const ABSOLUTE_IMAGE_URL = `${BASE_DOMAIN}${articleData.heroImage}`;
  
  return (
    <>
      <link rel="canonical" href={FULL_ARTICLE_URL} />
      <meta property="og:title" content={articleData.title} />
      <meta property="og:image" content={ABSOLUTE_IMAGE_URL} />
      <meta property="og:url" content={FULL_ARTICLE_URL} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="nalacenter.org" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NalaCenter" />
      <meta name="twitter:title" content={articleData.title} />
      <meta name="twitter:image" content={ABSOLUTE_IMAGE_URL} />
    </>
  );
};

// --- Article Data ---
const articleData: ArticleData = {
  title: "What Would Israeli Recognition of Somaliland Mean for the Horn of Africa's Geopolitics?",
  author: "Rahma Oda",
  date: "2026-01-15",
  heroImage: '/images/articles/somaliland-israel-recognition.jpg',
  body: [
    {
      type: 'paragraph',
      text: (
        <>
          Somaliland, a former British protectorate, voluntarily joined with Italian Somaliland in 1960 but the union quickly faced political marginalization and conflict. Following a brutal civil war and the 1991 collapse of the Somali state, Somaliland{' '}
          <a href="https://www.cfr.org/backgrounders/somaliland-horn-africas-breakaway-state" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            unilaterally declared independence
          </a>
          . For over three decades, it has maintained its own government, currency, and elections, yet it remains{' '}
          <a href="https://law.lclark.edu/live/files/24272-a-shadow-on-tomorrows-dreams-somalilands-struggle" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            internationally unrecognized
          </a>{' '}
          as most states prioritize Somalia&apos;s territorial integrity.
        </>
      )
    },
    {
      type: 'heading',
      text: "A Diplomatic Breakthrough: Israel's 2025 Declaration"
    },
    {
      type: 'paragraph',
      text: (
        <>
          On 26 December 2025, Israeli Prime Minister{' '}
          <a href="https://www.aljazeera.com/news/2025/12/26/israel-becomes-first-country-to-recognise-somaliland" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Benjamin Netanyahu announced
          </a>{' '}
          that Israel would become the first United Nations member state to formally recognize the Republic of Somaliland. The announcement was made through a joint statement signed by Netanyahu, Israeli Foreign Minister Gideon Sa&apos;ar, and Somaliland President Abdirahman Mohamed Abdullahi, in which both sides declared the establishment of diplomatic relations. The Israeli government framed the move within the spirit of the{' '}
          <a href="https://www.state.gov/the-abraham-accords" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Abraham Accords
          </a>
          , portraying Somaliland as a potential new frontier of the 2020 Trump Brokered Normalization Agenda. For its part, Somaliland expressed its intention to join the Abraham Accords, signalling a strategic alignment with Israel. The two governments outlined plans to cooperate economically particularly in agriculture, technology, and social development as well as in areas related to peace and regional stability, citing shared experiences with insecurity. While celebrated in Somaliland, the move faced &quot;unequivocal rejection&quot; from a coalition of 22 Arab and Islamic states, as well as powers like China, Russia, and the UK.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          However, Israel followed up its decision with concrete diplomatic engagement. On 6 January 2026,{' '}
          <a href="https://www.aljazeera.com/news/2026/1/6/israeli-fm-visits-somaliland-after-world-first-recognition-storm" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Israeli Foreign Minister Gideon Sa&apos;ar made a historic visit to Hargeisa
          </a>
          , becoming the first Israeli foreign minister to visit Somaliland. During the visit, Sa&apos;ar held bilateral talks with President Abdirahman Mohamed Abdullahi (Irro), signalling that Israel&apos;s recognition was not merely symbolic but a functional upgrade in relations. Both sides announced plans to establish a resident Israeli embassy in Hargeisa and expand engagement beyond political symbolism into security, social, economic, and technological domains. This diplomatic follow-through elevated the recognition from a declaratory act into an institutional commitment, raising the strategic stakes for Somalia and regional powers with competing interests in the Horn of Africa.
        </>
      )
    },
    {
      type: 'paragraph',
      text: "Israel's recognition is largely seen as a strategic calculation to secure influence along the Bab el-Mandeb Strait, a vital chokepoint for one-third of global maritime trade. By establishing ties with Somaliland, Israel gains a partner on the Red Sea corridor, allowing it to protect trade routes and counter regional adversaries like Iran."
    },
    {
      type: 'heading',
      text: 'The Turkey-Somalia Alliance and Regional Blowback'
    },
    {
      type: 'paragraph',
      text: "Turkey, a primary ally of Somalia, has emerged as a vocal opponent. Having invested heavily in Somalia's state-building, Turkey views the recognition as a threat to its military and economic interests. Ankara has since doubled down on its security framework with Mogadishu, exploring the creation of a naval base and spaceport as a counterweight to Israeli-UAE influence in the region."
    },
    {
      type: 'paragraph',
      text: (
        <>
          At the same time, Turkey&apos;s response must be understood within the context of its often-strained relationship with Israel. Prior to recognizing Somaliland,{' '}
          <a href="https://www.primeminister.gr/en/2025/12/22/37647" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Israel convened a trilateral summit with Greece and Cyprus
          </a>{' '}
          (who are, together with Turkey, historically allies of Palestine), during which the leaders emphasized their commitment to countering what they described as the &quot;growing and destabilizing regional influence of Turkey&quot;, particularly in the Eastern Mediterranean and adjacent regions. This underscores a strategic alignment that seeks to limit Ankara&apos;s maritime reach and challenge its assertive foreign policy.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Gaza Context and Palestinian Question'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Israel&apos;s recognition of Somaliland must also be viewed against the backdrop of the ongoing war in Gaza, which has drawn widespread international condemnation and calls for accountability under international law over the recent years. From this perspective, the move is seen as an attempt to reconfigure Israel&apos;s diplomatic relationships at a time when pressure to address the Palestinian question is intensifying. Observers contend that engaging Somaliland allows Israel to circumvent Palestinian demands, given that relations with Israel have historically depended on states&apos; positions on Palestinian self-determination. This concern is heightened by{' '}
          <a href="https://www.timesofisrael.com/somaliland-official-confirms-talks-with-israel-on-hosting-a-military-base/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            reports
          </a>{' '}
          that Somaliland has shown openness to resettling Palestinians, a proposal widely criticized as deflecting from the political roots of Palestinian displacement. Former Israeli diplomat, Alon Pinkas, described this as a{' '}
          <a href="https://www.youtube.com/watch?v=GN5tYuyvp34&t=1068s" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            &quot;A cheap way out&quot;
          </a>{' '}
          for Israel, arguing that it diverts attention from Israel&apos;s responsibilities under international law.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Risks of Secessionism across Africa'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Historically, the emergence of states like Eritrea (1993) and South Sudan (2011) has shown that contested recognition can exacerbate local conflicts. Israel&apos;s unilateral move sets a precedent that may embolden other secessionist groups across the fragile Sahel and the wider continent to bypass multilateral frameworks in search of external patrons. This shift highlights a significant institutional inconsistency within the African Union (AU). Although a 2005 AU mission famously labeled Somaliland&apos;s case as{' '}
          <a href="https://www.americanrhetoric.com/speeches/PDFFiles/au-fact-finding-mission-to-somaliland-30-april-to-4-may-2005.pdf" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            &quot;unique and self-justified&quot;
          </a>
          , the organization&apos;s current opposition reflects a strategic recalibration driven by regional allies rather than legal principles.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Security Risks and Economic Caution'
    },
    {
      type: 'paragraph',
      text: 'Strategically, Somaliland\'s proximity to the Bab el-Mandeb Strait makes it a prime location for potential Israeli intelligence or military assets to monitor Houthi forces in Yemen. However, this risks transforming Somaliland into a "hostile node" for the Houthi-Iran axis, potentially instrumentalizing the territory for foreign security interests rather than genuine state-building. On the economic front, while Somaliland\'s stability has already attracted interest from the UAE and China, Israel\'s recognition does not guarantee an investment boom. Instead, many international investors may adopt a "wait-and-see" approach to observe how global powers respond to this diplomatic shift.'
    },
    {
      type: 'heading',
      text: 'A Symbolic Act or a Geopolitical Shift?'
    },
    {
      type: 'paragraph',
      text: 'While Israel\'s recognition has brought Somaliland\'s 34-year struggle into the global spotlight, the move remains diplomatically isolated, as no other Abraham Accords signatories have followed suit. Ultimately, Somaliland risks becoming a proxy in a larger contest for Red Sea security. Its path to wider legitimacy will depend on whether this act triggers a "domino effect" or remains a singular strategic gesture.'
    }
  ]
};

// --- Main Component ---
export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      <MetaTags />

      <article className="max-w-4xl w-full">
        <Link href="/what-we-do/research-publications" className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-8">
          &larr; Back to Research & Publications
        </Link>
        
        {/* Hero Image */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={articleData.heroImage}
            alt={articleData.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            priority
          />
        </div>

        {/* Photo Credit - update as needed */}
        <p className="text-xs text-gray-500 mt-2 mb-6 text-right">
          Photo Credits: Getty Images
        </p>

        {/* Article Header */}
        <header className="mb-8 p-6 bg-white rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#050505] mb-2">
            {articleData.title}
          </h1>
          <div className="text-gray-600 text-sm md:text-base">
            <p className="font-semibold">{articleData.author}</p>
            <p className="font-light">{articleData.date}</p>
          </div>
        </header>

        <section className="bg-white p-6 md:p-10 rounded-xl shadow-md">
          <div className="prose max-w-none text-gray-800">
            {articleData.body.map((block, index) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="text-lg leading-relaxed mb-6">
                      {block.text}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold mt-8 mb-4">
                      {block.text}
                    </h2>
                  );
                case 'list':
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-6">
                      {block.items.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </section>
      </article>
    </div>
  );
}
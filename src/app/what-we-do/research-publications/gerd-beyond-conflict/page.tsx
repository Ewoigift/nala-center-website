'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link'; 
import { ReactNode } from "react";
// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
// This is the complete, final URL for the article, used for canonical and sharing purposes.
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/gerd-beyond-conflict`; 

// --- Define Block Types ---
// ... (omitted for brevity, no changes here)

// --- Define Article Data Type ---
interface ArticleData {
  title: string;
  author: string;
  date: string;
  heroImage: string;
  body: Block[];
}

// --- Component for SEO and Social Media Meta Tags ---
// IMPORTANT: Image and URL fields MUST be absolute for external crawlers.
const MetaTags = () => {
  // 1. Construct the absolute URL for the image
  const ABSOLUTE_IMAGE_URL = `${BASE_DOMAIN}${articleData.heroImage}`;
  
  return (
    <>
      {/* Canonical Link: Essential for SEO */}
      <link rel="canonical" href={FULL_ARTICLE_URL} />
      
      {/* Standard Open Graph Tags */}
      <meta property="og:title" content={articleData.title} />
      {/* Use the ABSOLUTE_IMAGE_URL here */}
      <meta property="og:image" content={ABSOLUTE_IMAGE_URL} /> 
      <meta property="og:url" content={FULL_ARTICLE_URL} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="nalacenter.org" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NalaCenter" />
      <meta name="twitter:title" content={articleData.title} />
      {/* Use the ABSOLUTE_IMAGE_URL here */}
      <meta name="twitter:image" content={ABSOLUTE_IMAGE_URL} /> 
    </>
  );
};


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


// --- Define Article Data Type ---\
interface ArticleData {
  title: string;
  author: string;
  date: string;
  heroImage: string;
  body: Block[];
}

// --- Your Original Article Data ---
const articleData: ArticleData = {
  title: "GERD Beyond Conflict: Unlocking Regional Value & Cooperation in the Horn of Africa",
  author: "Rahma Oda",
  date: "2025-10-13",
  heroImage: '/images/articles/gerd-beyond-conflict.jpg',
   body: [
    {
  type: 'paragraph',
  text: ' An important turning point in the history of infrastructure in the Horn of Africa was reached in September 2025 when the turbines of the Grand Ethiopian Renaissance Dam (GERD) were synchronized to Ethiopia\'s national grid. For Ethiopians, it represented national aspirations and the prospect of increased export earnings but for Observers Downstream, It rekindled long-standing worries about water security. For years there was this idea that GERD is a hydro geopolitical wedge, an idea which was strengthened majorly by international coverage, which frequently framed the project in terms of \"water wars.\"'
}
,
    {
      type: 'paragraph',
      text: 'However, this framing might be becoming less and less effective. Now that the wall has been constructed, the reservoir is full, and the turbines are operating, the dam\'s physical reality cannot be changed. Since the dam\'s physical reality is now fixed, the focus shifts from its existence to the regional value it can produce outside of Ethiopia and electricity.  With this reinterpretation, GERD can be viewed less as a cause of conflict and more as a new kind of opportunity, especially by establishing a regional market for public goods like clean renewable electricity, food security, new regional integration and collaboration, Boost to Economic Development & Industrialization etc'
    },
    {
      type: 'heading',
      text: 'Historical Background: Colonial Treaties and Renaissance Dreams'
    },
    {
      type: 'paragraph',
      text: 'Asymmetries have long influenced the hydro politics of the Nile Basin. Ethiopia, the source of the majority of the Blue Nile\'s flow, was not given a formal share of the water allotted to Egypt and Sudan by treaties signed in 1929 and 1959. This was considered a legal and symbolic exclusion by successive Ethiopian governments. Ethiopia launched GERD in 2011, funding it domestically and starting construction without a previous basin-wide agreement, in response to the rapid economic growth of the 2000s and the changing regional dynamics following the Arab uprisings.'
    },
    {
        type: 'paragraph',
        text:'Phases of filling the reservoir alternated with mediated talks in Washington, and the UN Security Council. Sudan\'s stance varied mainly because of its internal politics, while Egypt sought diplomatic and security measures to safeguard what it views as its historical water rights. The dam made steady progress in spite of this turbulence, reaching its design capacity by 2024. How the dam will be incorporated into regional economic and governance structures is still up for debate.'
    },
    {
      type: 'heading',
      text: 'Physical and Technical Parameter'
    },
    {
  type: 'paragraph',
  text: 'The GERD is located on the Blue Nile River, in the Benishangul-Gumuz Region, Ethiopia. It\'s the biggest roller-compacted concrete dam in Africa that also includes a Saddle Dam made as a Concrete Faced Rock Fill Dam (CFRD) where needed. Its 145 meters high and 1,780 meters (≈ 1.78 km) long and its reservoir capacity is 74billion cubic meters.  GERD has 13 turbines and in turn It can generate up to 5,150 megawatts of electricity enough to power millions of homes and can be shared across Ethiopia and neighbouring countries. The dam has Over a thousand embedded sensors which can provide real-time data on its safety, transforming the structure into a publicly accessible resource. Ethiopia, Sudan, and Egypt can all access the same real-time dashboard for factual information and establishing the foundation for a collaborative &quot;Nile data utility&quot; that would support any regional power and water market.'
},

    {
      type: 'heading',
      text: 'Emerging Avenues for Regional Value Creation'
    },
    {
  type: 'paragraph',
  text: 'The Grand Ethiopian Renaissance Dam (GERD) has the potential to become the most successful multi-country public-good platform in the Horn of Africa. GERD offers untapped potential as a venue for regional public goods in addition to its function in power generation;'
}
,
    {
  type: 'list',
 items: [
    '<strong>Carbon and Biodiversity Credits:</strong> Watershed management in Ethiopia and wetland restoration in Sudan can both benefit from controlled flows. When combined, these efforts can capture measurable amounts of carbon, which can then be sold as carbon credits or climate bonds to earn extra foreign income.',
    '<strong>Parametric Drought and Flood Insurance:</strong> A transparent index for insurance products can be offered by real-time, reservoir-level data updates. Farmers in Ethiopia, Sudan, and Egypt may be able to afford drought and flood insurance as a result, lowering their susceptibility to climatic fluctuations and drawing in foreign reinsurers.',
    '<strong>Future Water and Energy Plans:</strong> A superior, impenetrable record of Blue Nile flows can be obtained by GERD\'s telemetry. Making this data publicly available can help riparian states reduce their borrowing costs by supporting early-warning systems for financing food security, Floods, drought, and even risk-adjusted sovereign bond issuance.',
    '<strong>Ammonia & Green-Hydrogen Regional Center:</strong> The GERD dam can provide a steady supply of clean electricity (about 15 terawatt hours each year), which can be used to make green hydrogen in the Ethiopian lowlands. This is done by using extra power when demand is low to run machines that split water into hydrogen. The reservoir works like a giant battery, helping keep energy supply stable. This hydrogen can then be turned into green ammonia, which is useful for making fertilizer and can also be exported through Djibouti’s port to markets in Europe and Asia. By producing their own fertilizer, Ethiopia could save around US $1.2 billion every year on imports. It also creates a new product to trade, using stored water without reducing water for downstream users.',
    '<strong>Boost regional food security:</strong> 6.Ethiopia and most country in Horn of Africa grapple with food insecurity. Gerd, by regulating water flow throughout the year, can provide a more reliable supply of water for irrigation downstream particularly to Sudan that has recurrent conflicts which further perpetuates food insecurity. This helps farmers to grow crops more consistently, even during dry seasons. With better irrigation, Horn can increase food production, reduce their dependence on food imports, and improve livelihoods for millions of people who rely on agriculture.' 
]
}
,
    {
      type: 'heading',
      text: 'Conclusion'
    },
   {
  type: 'paragraph',
  text: 'For more than a decade, the GERD has often been portrayed as a zero-sum contest where one country\'s gain in electricity and its general economy set against another\'s fear of water loss. But this narrow framing misses the bigger picture. Beyond the allocation of water, the dam\'s true potential lies in the economic and environmental value it can generate collectively. If regional stakeholders, supported by multilateral institutions, establish strong and inclusive governance structures, GERD can shift from being a source of division to a foundation for shared growth and resilience. There is need for reframing the conversation around public goods and cooperative opportunities, where the Horn of Africa must seize this opportunity to move past political disputes and build a collaborative regional market that benefits not just Ethiopia, but the entire region.'
},
    
],
};



// --- Main Component ---
export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Include Meta Tags (simulated <head> content) */}
      <MetaTags />

      {/* Container for the article content */}
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
            priority
          />
        </div>

        {/* Photo Credit added here as requested */}
        <p className="text-xs text-gray-500 mt-2 mb-6 text-right">
          Photo Credits: Reuters
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
                  // This allows us to embed JSX (like Link/a tags) directly into the paragraph text.
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
                  // Using dangerouslySetInnerHTML to allow HTML (like strong/a tags) within list items
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

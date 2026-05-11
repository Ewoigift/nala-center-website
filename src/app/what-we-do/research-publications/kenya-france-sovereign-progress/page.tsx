'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/kenya-france-sovereign-progress`;

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
  title: "The Price of Presence: Can Kenya Turn French Partnerships into Sovereign Progress?",
  author: "Getrude Maina",
  date: "2026-05-11",
  heroImage: '/images/articles/kenya-france-sovereign-progress.jpg',
  body: [
    {
      type: 'paragraph',
      text: (
        <>
          With the Africa Forward Summit opening in Nairobi this week, Kenya stands at a crossroads between becoming a permanent market for French high-tech goods or a sovereign co-producer of its own future. This is not just a diplomatic milestone; it is a reckoning of Kenya's strategic value. As France{' '}
          <a href="https://qiraatafrican.com/en/19018/why-frances-focus-is-shifting-to-anglophone-africa/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            recalibrates its Africa strategy
          </a>{' '}
          toward stable partners, Nairobi has emerged as the gateway to a{' '}
          <a href="https://www.trade.go.ke/france-business-guide-launched-boost-investment-kenya" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            USD 300 billion East African market
          </a>
          . Yet beneath the high-level handshakes lies a stark structural reality: since 2015, France has invested over 1.8 billion EUR in Kenya, but the trade balance remains fundamentally asymmetrical. Kenya continues to export low-value agricultural produce while French firms capture the high-value technological and processing stages. The challenge for Nairobi is to ensure that its global visibility translates into tangible industrial gain, not just another bilateral investment forum.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Maritime Security as a Foundation for Economic Stability'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Kenya's sovereignty is anchored in the waters that carry 90 percent of its commerce. Maritime security — often treated as a military matter — is in fact the invisible infrastructure of economic stability. The docking of French warships at the Port of Mombasa in early 2026, under the{' '}
          <a href="https://www.mod.go.ke/news/kenya-and-france-sign-defence-cooperation-agreement/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Defence Cooperation Agreement
          </a>
          , marked a shift from symbolic cooperation to substantive capability. By exposing the Kenya Defence Forces (KDF) to real-time intelligence and advanced naval coordination, the partnership aims to stabilise the shipping lanes that sustain Kenya's industrial exports.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          This protection is vital because the Kenya Navy acts as the primary regulatory force safeguarding the Exclusive Economic Zone (EEZ). Yet the numbers suggest a lingering dependency. Uncertainty remains as to whether this exposure builds local capacity or reinforces reliance on external expertise. Without the internalization of this maritime infrastructure, Kenya's Blue Economy remains vulnerable to regional disruptions that threaten both the cost of living and small-scale coastal enterprises.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Structural Gap Between Growth and Inclusion'
    },
    {
      type: 'paragraph',
      text: (
        <>
          <a href="https://ieakenya.or.ke/blog/kenyas-debt-story-structural-vulnerabilities-and-the-path-to-a-sustainable-trajectory/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Kenya's domestic economy
          </a>
          , with a debt-to-GDP ratio projected to reach 64 percent by 2026, constrains its bargaining power in international negotiations. Limited fiscal space often pushes the government to prioritize immediate capital inflows — including those from the{' '}
          <a href="https://www.kbc.co.ke/kenya-france-unveil-new-era-of-forward-looking-bilateral-partnership/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            140 French firms
          </a>{' '}
          operating from the country — over the long-term structural reforms needed to strengthen local industry. This dynamic produces a dual economy: headline growth driven by foreign investment coexists with weak inclusion at the micro level.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          The clearest indicator of this gap lies in Kenya's MSME sector. Currently, only 0.7 percent of licensed MSMEs have reached the medium-sized threshold necessary to integrate into formal export chains (KNBS, 2025). Because most remain outside structured supply networks, they cannot leverage the market access provided by agreements such as the{' '}
          <a href="https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/east-african-community-eac/eu-kenya-agreement/agreement-explained_en" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            EU–Kenya Economic Partnership Agreement (EPA)
          </a>
          . As a result, foreign capital expands Kenya's productive capacity without embedding domestic firms into global value chains.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Addressing this requires enforceable industrial policy.{' '}
          <a href="https://vizier.report/p/morocco-automotive-industry" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Morocco's partnership with French automotive firms
          </a>{' '}
          offers a useful precedent: investment was tied to{' '}
          <a href="https://www.policycenter.ma/sites/default/files/2024-01/RP_03-24%20%28Najib%20Ilham%20%26%20Eduardo%20Haddad%29.pdf" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            local content requirements of 65 percent
          </a>
          . By adopting similar performance-linked criteria, Nairobi could transform trade deals from simple market-access agreements into catalysts for domestic industrialization. In this way, foreign capital would translate into sovereign progress.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Balancing Visibility and Autonomy'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Nairobi's selection as the co-host of the Africa Forward Summit — the first non-Francophone nation to do so — underscores its emergence as a continental diplomatic hub. The planned{' '}
          <a href="https://www.developmentaid.org/news-stream/post/195484/nairobi-to-host-three-new-global-un-offices" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            relocation of three major United Nations offices
          </a>{' '}
          (UNICEF, UN Women, and UNFPA) to Nairobi by 2026 further consolidates the city's role as a center for African-led global engagement. This engagement, however, comes with strategic tension. As Kenya deepens cooperation with France, it must balance external partnerships with regional legitimacy.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          To sustain its reputation as a neutral broker, Kenya's convening power must rest on inclusive regional processes rather than bilateral optics. The durability of the Kenya–France relationship will depend on Nairobi's ability to channel French support toward{' '}
          <a href="https://masharikirpc.org/strengthening-regional-peace-building-initiatives-kenyas-role-in-mediating-the-sudanese-conflict/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            strengthening institutions such as IGAD and the African Union (AU)
          </a>
          . Doing so would transform external collaboration into regional capacity, ensuring that Kenya's expanding diplomatic presence reinforces autonomy.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Path Forward'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Kenya's rising visibility is only meaningful if it can be converted into durable value at home. The measure of success at the 2026 Summit will not be the number of agreements signed, but whether those agreements embed enforceable mechanisms that prevent the economy from sliding deeper into the low-value trap. What is required now is a deliberate industrial strategy: one that mandates regular audits of strategic infrastructure, compels foreign ventures to integrate local sourcing, and channels external capital into sectors that expand opportunities for Kenya's youth.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Equally, Nairobi's diplomatic weight must be institutionalized. A Summit Transparency Portal and permanent secretariat within the State Department for Foreign Affairs would anchor accountability, ensuring that engagements amplify continental priorities rather than bilateral optics. By harnessing French expertise to reinforce African-led institutions such as IGAD, Kenya can reposition itself from a recipient of influence to a generator of regional consensus. The real test is whether Nairobi can turn visibility into value.
        </>
      )
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
          &larr; Back to Research &amp; Publications
        </Link>

        {/* Hero Image */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-black" style={{ aspectRatio: '16/7' }}>
          <Image
            src={articleData.heroImage}
            alt={articleData.title}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            priority
          />
        </div>

        {/* Photo Credit — left blank; update with confirmed credit */}
        <p className="mt-2 mb-6" />

        {/* Article Header */}
        <header className="mb-8 p-6 bg-white rounded-xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#050505] mb-2">
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
                    <p key={index} className="text-lg leading-relaxed mb-6 text-justify">
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
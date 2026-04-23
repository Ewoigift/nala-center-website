'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/sudan-numbers-unravelling`;

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
  title: "What the Numbers Say About Sudan's Unravelling",
  author: "Bravin Onditi",
  date: "2026-04-15",
  heroImage: '/images/articles/sudan-unravelling.jpg',
  body: [
    {
      type: 'paragraph',
      text: (
        <>
          On April 15, 2023, fighting broke out in Khartoum between the Sudanese Armed Forces and the paramilitary Rapid Support Forces. As the war enters its fourth year, Sudan now carries a grim distinction: the world's largest humanitarian and displacement crisis, one that the UN's own relief coordinator has called{' '}
          <a href="https://news.un.org/en/story/2026/04/1167293" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            an 'abandoned crisis.'
          </a>{' '}
          The numbers are not just statistics. They are a reckoning. This analysis draws on a landmark special report -{' '}
          <a href="https://www.undp.org/sudan/publications/beyond-conflict-report" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Beyond the Conflict: Charting a Path to Sustainable Growth and Development in Sudan
          </a>{' '}
          published in 2026 by the{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            African Futures & Innovation Programme at the Institute for Security Studies
          </a>
          . Using the International Futures forecasting platform, the report models Sudan's long-term development trajectory across three scenarios: the Current Path, a Sudan Rising recovery scenario, and a Protracted Conflict scenario extending to 2030. What emerges is not simply a portrait of a country at war. It is a warning about what happens when the international community watches and waits.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          More than{' '}
          <a href="https://www.genocidewatch.com/single-post/nine-million-people-have-fled-up-to-150-000-are-dead-no-one-is-talking-about-it" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            150,000 people
          </a>{' '}
          have been killed since the war began, though some estimates now reach as high as 400,000. Nearly 15 million people have been forced from their homes — a displacement figure that has no precedent in the world today. Of those, around 4.4 million have crossed into Chad, Egypt, and South Sudan. The rest are internally displaced, many of them living in areas where markets have collapsed, health facilities are shuttered, and clean water is a daily gamble.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Approximately 34 million people,{' '}
          <a href="https://healthpolicy-watch.news/sudans-catastrophic-civil-war-enters-fourth-year/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            65 percent of Sudan's entire population are in urgent need of humanitarian support
          </a>
          . Twenty-four million face{' '}
          <a href="https://www.wfp.org/emergencies/sudan" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            food insecurity
          </a>
          . In the agricultural heartlands of Darfur, Kordofan, and Gezira, some regions have recorded harvest losses of nearly 50 percent. Sudan, once described as Africa's potential breadbasket—a country with 19.8 million hectares of arable land and access to a fifth of the Nile's water resources—is watching its food systems disintegrate in real time. And yet, funding tells a different story. The 2026 humanitarian response plan requires 3 billion USD. Current funding sits at roughly 16 percent of that. A Berlin donor conference this week aimed to raise 1 billion USD—down from 4.2 billion USD sought in the 2025 plan, not because needs have fallen, but because donor ambition has. Sudan aid summits held in Paris and London in previous years both fell well short of their targets. The war in the Middle East continues to monopolise diplomatic attention and donor budgets, while Sudan bleeds quietly.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Economy That Conflict Ate'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Before the war, Sudan's economy was fragile but not without potential. It was the fourth-largest among Africa's low-income countries. Since April 2023, that foundation has been systematically dismantled. The country lost an estimated 6.4 billion USD in GDP in 2023 alone, the year the war began. GDP contracted by 12 percent that year and continued to shrink in 2024. Approximately 7 million additional people were pushed into extreme poverty in a single year. Ninety percent of manufacturing capacity in Khartoum, Gezira, Darfur, and Kordofan—where two-thirds of Sudan's industrial base was concentrated—has been destroyed. Agricultural yields{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            dropped by 15 percent in 2023
          </a>
          , with{' '}
          <a href="https://www.clingendael.org/sites/default/files/2024-12/Clingendael_Report_Sudans_agricultural_input_supply_war.pdf" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            millet production falling by 50 percent
          </a>
          . Annual inflation reached 170 percent in 2024. Public debt stood at 148 percent of GDP. The government's ability to deliver any services—health, water, education, security—has been gutted.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          The report's baseline scenario, which assumes peace by 2026,{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            projects average GDP growth of just 1.2 percent annually through 2043
          </a>
          . That is less than a quarter of the average growth rate of Africa's low-income countries. GDP per capita is expected to remain below early-1990s levels well into the 2040s. Extreme poverty, on this path, will affect nearly 40 percent of the population by 2043. In concrete terms: Sudan is not just losing a decade. It is losing several.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Perhaps the most painful measure of this war's depth is what it has done to children. More than{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            19 million school-aged children have had their education disrupted
          </a>
          . Only 20 percent of schools are currently operational. The rest have been destroyed, repurposed as shelters, or occupied by armed groups. Teachers go months without pay. Families already stretched to breaking point cannot afford uniforms, transport, or the absence of a child who might otherwise earn or farm. Girls are bearing a disproportionate share of this burden. Since the war began, girls are{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            dropping out of school at 2.5 times the rate of boys
          </a>
          . Child marriage has increased as a survival strategy in displaced communities. Those who do leave school after conflict rarely return. The report notes that by 2043, on the current trajectory, there will be only 78 female students for every 100 male students at university—a gender gap that did not exist in 2022. An entire cohort of young Sudanese women is being quietly written out of their country's future.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Health System That Is No Longer There'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Two-thirds of Sudan's population currently have no access to essential health services.{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Thirty-five percent of women lack access to reproductive health care
          </a>
          . Fifty-five percent of children are at risk from preventable diseases. Cholera, malaria, dengue, and measles are spreading through displaced communities where vaccination campaigns have collapsed and sanitation infrastructure has been destroyed. In the first three months of 2026 alone, nearly 700 civilians were killed in drone strikes—many of them near markets, schools, and health facilities.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          The report documents{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            3,396 survivors of sexual violence
          </a>{' '}
          who sought treatment in MSF-supported facilities across North and South Darfur between January 2024 and November 2025. In 87 percent of verified incidents of gender-based violence, the perpetrators were RSF fighters. These are the texture of what this war is doing to Sudanese women, systematically and deliberately.
        </>
      )
    },
    {
      type: 'heading',
      text: 'What Continuing This War Costs'
    },
    {
      type: 'paragraph',
      text: (
        <>
          The report's Protracted Conflict scenario—which models what happens if fighting continues to 2030—produces numbers that should stop any policymaker in their tracks. By 2043,{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            Sudan's GDP would be 34.5 USD
          </a>{' '}
          lower than it would be in a no-conflict scenario. GDP per capita would be roughly{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            1,700 USD less per person
          </a>
          . Extreme poverty would exceed 60 percent of the population, with 34 million more people in deprivation than if the war had never happened. These are not speculative projections. They are the compounding mathematics of a country being dismantled year by year.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Against this, the report offers the Sudan Rising scenario: what becomes possible if peace is restored and coordinated reforms are pursued across governance, agriculture, health, education, infrastructure, and trade. Under this pathway,{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            GDP reaches 58.2 billion USD by 2043—nearly 20 billion USD above the current trajectory
          </a>
          . Average growth accelerates to 5 percent. Life expectancy rises by 4.2 years. And 17.3 million people are lifted out of extreme poverty.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Window Is Narrowing'
    },
    {
      type: 'paragraph',
      text: (
        <>
          What the report makes clear, and what the fourth anniversary of this war demands we say plainly, is this: peace is necessary, but peace alone will not be enough. Sudan will need a genuine political settlement, the restoration of functioning state institutions, and a coherent, data-driven development agenda that prioritises governance reform, agricultural transformation, and inclusive economic recovery. It will also need international partners who remain at the table long after the cameras leave. Sudan ranks{' '}
          <a href="https://futures.issafrica.org/special-reports/country/sudan/index.html" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            170th out of 193 countries on the Human Development Index
          </a>
          . It has been called the most neglected crisis of 2025. It is entering its fourth year with no ceasefire in sight, funding at a fraction of what is needed, and a generation of children who have spent their formative years not in classrooms, but in displacement camps, rubble, and fear.
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
          &larr; Back to Research & Publications
        </Link>
        
        {/* Hero Image */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={articleData.heroImage}
            alt={articleData.title}
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            priority
          />
        </div>

        {/* Photo Credit */}
        <p className="text-xs text-gray-500 mt-2 mb-6 text-right">
          Photo Credits: Luis Tato/Getty Images
        </p>

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
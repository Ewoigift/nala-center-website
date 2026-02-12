'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/south-sudan-returning-to-war`;

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
  title: "Why South Sudan is Returning to Total War",
  author: "Bravin Onditi",
  date: "2026-02-03",
  heroImage: '/images/articles/south-sudan-total-war.jpg',
  body: [
    {
      type: 'paragraph',
      text: (
        <>
          After seven years of delicate peace and trapped transition, South Sudan's security landscape is undergoing a violent and perhaps irreversible collapse. On January 25, 2026, the South Sudan People's Defence Forces (SSPDF) announced the launch of "Operation Enduring Peace", a massive military offensive aimed at recapturing lost territories in the restive Jonglei state. Yet, the rhetoric emanating from the front lines suggests anything but peace. As military convoys move toward the Nuer heartlands of Nyirol, Uror, and Akobo, the{' '}
          <a href="https://news.un.org/en/story/2026/01/1166831" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            international community
          </a>{' '}
          might be witnessing the final, bloody collapse of{' '}
          <a href="https://docs.pca-cpa.org/2016/02/South-Sudan-Peace-Agreement-September-2018.pdf" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            the 2018 Revitalized Agreement on the Resolution of the Conflict (R-ARCSS)
          </a>
          .
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          With a senior commander{' '}
          <a href="https://www.aljazeera.com/news/2026/1/28/south-sudan-launches-offensive-against-opposition-forces-what-to-know" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            caught on film
          </a>{' '}
          ordering troops to "spare no lives," and the country's former First Vice President, Riek Machar, languishing under house arrest on treason charges, the facade of a "unity government" has effectively dissolved. What remains is an imminent return to a fragmented, ethnically charged civil war that threatens to surpass the horrors of the 2013–2018 conflict.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Military Impulse'
    },
    {
      type: 'paragraph',
      text: (
        <>
          The current escalation is not a sudden flashpoint but the climax of a steady security deterioration that began{' '}
          <a href="https://www.cfr.org/global-conflict-tracker/conflict/civil-war-south-sudan" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            in late 2025
          </a>
          . Following a series of humiliating battlefield losses, where a coalition of opposition forces and Nuer "White Army" militia seized critical outposts including the strategic town of Pajut on January 16, 2025, the government in Juba found itself backed into a corner.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Opposition forces, emboldened by their gains in central Jonglei, had begun signaling an advance toward the capital, Juba. The government's response, "Operation Enduring Peace," is an attempt to re-establish a security perimeter through overwhelming force. However, the operational orders have drastically affected security and humanitarian conditions in Jonglei. Civilians and humanitarian agencies in three Lou Nuer counties were given{' '}
          <a href="https://www.reuters.com/world/africa/south-sudan-orders-un-personnel-civilians-leave-parts-jonglei-state-2026-01-26/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            48 hours to evacuate
          </a>
          , essentially turning an entire region into a "free-fire zone." According to the UN,{' '}
          <a href="https://www.unocha.org/publications/report/south-sudan/south-sudan-conflict-jonglei-state-flash-update-no-2-27-january-2026" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            over 230,000 people
          </a>{' '}
          have been displaced in Jonglei in the last month alone, as aerial bombardments and ground assaults render vast swaths of the country uninhabitable.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Machar Factor'
    },
    {
      type: 'paragraph',
      text: (
        <>
          At the heart of this political disintegration is the fate of Riek Machar. For years, the 2018 peace deal rested on the precarious "odd couple" partnership between President Salva Kiir and Machar. That partnership ended in March 2025, when Machar was{' '}
          <a href="https://www.cfr.org/global-conflict-tracker/conflict/civil-war-south-sudan" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            suspended
          </a>{' '}
          and subsequently{' '}
          <a href="https://www.cfr.org/global-conflict-tracker/conflict/civil-war-south-sudan" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            arrested
          </a>{' '}
          following an attack by White Army fighters on a garrison in Nasir.
        </>
      )
    },
    {
      type: 'paragraph',
      text: "Today, Machar's ongoing trial for treason and crimes against humanity in Juba is viewed by many international observers and his loyalists as a politically motivated decapitation of the opposition. By criminalizing his peace partner, President Kiir has signalled that the era of a negotiated transition is effectively over—a reality that the opposition has now violently affirmed. Forces loyal to Machar have explicitly declared the 2018 peace agreement 'dead' and have escalated hostilities, seizing armouries and launching targeted attacks on government positions to challenge Juba's authority. While Kiir maintains a 'rump' opposition in the capital largely composed of co-opted figures, the center of strategic gravity has shifted back to these field commanders and the decentralized White Army. Perhaps the most alarming dimension of this resurgence is the government's instrumentalization of General Johnson Olony. A former rebel leader turned government ally, Olony leads the 'Agwelek' militia, primarily composed of ethnic Shilluk fighters. By deploying Olony's forces into Nuer-majority communities in Jonglei, Juba is intentionally igniting historical inter-communal rivalries to achieve military ends."
    },
    {
      type: 'paragraph',
      text: (
        <>
          The danger of this strategy was laid bare on January 24, when a video surfaced of General Olony addressing his troops in Duk County. His orders were chilling:{' '}
          <a href="https://www.sudanspost.com/the-general-who-wants-to-end-the-problem-with-massacre/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            "Spare no lives... don't spare an elderly, don't spare a chicken, don't spare a house."
          </a>{' '}
          Such rhetoric, which echoes the darkest chapters of South Sudan's history, has sent shockwaves through the region. The country is still reeling from the trauma of the 2013–2018 civil war, a conflict fought brutally along ethnic lines—primarily between Dinka and Nuer—that left an estimated 400,000 dead and millions displaced. Against this backdrop of unhealed wounds, the deployment is a 'propaganda gift' to the opposition. It facilitates mass mobilization among Nuer youth who, remembering the targeted atrocities of the past decade, view the current offensive not as a state 'law and order' operation, but as a renewed ethnic invasion. Consequently, the UN Commission on Human Rights in South Sudan has expressed 'grave alarm,' warning that this inflammatory rhetoric significantly heightens the risk of mass atrocities.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Humanitarian Abyss'
    },
    {
      type: 'paragraph',
      text: "The human cost of this political gamesmanship is staggering. South Sudan is currently grappling with a 'triple threat' of conflict, economic collapse, and climate-induced disasters. Even before the current offensive, 10 million people—roughly 84 percent of the population—required humanitarian assistance. Operation Enduring Peace has effectively shuttered the humanitarian space in Jonglei. The government-imposed no-fly zones in opposition areas and the forced evacuation of aid workers have cut off life-saving support to a population already reeling from years of severe flooding and skyrocketing food prices. In many Lou Nuer counties, the risk of famine is no longer a projection but an emerging reality. It is manifesting in the widespread abandonment of farmlands as civilians flee the violence, leaving crops unharvested during critical agricultural windows, while the blockade has caused local markets to collapse, pushing the cost of survival beyond the reach of the destitute. The war is being fought not just with bullets, but through the deliberate denial of access and the destruction of the agricultural cycles that sustain the population."
    },
    {
      type: 'heading',
      text: 'Regional Implications'
    },
    {
      type: 'paragraph',
      text: "The conflict is no longer a domestic affair; it is rapidly drawing in regional actors, threatening to turn South Sudan into a central node of a wider Horn of Africa conflagration. At the heart of this escalation is the \"Ugandan shadow.\" Several thousand Ugandan People's Defence Forces (UPDF) soldiers remain stationed in Juba to defend the presidency—a presence the opposition views as a violation of South Sudan's sovereignty and a fatal breach of the 2018 agreement. By openly declaring that any move against President Kiir is a \"declaration of war against Uganda,\" Kampala has traded its role as a regional mediator for that of a regime guardian. This partisanship complicates any future peace talks, as opposition commanders have warned they will target foreign \"mercenaries,\" potentially dragging Uganda into a protracted cross-border counter-insurgency. The prospect for containing this spillover is dimmed by the profound paralysis of regional institutions. The Intergovernmental Authority on Development (IGAD), once the primary vehicle for South Sudanese mediation, is currently at its lowest point of diplomatic efficacy. Paralyzed by internal rivalries between its member states—most notably the friction between Ethiopia, Kenya, and Sudan—IGAD has been unable to provide a unified or credible response to the collapse of the R-ARCSS. This institutional dysfunction has created a security vacuum, where \"preventive diplomacy\" has been replaced by unilateral military interventions. Without a functional regional arbiter, the conflict is drifting toward a \"free-for-all\" where neighboring states prioritize their own narrow security corridors over collective regional stability."
    },
    {
      type: 'heading',
      text: 'Conclusion: Beyond the Facade'
    },
    {
      type: 'paragraph',
      text: "With the December 2026 elections already postponed and the constitutional process stalled, the political roadmap that was supposed to guide the country toward stability has effectively collapsed. \"Operation Enduring Peace\" masks the attempt by the Kiir administration to consolidate power through military absolutism and risks plunging South Sudan into its third civil war in its 16 years of independence. By arresting Machar and unleashing ethnic militias like the Agwelek, the government has traded a fragile peace for the certainty of a protracted and multi-front war."
    },
    {
      type: 'paragraph',
      text: "For the international community, the challenge is no longer monitoring a peace agreement that has practically collapsed, but preventing a descent into mass atrocities. The \"spare no lives\" rhetoric from senior commanders must be met with immediate targeted sanctions and a reinvigorated regional diplomatic push. Without a return to genuine inclusive dialogue and the cessation of ethnically targeted offensives, peace in South Sudan will remain elusive."
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
          Photo Credits: SIMON MAINA/AFP via Getty Images
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
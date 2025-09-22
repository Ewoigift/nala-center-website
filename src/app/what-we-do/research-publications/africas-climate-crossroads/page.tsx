'use client';

import React from 'react';
import Image from 'next/image';

// --- Define Block Types ---
type ParagraphBlock = {
  type: 'paragraph';
  text: string;
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

// --- Your Article Data ---
const articleData: ArticleData = {
  title: "Africa's Climate Crossroads: From Nairobi's Promises to Addis Ababa's Demands",
  author: "Bravin Onditi",
  date: "2025-09-12",
  heroImage: '/images/articles/AfricasClimateCrossroads.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'The Second Africa Climate Summit (ACS2), convened in Addis Ababa, marks a critical inflection point for the continent. It builds on the foundational consensus of the 2023 Nairobi Declaration and pushes into the far more complex terrain of implementation and accountability. The central analytical question for policymakers is whether ACS2 can transform the political momentum of Nairobi into tangible, bankable, and equitable outcomes. Ultimately, the summit’s success will not be judged by the eloquence of its final communiqué, but by its ability to forge a pragmatic and unified African position that compels concrete commitments on reforming the global financial architecture, financing adaptation, and structuring truly just energy transition partnerships.'
    },
    {
      type: 'paragraph',
      text: 'The Nairobi Declaration correctly identified the imperative to reconcile climate action with development, a challenge that remains deeply unresolved across the continent. Africa contributes a negligible share of global emissions yet suffers disproportionately from climate impacts, making the pursuit of equity and climate justice unavoidable. This climate-development paradox frames Africa\'s entire negotiating posture. ACS2 is therefore less a negotiation about emissions reduction and more a demand for the tools to facilitate resilient development in a climate-constrained world.'
    },
    {
      type: 'heading',
      text: 'Deconstructing the Four Pillars of the ACS2 Agenda'
    },
    {
      type: 'paragraph',
      text: 'The agenda for Addis Ababa is structured around four interdependent pillars. A critical analysis of each reveals both significant leverage points for the continent and profound structural barriers that must be overcome.'
    },
    {
      type: 'heading',
      text: 'Pillar I: The Just Energy Transition'
    },
    {
      type: 'paragraph',
      text: 'The ambition to install 300 GW of renewable energy capacity by 2030 was a cornerstone of the Nairobi Declaration. However, current data reveals a significant credibility gap between this target and the investment reality. With installed capacity reaching only 72 GW in 2023 and forecasts projecting a mere 169 GW by 2030, the vision is receding. This shortfall is a direct consequence of a global market failure: Africa attracts only 2 percent of the world\'s total clean energy investment. This is not due to a lack of potential, the continent\'s solar, wind, and green hydrogen resources are unparalleled but to structural barriers, including perceived risk, high costs of capital, and insufficient preparatory funding for bankable projects. While initiatives like the Sustainable Energy Fund for Africa (SEFA) are valuable, they operate at a scale insufficient to address the systemic investment drought. The continued reality of 623 million people without electricity makes closing this investment gap the primary precondition for any "just transition."'
    },
    {
      type: 'heading',
      text: 'Pillar II: The Primacy of Adaptation'
    },
    {
      type: 'paragraph',
      text: 'Given Africa\'s high vulnerability and low emissions profile, adaptation is not merely a priority; it is the central pillar of the continent\'s climate strategy. The financial scale of this need is immense, with costed Nationally Determined Contributions (NDCs) already standing at USD 1.6–1.9 trillion—a figure that does not even capture many uncosted local adaptation requirements.'
    },
    {
      type: 'paragraph',
      text: 'Progress at the global level has been wholly inadequate. The formal process to define measurable indicators for a Global Goal on Adaptation (GGA) has stalled, with no outcome expected before COP30. This procedural delay has real-world consequences, as it hampers the mobilization of predictable, at-scale adaptation finance. Pledges made to combat critical threats like drought, such as those at COP16, fall demonstrably short of the USD 191 billion needed annually for land restoration in Africa alone. While African cities and institutions are advancing resilience projects and early warning systems, these bottom-up efforts cannot substitute for a functional and well-resourced global adaptation framework.'
    },
    {
      type: 'heading',
      text: 'Pillar III: Leveraging Africa’s Green Potential'
    },
    {
      type: 'paragraph',
      text: 'Africa\'s vast natural capital represents a significant point of leverage. Its forests, which absorb 600 Mt of CO2 annually, position the continent as the world\'s largest carbon sink. The operationalization of international carbon markets under Article 6 of the Paris Agreement is a major development, providing a mechanism to monetize these services. Africa\'s current 16 percent market share indicates a promising start, but scaling this opportunity requires robust governance to ensure environmental integrity and equitable benefit sharing.'
    },
    {
      type: 'paragraph',
      text: 'However, this pillar also presents strategic risks. An over-reliance on carbon markets without addressing underlying drivers of deforestation could be counterproductive. Furthermore, balancing the expansion of vital industries like agriculture and the blue economy with biodiversity protection will require sophisticated land-use planning and policy frameworks. The objective must be to leverage these green assets not merely as offsets for distant polluters, but as foundational elements of a diversified, sustainable domestic economy.'
    },
    {
      type: 'heading',
      text: 'Pillar IV: Scaling-up Climate Finance'
    },
    {
      type: 'paragraph',
      text: 'This pillar is the lynchpin that connects all others. The current international financial architecture is not fit-for-purpose to address the dual climate and development crises facing Africa. Its failures are systemic:'
    },
    {
      type: 'list',
      items: [
        'Unfulfilled Pledges: The $100 billion annual finance goal was met for the first time only in 2022, years late, eroding trust.',
        'Insufficient Funds: The Loss and Damage Fund has mobilized just $768 million, a fraction of the estimated need.',
        'Debt Distress: With public debt representing about 25% of the continent\'s GDP, many nations are forced to divert scarce resources from climate action to debt servicing.',
        'Lack of Agency: Africa\'s inadequate representation and decision-making power within multilateral development banks (MDBs) perpetuate a cycle of policies that do not reflect the continent\'s realities.'
      ]
    },
    {
      type: 'paragraph',
      text: 'In response, African-led initiatives signal a strategic pivot towards creating parallel or alternative structures. The push for a UN Tax Convention to combat illicit financial flows and the observation of precedents like the International Maritime Organization\'s shipping emissions tax indicate a search for new, more reliable sources of finance that are not dependent on the political whims of donor countries. MDB reform remains central, but patience with the pace of change is wearing thin.'
    },
    {
      type: 'heading',
      text: 'Conclusion and Policy Recommendations'
    },
    {
      type: 'paragraph',
      text: 'The Second Africa Climate Summit is a crucial test of the continent\'s ability to transition from a unified voice of aspiration to a unified bloc of strategic action. The analytical evidence is clear: incremental adjustments to the existing global climate and financial systems will not suffice. The summit\'s success will be defined by its ability to secure commitments that begin to fundamentally recalibrate these systems. Africa must leverage its moral authority and its growing geopolitical importance to move from the margins to the center of global action.'
    },
    {
      type: 'paragraph',
      text: 'To that end, policymakers gathered in Addis Ababa should focus on securing the following outcomes:'
    },
    {
      type: 'list',
      items: [
        '<strong>Develop an African Carbon Market Integrity Framework:</strong> To maximize the value and credibility of its carbon assets, the AU, in partnership with the ECA, should spearhead the creation of a standardized, pan-African framework. This would govern carbon credit verification, ensure price transparency, and mandate community benefit-sharing mechanisms to prevent elite capture.',
        '<strong>Unified African Proposal for the Global Goal on Adaptation:</strong> Rather than waiting for stalled multilateral processes, the African Group of Negotiators should be mandated to develop and table a comprehensive proposal for the GGA framework ahead of COP30. This proposal should include concrete, quantifiable sub-targets on water security, food systems resilience, and universal access to early warning systems, along with a clear financing plan. This would shift Africa from a reactive to a proactive stance in these critical negotiations.'
      ]
    }
  ],
};

// --- Component ---
export default function AfricasClimateCrossroads() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4 md:p-8 lg:p-12">
        <header className="mb-8 md:mb-12">
          <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-xl shadow-lg mb-6">
            <Image
              src={articleData.heroImage}
              alt={articleData.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <p className="text-right text-gray-500 text-xs mt-2">
            Photo Credits: African Union
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">
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
      </main>
    </div>
  );
}

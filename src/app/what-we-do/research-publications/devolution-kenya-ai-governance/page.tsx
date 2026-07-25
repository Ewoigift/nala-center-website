'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/devolution-kenya-ai-governance`;

// --- Define Block Types ---
type ParagraphBlock = {
  type: 'paragraph';
  text: string | ReactNode;
};

type HeadingBlock = {
  type: 'heading';
  text: string;
};

type NumberedListBlock = {
  type: 'numbered-list';
  items: (string | ReactNode)[];
};

type Block = ParagraphBlock | HeadingBlock | NumberedListBlock;

// --- Define Article Data Type ---
interface ArticleData {
  title: string;
  author: string;
  date: string;
  photoCredit: string;
  heroImage: string;
  body: Block[];
}

// --- Reusable link style ---
const linkClass =
  'relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full';

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
  title: "The Missing Tier: Devolution and Kenya's Artificial Intelligence Governance",
  author: "Bravin Onditi", // ← TODO: confirm author name
  date: "2026-07-24",
  photoCredit: "Getty Images", // ← TODO: confirm photo credit
  heroImage: '/images/articles/devolution-kenya-ai-governance.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Discussion of artificial intelligence regulation tends to organise itself around two figures: the developer who builds a system and the deployer who puts it in front of a user. Both matter. In a devolved state, however, a third question sits beneath them and determines whether any rule will function in practice. Which level of government is responsible for what, and does that level have the capacity to carry the responsibility assigned to it.',
    },
    {
      type: 'paragraph',
      text: (
        <>
          Kenya is currently producing several artificial intelligence instruments at once. A national strategy is in
          implementation, a{' '}
          <a href="https://www.ict.go.ke/national-ai-policy-public-consultation/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            national policy is open for public comment
          </a>
          , a{' '}
          <a href="https://www.parliament.go.ke/senate/bills/artificial-intelligence-bill-2026" target="_blank" rel="noopener noreferrer" className={linkClass}>
            framework Bill is before the Senate
          </a>
          , and sectoral instruments are emerging from the Judiciary, from health regulation and from agriculture. Most
          commentary has assessed these instruments individually, on the merits of their definitions and penalty
          structures. Far less attention has been paid to the dimension that Kenya's constitutional structure makes
          unavoidable: artificial intelligence in the public sector will be deployed overwhelmingly in functions that
          belong to county governments, and the county tier is largely absent from the design conversation. That
          absence, rather than any dispute over risk categories, is the most consequential gap in the current moment.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'A Moment of Convergence',
    },
    {
      type: 'paragraph',
      text: (
        <>
          The instruments now in motion have arrived close together, which is an opportunity for coherence if their
          relationship is managed deliberately. The{' '}
          <a href="https://ict.go.ke/wp-content/uploads/2025/03/National-AI-Strategy-2025-2030.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
            National Artificial Intelligence Strategy 2025 to 2030
          </a>{' '}
          was launched on 27 March 2025, organised around AI digital infrastructure, data, and research and
          innovation, with an indicative requirement of KES 152 billion (approximately USD 1.19 billion) to 2030,
          with roughly half directed at infrastructure. The Strategy identified fragmented governance as one of the
          constraints it sought to address.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          In November 2025 the Ministry of Information, Communications and the Digital Economy began developing a{' '}
          <a href="https://www.ict.go.ke/national-ai-policy-public-consultation/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            National Artificial Intelligence and Other Emerging Technologies Policy
          </a>
          , working with the Kenya ICT Action Network as lead implementing partner. The draft policy was released for
          public comment on 21 July 2026, with submissions due by 4 August.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          In parallel, the{' '}
          <a href="https://www.parliament.go.ke/senate/bills/artificial-intelligence-bill-2026" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Artificial Intelligence Bill
          </a>{' '}
          was published on 19 February 2026 as Senate Bills No. 4 of 2026. The Bill adopts a four-tier risk
          classification broadly comparable to the{' '}
          <a href="https://artificialintelligenceact.eu/the-act/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            European Union's approach
          </a>
          , sorting systems into unacceptable, high, limited and minimal risk. It provides for an Office of the
          Artificial Intelligence Commissioner, a standards body operating a regulatory sandbox, and an advisory
          council. It creates rights to explanation and human review of automated decisions, addresses synthetic
          media, and provides for periodic review. Legislative activity also followed a High Court order of 6
          February 2026, issued in a petition at Kerugoya concerning the absence of safeguards for high-risk systems,
          which placed the timing question on the record.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'Where the Systems Will Actually Sit',
    },
    {
      type: 'paragraph',
      text: (
        <>
          The Bill classifies as high risk those systems used in healthcare, education, agriculture, finance,
          security, employment and public administration, and it binds public entities, counties included. Set that
          list against the{' '}
          <a href="https://www.constituteproject.org/constitution/Kenya_2010.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Fourth Schedule of the Constitution
          </a>{' '}
          and the significance becomes clear. County health services, agriculture, pre-primary education, county
          public works, trade development and regulation, county planning, and firefighting and disaster management
          are all devolved functions.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: 'In other words, four of the seven sectors the Bill treats as carrying the highest risk are delivered principally by the forty-seven county governments rather than by national ministries. When a triage tool is used in a county referral hospital, when an automated system scores applicants for a county bursary or a trade licence, when a revenue platform flags a business for enforcement, or when a pest and disease advisory system informs extension officers, the deploying entity is a county. The obligations the Bill creates — including impact assessment, record keeping, transparency and the provision of human review — would fall on county executives and their ICT departments. This determines whether the framework produces compliance or produces forty-seven divergent interpretations. It also determines cost, because assessment and documentation obligations carry a recurrent budgetary implication for entities whose allocations are already contested.',
    },
    {
      type: 'heading',
      text: 'Capacity at the Tier That Will Carry the Load',
    },
    {
      type: 'paragraph',
      text: (
        <>
          The capacity picture at the county level is thinner than the obligations would require. The closest
          existing analogue is data protection. The{' '}
          <a href="https://www.odpc.go.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Office of the Data Protection Commissioner
          </a>
          , which enforces the{' '}
          <a href="https://www.odpc.go.ke/dpa/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Data Protection Act 2019
          </a>
          , launched its Strategic Plan 2025 to 2029 on 4 July 2025. At that launch the office reported eight
          regional offices, serving clusters of counties, with a target of thirteen. The Data Commissioner put the
          estimated cost of implementation at KES 12.64 billion, with a funding gap of KES 3.675 billion. A
          regulator with a physical presence in a minority of the forty-seven counties, working against an unclosed
          funding gap, illustrates the practical distance between holding a national mandate and supervising its
          exercise at county level. Any new artificial intelligence regulator would begin from a comparable position,
          and would begin later.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          The same plan is instructive in a second respect. It proposes regulatory sandboxes for emerging
          technologies including artificial intelligence, alongside the pursuit of an adequacy decision from the
          European Union. An existing regulator is therefore already extending into the territory a new framework
          would occupy. That is an argument for deliberate allocation of functions between institutions, and between
          levels of government, before mandates are fixed in statute.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          Capacity building has started, but at the national tier. Senior public officers have been trained through
          the{' '}
          <a href="https://www.ksg.ac.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Kenya School of Government
          </a>{' '}
          using the UNESCO and Oxford course on artificial intelligence and digital transformation in government.
          Extending equivalent provision to county chief officers, county ICT directors, county health management
          teams and members of county assemblies is the step that would make national obligations operable — and it
          does not require the Bill to be enacted first.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'A Widening Set of Instruments',
    },
    {
      type: 'paragraph',
      text: 'The intergovernmental question is sharpened by the number of instruments now touching artificial intelligence from different directions. The draft Digital Agricultural Information Bill, 2026 defines digital technologies to include artificial intelligence, robotics, drones and remote sensing, and engages county governments directly in a function that is constitutionally theirs. The Judiciary has issued a draft artificial intelligence policy grounded in Article 159 of the Constitution, following a March 2026 matter in which the Milimani High Court struck out an application containing citations to cases that do not exist. The Pharmacy and Poisons Board is preparing rules for artificial intelligence tools in clinical settings. The Central Bank, the Communications Authority and the Competition Authority each exercise oversight within their existing remits.',
    },
    {
      type: 'paragraph',
      text: 'None of this is duplication in the pejorative sense. Sectoral regulators are responding to real and immediate questions within their competence. The risk is narrower and more manageable: without an agreed sequencing mechanism, instruments made at different levels and in different sectors may impose inconsistent obligations on the same county department, and the cost of reconciling them will fall on the tier least equipped to absorb it.',
    },
    {
      type: 'heading',
      text: 'What an Intergovernmental Design Would Address',
    },
    {
      type: 'paragraph',
      text: 'Two levers are available and underused. The first is procurement. National and county governments are collectively among the largest purchasers of digital systems in the Kenyan economy. Standard contractual conditions for public procurement of artificial intelligence systems — covering explainability, audit access, data ownership and liability — would establish enforceable practice across all forty-seven counties without waiting for a statute. Procurement moves faster than legislation and binds suppliers directly.',
    },
    {
      type: 'paragraph',
      text: 'The second is a common county readiness baseline. A shared assessment of where county systems already incorporate automated decision-making, conducted once and published, would give both the Ministry and the Senate an evidentiary basis they currently lack, and would tell counties what they are actually running.',
    },
    {
      type: 'heading',
      text: 'Prospects',
    },
    {
      type: 'paragraph',
      text: 'The consultation closing on 4 August 2026 is the nearest point at which the intergovernmental dimension can be written into the framework rather than added afterwards. If the final policy assigns explicit roles to national and county government and provides for an intergovernmental coordination mechanism, subsequent legislation has a structure to implement. If the tier question is left open, counties will continue deploying systems under general procurement rules while the framework is settled at national level, and the eventual statute will meet a landscape already formed.',
    },
    {
      type: 'heading',
      text: 'Recommendations',
    },
    {
      type: 'numbered-list',
      items: [
        'The final national policy should set out the respective roles of national and county government in artificial intelligence oversight, rather than treating counties solely as regulated entities.',
        <>
          The{' '}
          <a href="https://www.igrtc.go.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Intergovernmental Relations Technical Committee
          </a>{' '}
          and the{' '}
          <a href="https://cog.go.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Council of Governors
          </a>{' '}
          should be engaged formally before the framework is settled, consistent with the{' '}
          <a href="https://www.kenyalaw.org/kl/index.php?id=6100" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Intergovernmental Relations Act, 2012
          </a>
          .
        </>,
        <>
          The{' '}
          <a href="https://www.treasury.go.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            National Treasury
          </a>{' '}
          and the{' '}
          <a href="https://www.crakenya.or.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Commission on Revenue Allocation
          </a>{' '}
          should assess the recurrent cost to counties of compliance obligations attached to high-risk systems, so
          that any mandate is costed before it is imposed.
        </>,
        <>
          The{' '}
          <a href="https://ppra.go.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Public Procurement Regulatory Authority
          </a>{' '}
          should develop standard conditions for public sector procurement of artificial intelligence systems,
          applicable at both levels of government.
        </>,
        <>
          Capacity building through the{' '}
          <a href="https://www.ksg.ac.ke/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Kenya School of Government
          </a>{' '}
          should be extended to county executives, county ICT departments and county assemblies, with health and
          agriculture prioritised.
        </>,
        'County assemblies should be supported to conduct readiness assessments of automated systems already in use within their counties, and to publish the findings.',
      ],
    },
  ],
};

// --- Main Component ---
export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8 font-sans">

      <MetaTags />

      <article className="max-w-4xl w-full">
        <Link
          href="/what-we-do/research-publications"
          className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-8"
        >
          &larr; Back to Research &amp; Publications
        </Link>

        {/* Hero Image */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={articleData.heroImage}
            alt={articleData.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>

        {/* Photo Credit */}
        {articleData.photoCredit && (
          <p className="text-xs text-gray-500 mt-2 mb-6 text-right">
            Photo Credits: {articleData.photoCredit}
          </p>
        )}
        {!articleData.photoCredit && <p className="mt-2 mb-6" />}

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
                case 'numbered-list':
                  return (
                    <ol key={index} className="list-decimal list-outside space-y-4 mb-6 pl-6">
                      {block.items.map((item, i) => (
                        <li key={i} className="text-lg leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ol>
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
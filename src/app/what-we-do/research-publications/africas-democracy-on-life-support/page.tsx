'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/africas-democracy-on-life-support`;

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
  title: "Africa's Democracy on Life Support",
  author: "Bravin Onditi",
  date: "2025-11-03",
  heroImage: '/images/articles/africas-democracy-life-support.png',
  body: [
    {
      type: 'paragraph',
      text: 'Africa\'s democratic experiment is in deep crisis. Once hailed as the continent of promise, where multiparty politics and constitutional reform would herald a new dawn, much of Africa today finds itself in democratic regression. From the Sahel, Central Africa and the Great Lakes region, to the Horn of Africa, the signs are unmistakable: militarized politics, eroded civic space, manipulated elections, and rulers clinging to power in the name of "stability." Democracy in Africa, as once imagined through the wave of liberalization in the 1990s, is not dying quietly, it is being asphyxiated.'
    },
    {
      type: 'heading',
      text: 'From the Third Wave to the Third Term'
    },
    {
      type: 'paragraph',
      text: (
        <>
          The early 1990s witnessed Africa&apos;s great democratic awakening. The collapse of the Cold War order loosened authoritarian grips, prompting a continental rush toward constitutional reform. Countries like Zambia, Benin, Ghana, and Kenya embraced multiparty politics; the rhetoric of accountability and popular sovereignty spread fast. The{' '}
          <a href="https://www.cambridge.org/core/journals/journal-of-modern-african-studies/article/abs/democracy-and-multiparty-politics-in-africa/199420DA5FE01A763F9A06F7B9157D47" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            &quot;third wave&quot;
          </a>{' '}
          of democratization held the promise that political pluralism would deliver both legitimacy and development. But three decades later, that optimism has evaporated. The very leaders who rose to power on democratic promises now weaponize the same systems to stay entrenched. The &quot;third wave&quot; has morphed into a &quot;third term&quot; wave - presidents extending mandates through constitutional referenda or judicial manipulation. Each claims that continuity ensures progress, even as civic freedoms shrink and elections turn into ritualized affirmations of incumbency.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Meanwhile, opposition parties struggle to survive amid state intimidation, media censorship, and weaponized legal systems. In Tanzania, opposition figures{' '}
          <a href="https://horninstitute.org/tanzanias-opposition-crackdown-a-recipe-for-post-election-crisis/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            face harassment
          </a>{' '}
          and bans under the guise of preserving public order. In Zimbabwe, the ruling ZANU-PF retains power through{' '}
          <a href="https://hrf.org/latest/eight-ways-zimbabwes-regime-hijacked-the-2023-vote/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            coercion and a captured electoral commission
          </a>
          . Across the continent, ruling elites have mastered the art of governing through controlled elections allowing just enough competition to appear democratic, while ensuring outcomes remain predictable.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Elections Without Democracy'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Africa now hosts elections almost every year but few are genuinely competitive. The continent&apos;s political calendar is crowded, but its democratic heartbeat is faint. In 2025, more than a dozen African countries have gone or are set to go to the polls. Yet these contests are less about choice and more about systemic choreography. Elections increasingly serve to legitimize power, not transfer it. Take Côte d&apos;Ivoire, where Alassane Ouattara&apos;s{' '}
          <a href="https://issafrica.org/pscreport/psc-insights/cote-divoire-and-the-third-term-virus" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            controversial third term in 2020
          </a>{' '}
          set a precedent for constitutional elasticity. Or Guinea, where Alpha Condé{' '}
          <a href="https://www.prio.org/comments/733" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            rewrote the rules
          </a>{' '}
          to stay in office only to be overthrown by the military months later. Such cycles show how manipulation at the top invites instability below. When ballots fail to change regimes, bullets often do.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          In East Africa, Ethiopia&apos;s experiment with federal democracy has deteriorated into{' '}
          <a href="https://theconversation.com/ethiopias-two-bids-at-democracy-have-failed-what-it-will-take-to-succeed-263817" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            war and fragmentation
          </a>
          . In Sudan, a fragile transition{' '}
          <a href="https://www.genocidewatch.com/single-post/genocidal-civil-war-pushes-sudan-toward-the-abyss" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            collapsed into chaos
          </a>
          , where rival generals turned the democratic project into a battleground. Elections without integrity have birthed a new form of authoritarianism,{' '}
          <a href="https://africasacountry.com/2020/07/kenyas-electoral-authoritarianism" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            &quot;electoral authoritarianism.&quot;
          </a>{' '}
          The ballot box remains, but its meaning is hollowed out.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Coups, Counter-Coups, and the Militarization of Politics'
    },
    {
      type: 'paragraph',
      text: (
        <>
          The Sahel region embodies Africa&apos;s sharpest democratic decline. Since 2020, coups have swept Mali, Burkina Faso, Niger, Guinea, and Chad each justified as a corrective measure against corrupt civilian elites. Yet these military juntas have not restored order; they have deepened{' '}
          <a href="https://amaniafrica-et.org/briefing-on-the-sahel-region/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            repression and isolation
          </a>
          . In Mali and Burkina Faso, rulers Assimi Goïta and Ibrahim Traoré cast themselves as revolutionary saviors, confronting both{' '}
          <a href="https://horninstitute.org/why-burkina-faso-and-mali-face-the-dual-risk-of-jihadist-insurgency-and-coup/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            jihadism
          </a>{' '}
          and Western interference. Their rhetoric of sovereignty and anti-neocolonialism resonates with disillusioned populations, but beneath the populism lies a familiar pattern - the concentration of power in fatigues, not in institutions.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Across the continent, the line between soldier and statesman is again blurring. The African Union&apos;s{' '}
          <a href="https://amaniafrica-et.org/can-aus-anti-coup-norm-survive-a-scenario-in-which-the-military-leaders-of-all-suspended-countries-run-for-elections-following-the-precedent-in-chad-and-gabon/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            anti-coup norm
          </a>
          , once a continental success story, has lost credibility. Regional bodies like ECOWAS oscillate between sanctioning juntas and accommodating them for geopolitical convenience. The normalization of military rule signals not only institutional weakness but also a profound crisis of legitimacy - civilians no longer trust the ballot, and soldiers exploit that vacuum.
        </>
      )
    },
    {
      type: 'heading',
      text: 'The Shrinking Civic Space'
    },
    {
      type: 'paragraph',
      text: (
        <>
          If the ballot box is under siege, the civic sphere is being smothered. Civil society organizations, journalists, and human rights defenders{' '}
          <a href="https://www.trust.org/wp-content/uploads/legacy/weaponizing-law-attacks-media-freedom-report-2023.pdf" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            face mounting restrictions
          </a>{' '}
          under &quot;national security&quot; and &quot;anti-fake news&quot; laws. Governments have perfected the language of democratic control - criminalizing dissent while professing commitment to dialogue. In Uganda, opposition rallies are{' '}
          <a href="https://indepthnews.net/uganda-bans-opposition-rallies-detains-journalists/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            dispersed
          </a>{' '}
          on security grounds; in Ethiopia,{' '}
          <a href="https://www.hrw.org/news/2025/06/12/ethiopia-should-immediately-release-prominent-journalist" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            journalists are detained
          </a>{' '}
          for &quot;spreading false information.&quot; In Tanzania and Rwanda, social media regulations muzzle independent voices. Meanwhile, civic organizations that depend on donor support are branded as &quot;foreign agents.&quot; This{' '}
          <a href="https://monitor.civicus.org/watchlist-july-2025/" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            erosion of civic space
          </a>{' '}
          mirrors global trends of democratic backsliding, but its African manifestation is distinct: the state&apos;s coercive apparatus - police, intelligence, and military remains deeply politicized. The result is a paradoxical democracy: open on paper, repressive in practice.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Youth, Disillusionment, and the Crisis of Representation'
    },
    {
      type: 'paragraph',
      text: (
        <>
          Africa&apos;s population is the youngest in the world but its politics are the oldest. Leaders in their 70s and 80s preside over nations where the{' '}
          <a href="https://mo.ibrahim.foundation/sites/default/files/2020-08/international-youth-day-research-brief.pdf" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            median age is under 20
          </a>
          . This generational dissonance fuels cynicism and apathy among the youth, many of whom see politics not as a path to change but as a stage for elite recycling.
        </>
      )
    },
    {
      type: 'paragraph',
      text: (
        <>
          Movements like{' '}
          <a href="https://ng.boell.org/en/endsars-opportunity-nigeria" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            <strong>#EndSARS</strong>
          </a>{' '}
          in Nigeria and{' '}
          <a href="https://participedia.net/case/participatory-democracy-in-the-digital-age-the-case-of-feesmustfall" target="_blank" rel="noopener noreferrer" className="relative font-medium text-[#3A9D23] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#3A9D23] after:transition-all after:duration-300 hover:after:w-full">
            <strong>Fees Must Fall</strong>
          </a>{' '}
          in South Africa reveal a yearning for accountability and dignity beyond traditional party politics. Yet these bursts of activism often fizzle out under repression or co-optation. Across cities like Nairobi, Kinshasa, and Accra, young Africans are building alternative civic spaces - digital platforms, community initiatives, creative collectives that bypass state institutions altogether. The danger is not that Africa&apos;s youth are apolitical, but that they are post-political: skeptical of democracy&apos;s ability to deliver. As democracy loses credibility, populism gains ground.
        </>
      )
    },
    {
      type: 'heading',
      text: 'Beyond the Pulse'
    },
    {
      type: 'paragraph',
      text: 'If Africa\'s democracy is on life support, saving it requires more than ritual condemnation of coups or flawed elections. It demands institutional renewal and social ownership of politics. First, term limits must be sacrosanct not negotiable instruments of convenience. Constitutions should be shields against personal rule, not ladders to it. Second, civic education and local accountability structures must empower citizens to demand more than handouts and slogans. Third, regional organizations like the EAC, IGAD, SADC, ECOWAS, and the African Union must rebuild their moral authority, enforcing norms consistently rather than politically.'
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
            priority
          />
        </div>

        {/* Photo Credit - update as needed */}
        <p className="text-xs text-gray-500 mt-2 mb-6 text-right">
          Photo Credits: Pixabay
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
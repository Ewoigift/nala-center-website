'use client';

import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { ReactNode } from "react";

// --- Configuration for Social Sharing ---
const BASE_DOMAIN = 'https://nalacenter.org';
const FULL_ARTICLE_URL = `${BASE_DOMAIN}/what-we-do/research-publications/who-gets-to-be-a-pan-africanist`;

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
  title: "Who Gets to Be a Pan-Africanist?",
  author: "Bravin Onditi",
  date: "2026-05-11",
  photoCredit: "Getty Images",
  heroImage: '/images/articles/who-gets-to-be-a-pan-africanist.jpg',
  body: [
    {
      type: 'paragraph',
      text: (
        <>
          There is a word that has been spoken by freedom fighters in prison cells, by intellectuals in Paris, by trade
          unionists in Manchester, and by heads of state in Addis Ababa — and most recently, and most controversially,
          by a French president standing beside a Kenyan counterpart in Nairobi. That word is <em>Pan-Africanist</em>.
          But what does it actually mean to wear that name? And who has the right to claim it?
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          Pan-Africanism did not begin as a government policy. It began as a cry — the cry of people torn from their
          homeland and stripped of their names, who dared to imagine that Africa was still one. The{' '}
          <a href="https://thefunambulist.net/magazine/pan-africanism/haitian-revolution-in-pan-africanist-thought-annette-joseph-gabriel" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Haitian Revolution of 1791–1804
          </a>
          , in which enslaved Africans overthrew their French masters and founded the first Black republic in the
          Western Hemisphere, was Pan-Africanism in action long before it was Pan-Africanism in theory.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          The formal intellectual tradition is traced to the late nineteenth century, when figures like{' '}
          <a href="https://www.bu.edu/missiology/missionary-biography/a-c/blyden-edward-wilmot-1832-1912/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Edward Wilmot Blyden
          </a>{' '}
          began arguing for the unity of African peoples across the world. The movement took organised shape in 1900,
          when a Trinidadian barrister named Henry Sylvester Williams convened the{' '}
          <a href="https://www.ajhssr.com/wp-content/uploads/2022/01/ZD22601298308.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
            first Pan-African Conference
          </a>{' '}
          in Westminster Town Hall, London. Among the delegates was a young American scholar named{' '}
          <a href="https://www.britannica.com/biography/W-E-B-Du-Bois" target="_blank" rel="noopener noreferrer" className={linkClass}>
            W.E.B. Du Bois
          </a>{' '}
          — the man who would become the father of the modern Pan-African movement. Du Bois understood that the
          oppression of Black people in America, in the Caribbean, and in colonial Africa were not separate problems
          but one problem wearing different masks. While Du Bois built Pan-Africanism in conference halls,{' '}
          <a href="https://www.archives.gov/research/african-americans/individuals/marcus-garvey" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Marcus Garvey
          </a>{' '}
          built it on street corners. The Jamaican-born organiser founded the{' '}
          <a href="https://museumoftoronto.com/collection/marcus-garvey-and-the-unia/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Universal Negro Improvement Association (UNIA)
          </a>{' '}
          in 1914 with his partner Amy Ashwood, and by the 1920s it had grown into the largest Pan-African
          organisation in history. His slogan &quot;Africa for the Africans, those at home and those abroad&quot; would later
          inspire Nkrumah, Kenyatta, Malcolm X, and the Rastafarian movement.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'The Congresses',
    },
    {
      type: 'paragraph',
      text: (
        <>
          Between 1919 and 1945, Du Bois organised a series of{' '}
          <a href="https://www.britannica.com/topic/Pan-Africanism" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Pan-African Congresses
          </a>{' '}
          in Paris, Brussels, London, Lisbon, and New York. The{' '}
          <a href="https://credo.library.umass.edu/view/full/mums312-b209-i030" target="_blank" rel="noopener noreferrer" className={linkClass}>
            First Congress of 1919
          </a>{' '}
          was timed to coincide with the Versailles Peace Conference, where European powers were redrawing the world&apos;s
          borders without a single African voice at the table. Running alongside these political congresses was a
          parallel cultural revolt. In 1930s Paris, three Francophone writers — the Martinican poet{' '}
          <a href="https://www.britannica.com/art/Negritude" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Aimé Césaire
          </a>
          , the Senegalese{' '}
          <a href="https://www.britannica.com/biography/Leopold-Senghor" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Léopold Sédar Senghor
          </a>
          , and the French Guianese{' '}
          <a href="https://plato.stanford.edu/entries/negritude/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Léon Damas
          </a>{' '}
          — founded the <em>Négritude</em> movement, insisting that African culture was a civilisation of its own.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          The{' '}
          <a href="https://www.britannica.com/topic/Pan-Africanism" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Fifth Pan-African Congress
          </a>{' '}
          of October 1945, held in Manchester, was the turning point. Organised by{' '}
          <a href="https://www.britannica.com/biography/George-Padmore" target="_blank" rel="noopener noreferrer" className={linkClass}>
            George Padmore
          </a>
          , Kwame Nkrumah, and Jomo Kenyatta — and shaped by women like{' '}
          <a href="https://www.blackhistorymonth.org.uk/article/section/campaigners-and-activists/amy-ashwood-garvey-a-trailblazer-of-pan-africanism-and-feminism/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Amy Ashwood Garvey
          </a>
          , who co-chaired the opening session — the tone was no longer polite. The delegates demanded the end of
          colonialism, now.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'Pan-Africanism Comes Home',
    },
    {
      type: 'paragraph',
      text: (
        <>
          In December 1958, Kwame Nkrumah, now Prime Minister of newly independent Ghana, convened the{' '}
          <a href="https://www.tandfonline.com/doi/full/10.1080/21681392.2024.2443407" target="_blank" rel="noopener noreferrer" className={linkClass}>
            All-African Peoples&quot; Conference
          </a>{' '}
          in Accra. Where earlier conferences had been attended only by governments, the AAPC opened its doors to
          liberation movements, trade unions, and youth organisations. Among those profoundly shaped by it was a young
          Congolese politician named{' '}
          <a href="https://www.britannica.com/biography/Patrice-Lumumba" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Patrice Lumumba
          </a>
          .
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          But independence did not bring unity. By 1961, African states had split into two camps. The{' '}
          <a href="https://en.wikipedia.org/wiki/Casablanca_Group" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Casablanca Group
          </a>{' '}
          — Nkrumah of Ghana, Nasser of Egypt, Sékou Touré of Guinea — demanded an immediate, federal United States of
          Africa. The{' '}
          <a href="https://en.wikipedia.org/wiki/Monrovia_Group" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Monrovia Group
          </a>{' '}
          — led by Nigeria, Liberia, and Côte d&quot;Ivoire — argued for gradual cooperation that preserved national
          sovereignty. When the two camps met in Addis Ababa on{' '}
          <a href="https://en.wikipedia.org/wiki/Organisation_of_African_Unity" target="_blank" rel="noopener noreferrer" className={linkClass}>
            May 25, 1963
          </a>{' '}
          to found the Organisation of African Unity, it was the Monrovia vision that prevailed. Nkrumah&apos;s dream of a
          continental government was deferred — and remains deferred. That date became Africa Day, now observed each
          year across the continent and its diaspora. When the OAU was{' '}
          <a href="https://au.int/en/overview" target="_blank" rel="noopener noreferrer" className={linkClass}>
            transformed into the African Union in 2002
          </a>
          , the date remained. Today,{' '}
          <a href="https://au.int/en/agenda2063/overview" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Agenda 2063
          </a>{' '}
          and the{' '}
          <a href="https://au.int/en/african-continental-free-trade-area" target="_blank" rel="noopener noreferrer" className={linkClass}>
            African Continental Free Trade Area
          </a>{' '}
          are described by the AU itself as the institutional embodiment of &quot;the pan-African drive for unity,
          self-determination, freedom, progress and collective prosperity.&quot;
        </>
      ),
    },
    {
      type: 'heading',
      text: 'So, Who Is a Pan-Africanist?',
    },
    {
      type: 'paragraph',
      text: (
        <>
          A Pan-Africanist is someone who believes in the fundamental unity and shared destiny of African peoples
          across the continent and the diaspora — someone who understands that slavery, colonialism, neo-colonialism,
          and racism are not separate chapters but one continuous story. They work toward African political
          self-determination, economic sovereignty, and cultural dignity. They understand that foreign investment
          without African ownership is not development — it is a new form of extraction wearing a friendlier suit.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          The tradition runs from Du Bois and Padmore to the Martinican revolutionary{' '}
          <a href="https://www.britannica.com/biography/Frantz-Fanon" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Frantz Fanon
          </a>
          , the Trinidadian historian{' '}
          <a href="https://www.britannica.com/biography/C-L-R-James" target="_blank" rel="noopener noreferrer" className={linkClass}>
            C.L.R. James
          </a>
          , the Guinea-Bissauan revolutionary{' '}
          <a href="https://www.britannica.com/biography/Amilcar-Lopes-Cabral" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Amílcar Cabral
          </a>
          , the Guyanese scholar{' '}
          <a href="https://www.britannica.com/biography/Walter-Rodney" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Walter Rodney
          </a>
          , to heads of state like Nkrumah and Julius Nyerere — and to{' '}
          <a href="https://thisisafrica.me/politics-and-society/debt-cleverly-managed-reconquest-africa-thomas-sankara/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Thomas Sankara
          </a>{' '}
          of Burkina Faso, who at the 1987 OAU summit declared that &quot;debt is a cleverly managed reconquest of Africa.&quot;
          Three months later, he was assassinated. The tradition also runs through women whose names history has tried
          to bury:{' '}
          <a href="https://aaregistry.org/story/funmilayo-ransome-kuti-womans-rights-activist-born/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Funmilayo Ransome-Kuti
          </a>
          , Amy Jacques Garvey,{' '}
          <a href="https://dwomowale.medium.com/a-tribute-to-women-in-the-pan-african-struggle-9eab826cfa65" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Constance Cummings-John
          </a>
          , Charlotte Maxeke. The defining characteristic of a Pan-Africanist is not where they were born. It is whose
          interests they consistently defend, and whose structures they are willing to dismantle.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'Macron: "We Are the True Pan-Africanists"',
    },
    {
      type: 'paragraph',
      text: (
        <>
          Which brings us, unavoidably, to Nairobi, May 2026. At a press conference alongside Kenyan President William
          Ruto ahead of the{' '}
          <a href="https://www.diplomatie.gouv.fr/en/presse-et-ressources/decouvrir-et-informer/actualites/sommet-africa-forward-partenariats-entre-l-afrique-et-la-france-pour-l-innovation-et-la-croissance" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Africa Forward Summit
          </a>
          , French President Emmanuel Macron declared,{' '}
          <a href="https://www.financialafrik.com/en/2026/05/10/emmanuel-macron-we-are-the-true-pan-africanists/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            &quot;We are the true Pan-Africanists.&quot;
          </a>{' '}
          The summit, held on May 11 and 12, was the first Africa-France summit ever hosted in an English-speaking
          African country, and the first held against the backdrop of{' '}
          <a href="https://burkina-faso.news-pravda.com/en/russia/2026/05/22/6667.html" target="_blank" rel="noopener noreferrer" className={linkClass}>
            France&apos;s expulsion from the Sahel
          </a>{' '}
          — military regimes in Mali, Burkina Faso, and Niger having shown French troops the door between 2022 and
          2023. Macron announced a $27 billion investment package covering energy, artificial intelligence, and
          agriculture. But Pan-Africanism has never been impressed by the size of a cheque. It asks: Who controls the
          assets? Who sets the terms? Who benefits most?
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          France&apos;s relationship with Africa is not merely historical baggage. It is a living architecture of
          dependency. The most concrete symbol is the{' '}
          <a href="https://en.wikipedia.org/wiki/CFA_franc" target="_blank" rel="noopener noreferrer" className={linkClass}>
            CFA Franc
          </a>{' '}
          — a currency used by 14 African nations, pegged to the Euro and until recently backed by the French
          Treasury, with African countries required to deposit half their foreign exchange reserves in Paris. In
          December 2019, Macron and Ivorian President Alassane Ouattara announced a &quot;historic&quot; reform, renaming the
          West African version the{' '}
          <a href="https://www.africanews.com/2020/05/21/france-ratifies-law-officially-ending-75-years-of-west-africa-cfa/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Eco
          </a>
          . But economists like{' '}
          <a href="https://roape.net/2020/02/18/colonialism-without-colonies-france-africa-and-the-cfa-franc/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Ndongo Samba Sylla
          </a>{' '}
          argue the reform was{' '}
          <a href="https://blogs.lse.ac.uk/africaatlse/2020/03/19/cfa-franc-reforms-monetary-policy-symbolic-colonialism/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            largely cosmetic
          </a>{' '}
          — the currency remains pegged to the Euro, France retains a convertibility guarantee, and the Central
          African version is entirely untouched. A man who leads a country that administers such a system cannot, with
          intellectual honesty, claim the tradition of men and women who spent their lives fighting systems exactly
          like it.
        </>
      ),
    },
    {
      type: 'paragraph',
      text: (
        <>
          There is also something deeply revealing in Macron&apos;s conduct at the summit itself. Beyond the
          &quot;Pan-Africanist&quot; claim, he{' '}
          <a href="https://www.washingtonpost.com/world/2026/05/13/africa-macron-summit-kenya-interruption/3dc64406-4e89-11f1-97e7-22c6c29ff0d8_story.html" target="_blank" rel="noopener noreferrer" className={linkClass}>
            stormed a panel stage to rebuke African audience members
          </a>{' '}
          for what he called a &quot;total lack of respect.&quot; The image of a European leader, on African soil, publicly
          scolding an African audience tells its own story. Pan-Africanism was built precisely on the rejection of
          this kind of paternalism. By the only measure that matters, Emmanuel Macron is not a Pan-Africanist. He is a
          skilled diplomat representing the interests of a country with enormous stakes in maintaining African
          dependency. Calling oneself a Pan-Africanist while leading a country that continues to benefit from
          structural arrangements that Pan-Africanism exists to dismantle is not a political position. It is a
          contradiction.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'The Living Meaning',
    },
    {
      type: 'paragraph',
      text: (
        <>
          When former colonial powers begin to speak the language of Pan-Africanism, it is a sign of something
          important: the ideas have won enough ground to be worth co-opting. That is, in its way, a testament to the
          movements endurance. But the co-option is also a danger. If Pan-Africanism becomes a word that anyone can
          claim — regardless of structural position or genuine commitment to African sovereignty — then it loses its
          edge. It becomes decoration rather than weapon. A Pan-Africanist is someone who stands clearly and
          consistently on the side of African peoples&apos; right to determine their own political futures, control their
          own economies, and celebrate their own cultures — not as a favour granted by former colonial powers, but as
          an inalienable birthright that no summit declaration can substitute for.
        </>
      ),
    },
  ],
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

      {/* Hero Image — full viewport width */}
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
      <p className="text-xs text-gray-500 mt-2 text-right px-4 sm:px-6 lg:px-8">
        Photo Credits: {articleData.photoCredit}
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
// src/app/page.tsx - Updated headings with font-serif

export default function HomePage() {
  return (
    <main className="min-h-screen bg-chinese-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center text-baby-powder overflow-hidden">
        {/* Background Overlay for Image/Video */}
        <div className="absolute inset-0 bg-black-olive opacity-60 z-10"></div>
        {/* Placeholder for Image Backdrop or Video */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-background.jpg')" }}></div>

        <div className="relative z-20 p-6 md:p-8 max-w-5xl mx-auto">
          {/* Slogan / Tagline - Apply font-serif here */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight font-serif"> {/* Added font-serif */}
            Advancing Knowledge for a Sustainable Future
          </h1>
          {/* 2-line Value Proposition - This will default to font-sans (Source Sans Pro) */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Empowering communities through evidence-based research and collaborative solutions.
            <br />
            Driving impactful change for peace, prosperity, and resilience in the NALA region.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="p-8 md:p-12 bg-baby-powder text-black-olive">
        <div className="max-w-4xl mx-auto">
          {/* Apply font-serif to the heading */}
          <h2 className="text-3xl font-semibold mb-6 text-center font-serif">Overview of NALA Center</h2> {/* Added font-serif */}
          <p className="text-lg leading-relaxed">
            [Based on "NALA CENTER WEBSITE CONTENT.docx" and "NALA CENTER SITE CONTENT.docx"]:
            The NALA Center is dedicated to fostering peace, prosperity, and resilience in the NALA (Northern Africa, Levant, and Arabia) region. We achieve this by generating evidence-based research, engaging in impactful policy dialogues, and building local capacities. Our work aims to address critical challenges such as climate resilience, migration, governance, and sustainable development, providing actionable insights for policymakers and communities.
          </p>
        </div>
      </section>

      {/* ... (rest of your page.tsx content) ... */}
    </main>
  );
}
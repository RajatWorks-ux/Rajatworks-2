/**
 * SeoContent — Hidden semantic HTML for search engines & AI crawlers.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">Rajat Kumar Dua — Full-Stack Developer, React Native Engineer & UI/UX Designer</h1>
      
      <p itemProp="description">
        Self-taught full-stack developer and UI/UX designer from India — operating under the brand RajatWorks.
        Specialising in Next.js, React Native/Expo, GSAP, Three.js, Supabase, Appwrite, and AI API integrations (Groq, NVIDIA NIM).
        Available for freelance projects and remote full-time roles with small companies and agencies.
        Builds and ships everything from Android using Termux.
      </p>

      <p itemProp="jobTitle">Full-Stack Developer & UI/UX Designer</p>

      <section aria-label="Services">
        <h2>Services — Hire Rajat</h2>
        
        <article>
          <h3>Full-Stack Web Development</h3>
          <p>
            React, Next.js, TypeScript, Node.js. Cinematic web experiences with GSAP animations, Three.js 3D, and modern UI systems.
            Fast, SEO-optimised, production-ready websites and web applications.
          </p>
        </article>

        <article>
          <h3>Mobile App Development</h3>
          <p>
            React Native and Expo cross-platform apps for iOS and Android. Clean architecture, smooth animations, Supabase and Appwrite backends.
            From MVP to full product.
          </p>
        </article>

        <article>
          <h3>AI-Powered Products</h3>
          <p>
            Integration with Groq, NVIDIA NIM, and other AI APIs. AI video generation, intelligent app features, automation systems.
            Self-taught builder who ships AI-powered tools independently.
          </p>
        </article>

        <article>
          <h3>UI/UX Design</h3>
          <p>
            Modern, minimal, and intentional interface design using Figma.
            Portfolio websites, landing pages, mobile app UIs, and full design systems.
          </p>
        </article>

        <article>
          <h3>Automation & Outreach Systems</h3>
          <p>
            Python-based prospecting and cold outreach automation targeting small Indian businesses.
            Lead scraping, personalised messaging, and follow-up sequences.
          </p>
        </article>
      </section>

      <section aria-label="Portfolio Projects">
        <h2>Projects — RajatWorks</h2>
        <ul>
          <li>RajatWorks Portfolio — Cinematic Next.js + GSAP + Three.js portfolio with Supabase admin panel</li>
          <li>Zephyra — React Native / Expo Vedic astrology app with AI-generated readings (Groq)</li>
          <li>AI Video Engine — AI system that generates videos as code, no stock assets, credit-based pricing</li>
          <li>Cold Outreach Automation — Python prospecting system for small Indian businesses</li>
        </ul>
      </section>

      <section aria-label="Technical Skills">
        <h2>Technical Skills</h2>
        <p itemProp="knowsAbout">
          React, Next.js, TypeScript, JavaScript, Tailwind CSS, GSAP, Three.js,
          React Native, Expo, Node.js, Supabase, Appwrite,
          Groq AI, NVIDIA NIM, Git, Vercel, Postman, Figma,
          Android, Termux, UI/UX Design
        </p>
      </section>

      <section aria-label="About Rajat Kumar Dua">
        <h2>Rajat Kumar Dua — RajatWorks</h2>
        <p>
          Self-taught full-stack developer and UI/UX designer from India.
          Operates under the brand RajatWorks. Builds and ships all work from Android using Termux —
          no traditional desktop setup. Pursues freelance work and remote full-time employment with
          small companies and agencies, targeting primarily small Indian businesses.
        </p>
      </section>

      <section aria-label="Contact">
        <h2>Hire Rajat — Contact Information</h2>
        <p>
          <span itemProp="url">https://rajatworks1.vercel.app</span> |
          <span itemProp="email">rajatkumardua[at]gmail.com</span> |
          Available for freelance projects and remote full-time roles
        </p>
      </section>
    </div>
  );
}

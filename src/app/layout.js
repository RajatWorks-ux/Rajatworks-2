import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TrackVisit from "@/components/TrackVisit";
import { Analytics } from "@vercel/analytics/next";
import NewsletterPopup from "@/components/NewsletterPopup";
import DevicePortfolioRedirect from "@/components/DevicePortfolioRedirect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap"
});

const BASE = "https://rajatworks01.vercel.app";

export const viewport = {
  themeColor: "#ff6b1a",
};

export const metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: "Rajat Kumar Dua — Full-Stack Developer, React Native Engineer & UI/UX Designer",
    template: "%s — Rajat Kumar Dua | Full-Stack Developer",
  },
  description:
    "Explore Rajat Kumar Dua’s cinematic portfolio of web development, mobile apps, AI-powered tools, visual design, and interactive digital experiences.",
  keywords: [
    "Full-Stack Developer India", "React Native Developer", "Next.js Developer",
    "UI UX Designer", "Freelance Developer India", "AI App Developer",
    "GSAP Animation", "Three.js Developer", "Supabase Developer",
    "Expo Developer", "TypeScript Developer", "RajatWorks",
    "Freelance Developer India", "Mobile App Developer India"
  ],
  authors: [{ name: "Rajat Kumar Dua", url: BASE }],
  creator: "Rajat Kumar Dua",
  publisher: "RajatWorks",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE,
    siteName: "RajatWorks — Full-Stack Developer & UI/UX Designer",
    title: "Rajat Kumar Dua — Full-Stack Developer, React Native Engineer & UI/UX Designer",
    description: "Explore Rajat Kumar Dua’s cinematic mobile portfolio featuring web development, mobile apps, AI-powered tools, visual design, and interactive digital experiences.",
    images: [{
      url: "/social-preview.jpg",
      width: 1200,
      height: 630,
      alt: "RajatWorks — Rajat Kumar Dua, full-stack developer and UI/UX designer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajat Kumar Dua — Full-Stack Developer & UI/UX Designer",
    description: "Explore Rajat Kumar Dua’s cinematic mobile portfolio featuring web development, mobile apps, AI-powered tools, visual design, and interactive digital experiences.",
    images: ["/social-preview.jpg"],
    creator: "@rajat",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/photo/favicon.png", type: "image/png" },
    ],
    apple: "/photo/favicon.png",
    shortcut: "/photo/favicon.png",
  },

  manifest: "/manifest.json",

  alternates: { canonical: BASE },

  category: "portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Rajat Kumar Dua",
      "url": BASE,
      "jobTitle": "Full-Stack Developer & UI/UX Designer",
      "description": "Self-taught full-stack developer and UI/UX designer from India — operating under the brand RajatWorks. Builds web apps, mobile apps, and AI-powered tools.",
      "knowsAbout": [
        "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
        "React Native", "Expo", "GSAP", "Three.js", "Node.js",
        "Supabase", "Appwrite", "Groq AI", "NVIDIA NIM",
        "UI/UX Design", "Figma", "Android", "Termux"
      ],
      "hasOccupation": [
        {
          "@type": "Occupation",
          "name": "Freelance Full-Stack Developer",
          "occupationLocation": { "@type": "Country", "name": "India" },
          "skills": "React, Next.js, TypeScript, Node.js, Supabase, Appwrite"
        },
        {
          "@type": "Occupation",
          "name": "React Native / Mobile App Developer",
          "skills": "React Native, Expo, Supabase, Appwrite, Groq AI"
        },
        {
          "@type": "Occupation",
          "name": "UI/UX Designer",
          "skills": "Figma, Tailwind CSS, GSAP, Three.js"
        }
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Development",
            "description": "Modern Next.js websites, web apps, GSAP animations, Three.js experiences, and Supabase/Appwrite backends."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Native Mobile App Development",
            "description": "Cross-platform iOS and Android apps built with React Native and Expo."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI-Powered Product Development",
            "description": "AI app integration with Groq, NVIDIA NIM, and other AI APIs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Modern interface design, design systems, and landing pages using Figma."
          }
        }
      ],
      "sameAs": [],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE}/#localbusiness`,
      "name": "RajatWorks — Full-Stack Developer & Designer",
      "image": `${BASE}/photo/about.webp`,
      "url": BASE,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "India",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "description": "Freelance full-stack developer & UI/UX designer.",
      "founder": { "@id": `${BASE}/#person` }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": BASE,
      "name": "RajatWorks — Full-Stack Developer & UI/UX Designer",
      "description": "Portfolio of Rajat Kumar Dua — full-stack developer building React, Next.js, React Native, and AI-powered digital experiences.",
      "publisher": { "@id": `${BASE}/#person` },
      "inLanguage": "en-US",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Rajat offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajat offers full-stack web development (React, Next.js, TypeScript, Node.js), React Native mobile app development, AI-powered product development (Groq, NVIDIA NIM), UI/UX design (Figma), and automation systems."
          }
        },
        {
          "@type": "Question",
          "name": "How can I hire Rajat for a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reach out through the contact form at rajatworks1.vercel.app/contact or email rajatworks1@gmail.com. Rajat is available for freelance projects and remote full-time roles."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies does Rajat work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajat works with React, Next.js, TypeScript, React Native, Expo, GSAP, Three.js, Node.js, Supabase, Appwrite, Groq AI, NVIDIA NIM, and Figma."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Rajat based and does he work remotely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajat is based in India and is fully available for remote freelance projects and full-time remote roles worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical project take with Rajat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simple landing page takes 3–7 days. A full web application or mobile app typically takes 2–6 weeks depending on complexity. Contact via rajatworks1.vercel.app/contact for a specific estimate."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Rajat different from other freelance developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajat combines full-stack development, mobile app engineering, AI integration, and UI/UX design in one person. He ships entire products independently — including building everything from Android via Termux. His work is self-taught, production-grade, and visually premium."
          }
        },
        {
          "@type": "Question",
          "name": "What is Rajat's background?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rajat is a self-taught developer from India. He operates under the brand RajatWorks and builds everything using an Android device and Termux — no traditional desktop setup."
          }
        }
      ]
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://ip-api.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site info" />
        <link rel="search" type="application/xml" href="/searchwords.xml" title="Search Keywords" />

        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}

        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body>
        <DevicePortfolioRedirect />
        <TrackVisit />
        <div className="bottom-blur" aria-hidden="true" />
        {children}
        <Analytics />
        <NewsletterPopup />
      </body>
    </html>
  );
}

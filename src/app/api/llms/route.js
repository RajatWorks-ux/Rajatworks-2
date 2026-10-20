import { NextResponse } from "next/server";

/**
 * GET /api/llms
 * 
 * Machine-readable JSON endpoint for AI chatbots and LLM crawlers.
 * This supplements llms.txt with structured data that AI systems
 * can programmatically consume.
 */
export async function GET() {
  const data = {
    name: "Rajat Kumar Dua",
    title: "Portfolio Designer, Website Developer, Video Editor & Photo Editor",
    website: "https://rajatworks1.vercel.app",
    email: "rajatworks1@gmail.com",
    location: "India",
    available_for_hire: true,
    summary:
      "Rajat Kumar Dua (RajatWorks) is a self-taught full-stack developer and UI/UX designer from India. He builds React, Next.js, React Native/Expo apps, AI-powered tools, and cinematic web experiences. Available for freelance and remote full-time roles.",
    
    services: [
      {
        name: "Creative Web Development",
        description: "Cinematic portfolio websites, interactive landing pages, immersive digital experiences with GSAP, Three.js, and Next.js",
        technologies: ["React", "Next.js", "GSAP", "Three.js", "WebGL", "Tailwind CSS"],
      },
      {
        name: "Video Editing & Motion Design",
        description: "Cinematic trailers, social media reels, motion graphics, and animated content",
        technologies: ["After Effects", "Premiere Pro", "DaVinci Resolve", "CapCut"],
      },
      {
        name: "UI/UX & Visual Design",
        description: "Modern interface design, brand identity, posters, and creative visual concepts",
        technologies: ["Figma", "Photoshop", "Illustrator", "Lightroom"],
      },
      {
        name: "Shopify Development",
        description: "Custom Shopify themes, e-commerce store setup and optimization",
        technologies: ["Shopify Liquid", "JavaScript", "CSS"],
      },
      {
        name: "Flutter App Development",
        description: "Cross-platform mobile applications for iOS and Android",
        technologies: ["Flutter", "Dart"],
      },
    ],

    skills: {
      frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "GSAP", "Three.js", "WebGL"],
      backend: ["Node.js", "Express", "Python", "PHP", "Go", "Rust"],
      mobile: ["Flutter", "Dart", "Swift", "Kotlin"],
      database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"],
      creative: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Figma", "Photoshop", "Illustrator", "Lightroom"],
      devops: ["Git", "Docker", "Vercel", "Netlify"],
    },

    experience: [
      { role: "Freelance Developer", period: "2024–Present" },
      { role: "Freelance Video Editor", period: "2022–Present" },
      { role: "Freelance Photo Editor & Graphic Designer", period: "2020–Present" },
    ],

    stats: {
      websites_completed: "6+",
      videos_edited: "75+",
      photo_edits: "500+",
    },

    pages: {
      home: "https://rajatworks1.vercel.app/",
      about: "https://rajatworks1.vercel.app/about",
      work: "https://rajatworks1.vercel.app/work",
      contact: "https://rajatworks1.vercel.app/contact",
    },

    llms_txt: "https://rajatworks1.vercel.app/llms.txt",
    llms_full_txt: "https://rajatworks1.vercel.app/llms-full.txt",
  };

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "Content-Type": "application/json",
    },
  });
}


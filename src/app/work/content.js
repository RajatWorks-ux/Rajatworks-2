export const SECTION = {
  label: "Selected Work",
  heading: "Projects.",
};

export const FALLBACK_PROJECTS = [
  {
    id: "f1",
    num: "01",
    category: "Full Stack",
    title: "Knockout Gym",
    description:
      "Production-ready gym website + full CMS for a real gym in Zirakpur. Owner can edit hero text, membership plans, members, gallery, SEO meta, and brand color — all without touching code. Supabase RLS keeps member data secure.",
    tech: "React · React Router · Supabase · GSAP · Lenis · Vite",
    link: "https://musclebuilding.vercel.app/",
    review: null,
    image: "https://res.cloudinary.com/dbshw2jxv/image/upload/v1/knockout-gym-preview",
  },
  {
    id: "f2",
    num: "02",
    category: "Full Stack",
    title: "Voltri — AI Image to 3D",
    description:
      "AI-powered image-to-3D model converter. Integrated Microsoft Trellis API, Supabase auth, a credit system, and geo-based pricing (INR & USD). Designed to feel like a product someone would actually pay for.",
    tech: "React · Vite · Tailwind CSS · Supabase · Microsoft Trellis API",
    link: "https://voltri.vercel.app/",
    review: null,
    image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224914_iag0wb.jpg",
  },
  {
    id: "f3",
    num: "03",
    category: "Full Stack",
    title: "MIRA — AI Chat Agent",
    description:
      "Multi-model AI chat agent with user authentication, persistent chat history, and a clean interface built for scale. Built and deployed solo from zero.",
    tech: "React · Next.js · Node.js · Vercel",
    link: "https://rajatworks-mira.vercel.app/",
    review: null,
    image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_223953_fk41hb.jpg",
  },
  {
    id: "f4",
    num: "04",
    category: "Frontend",
    title: "Vakilr — Legal Marketplace",
    description:
      "Premium AI legal marketplace concept — dark luxury theme, cinematic background videos, glassmorphism cards, smooth animations. Demonstrates how tech can make legal services feel premium.",
    tech: "HTML · CSS · JavaScript · Animation",
    link: "https://vakilr.vercel.app/",
    review: null,
    image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224914_iag0wb.jpg",
  },
  {
    id: "f5",
    num: "05",
    category: "Full Stack",
    title: "Phone Shop",
    description:
      "Modern e-commerce platform for mobile devices — performance-first, fully mobile-optimised, CDN delivery, Google integrations, and clean UX throughout.",
    tech: "Vercel · Cloudflare · Google API · AOS",
    link: "https://rajatworks-teck.vercel.app/",
    review: null,
    image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224631_felxid.jpg",
  },
  {
    id: "f6",
    num: "06",
    category: "Full Stack",
    title: "ANON — E-Commerce",
    description:
      "Fully responsive e-commerce web application with smooth shopping UX, clean UI, secure backend services, and modern web architecture.",
    tech: "Vue.js · Element UI · Vercel · Google API",
    link: "https://rajatworks-anon.vercel.app/",
    review: null,
    image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224520_k13pig.jpg",
  },
];

// CircularGallery fallback — only Cloudinary URLs (always load, no auth needed)
export const GALLERY_ITEMS = [
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224914_iag0wb.jpg", text: "Voltri — AI 3D", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224944_dbhmyy.jpg", text: "Voltri — Generator", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224955_cqbzkj.jpg", text: "Voltri — Credits", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224934_txdsx7.jpg", text: "Voltri — Pricing", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_223953_fk41hb.jpg", text: "MIRA — AI Chat", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_223929_vdwboh.jpg", text: "MIRA — Dashboard", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_223914_fjpbk3.jpg", text: "MIRA — Interface", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224631_felxid.jpg", text: "Phone Shop", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224720_qwcqyo.jpg", text: "Phone Shop — Store", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224643_dtorqt.jpg", text: "Phone Shop — Product", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224652_z3twqi.jpg", text: "Phone Shop — Cart", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224709_kb4vk4.jpg", text: "Phone Shop — Mobile", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224737_xlkctz.jpg", text: "Phone Shop — Checkout", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224520_k13pig.jpg", text: "ANON", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224618_t6ysmm.jpg", text: "ANON — Shop", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224601_caidle.jpg", text: "ANON — Product", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224529_x3rjju.jpg", text: "ANON — Cart", category: "Website" },
  { image: "https://res.cloudinary.com/dbshw2jxv/image/upload/IMG_20260222_224544_ytby66.jpg", text: "ANON — Mobile", category: "Website" },
];

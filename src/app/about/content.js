// ─────────────────────────────────────────────
//  ABOUT SECTION — Rajat Kumar Dua
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiExpo, SiSupabase, SiAppwrite,
  SiGit, SiNodedotjs, SiTypescript,
  SiVercel, SiVuedotjs, SiFigma, SiMongodb,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

export const SECTION = { label: "About Me" };

export const HEADING = {
  line1: "Building",
  line2: "the",
  line3: "future.",
};

// *word* = highlighted in BlurText
export const BIO = [
  "I am a *self-taught full-stack developer* and *UI/UX designer* operating under the brand *RajatWorks*. I build digital products that fuse *clean aesthetics*, *modern architecture*, and real-world usability — shipping everything independently from *Android via Termux*, no traditional desktop setup.",
  "My journey started in *2020* with a blank text editor and an `<h1>Hello World</h1>`. Four years later I've shipped *six production projects*, integrated *AI APIs*, built *e-commerce platforms*, and designed *interfaces* that feel premium.",
  "My core stack: *React*, *Next.js*, *TypeScript*, *Node.js*, *Vue.js*, *React Native/Expo* for mobile apps, *GSAP* and *Three.js* for cinematic web experiences, and *Supabase* / *MongoDB* for backend infrastructure. I also build with *AI APIs* — Groq, NVIDIA NIM, and Microsoft Trellis.",
  "Notable projects include *Knockout Gym* (full-stack CMS for a real gym), *MIRA* (multi-model AI chat agent), *Vakilr* (premium legal marketplace concept), and two e-commerce platforms — *Phone Shop* and *ANON*.",
  "My design philosophy: every interface should feel *intentional*, *fast*, and *alive*. I obsess over typography, micro-interactions, and the emotional weight of negative space. Every pixel is a decision.",
  "I actively pursue *freelance projects* and *remote full-time roles* with small companies, startups, and agencies. If the work is meaningful, I'm in.",
  "Beyond screens, I'm drawn to *Vedic astrology* and *Jyotish* — studying planetary systems with the same analytical curiosity I bring to debugging. The best developers understand *patterns*, *cycles*, and *systems* at a fundamental level.",
  "I'm always open to interesting problems — a startup needing an MVP, a business wanting a *premium landing page*, or a founder looking for a *technical co-builder*.",
];

export const RESUME_URL = "/resume.pdf";

export const TECH = [
  { name: "React",        icon: SiReact },
  { name: "Next.js",      icon: SiNextdotjs },
  { name: "TypeScript",   icon: SiTypescript },
  { name: "JavaScript",   icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vue.js",       icon: SiVuedotjs },
  { name: "Node.js",      icon: SiNodedotjs },
  { name: "Three.js",     icon: TbBrandThreejs },
  { name: "React Native", icon: SiExpo },
  { name: "Expo",         icon: SiExpo },
  { name: "Supabase",     icon: SiSupabase },
  { name: "MongoDB",      icon: SiMongodb },
  { name: "Appwrite",     icon: SiAppwrite },
  { name: "Git",          icon: SiGit },
  { name: "Vercel",       icon: SiVercel },
  { name: "Figma",        icon: SiFigma },
];

export const CREATIVE = [
  { name: "Figma",       icon: SiFigma },
  { name: "UI/UX Design", icon: SiFigma },
];

// Real career timeline from config.ts
export const EXPERIENCE = [
  { role: "First Line of Code — HTML & CSS",    period: "2020" },
  { role: "JavaScript & the DOM",               period: "2021" },
  { role: "React & Component Thinking",         period: "2022" },
  { role: "Full Stack Unlocked — Node + APIs",  period: "2023" },
  { role: "First Real Products — Phone Shop & ANON", period: "2023" },
  { role: "Entering AI — Integrations & APIs",   period: "2024" },
  { role: "Production Architecture — MIRA",     period: "2025" },
  { role: "Still Building — Open to Hire",      period: "2026" },
];

// ─────────────────────────────────────────────
//  CONTACT SECTION — edit everything here
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiExpo, SiSupabase, SiAppwrite,
  SiGit, SiNodedotjs, SiTypescript,
  SiVercel, SiPostman, SiFigma, SiAndroid,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

export const SECTION = {
  label: "Get In Touch",
};

export const COUNTRIES = [
  { code: "91",  name: "India",         flag: "🇮🇳" },
  { code: "1",   name: "US / Canada",   flag: "🇺🇸" },
  { code: "44",  name: "UK",            flag: "🇬🇧" },
  { code: "971", name: "UAE",           flag: "🇦🇪" },
  { code: "966", name: "Saudi Arabia",  flag: "🇸🇦" },
  { code: "974", name: "Qatar",         flag: "🇶🇦" },
  { code: "92",  name: "Pakistan",      flag: "🇵🇰" },
  { code: "880", name: "Bangladesh",    flag: "🇧🇩" },
  { code: "94",  name: "Sri Lanka",     flag: "🇱🇰" },
  { code: "60",  name: "Malaysia",      flag: "🇲🇾" },
  { code: "65",  name: "Singapore",     flag: "🇸🇬" },
  { code: "61",  name: "Australia",     flag: "🇦🇺" },
  { code: "49",  name: "Germany",       flag: "🇩🇪" },
  { code: "33",  name: "France",        flag: "🇫🇷" },
  { code: "39",  name: "Italy",         flag: "🇮🇹" },
  { code: "34",  name: "Spain",         flag: "🇪🇸" },
  { code: "55",  name: "Brazil",        flag: "🇧🇷" },
  { code: "81",  name: "Japan",         flag: "🇯🇵" },
  { code: "82",  name: "South Korea",   flag: "🇰🇷" },
  { code: "86",  name: "China",         flag: "🇨🇳" },
  { code: "7",   name: "Russia",        flag: "🇷🇺" },
];

export const TECH = [
  { name: "React",          icon: SiReact },
  { name: "Next.js",        icon: SiNextdotjs },
  { name: "TypeScript",     icon: SiTypescript },
  { name: "JavaScript",     icon: SiJavascript },
  { name: "Tailwind CSS",   icon: SiTailwindcss },
  { name: "React Native",   icon: SiExpo },
  { name: "Expo",           icon: SiExpo },
  { name: "Three.js",       icon: TbBrandThreejs },
  { name: "Node.js",        icon: SiNodedotjs },
  { name: "Supabase",       icon: SiSupabase },
  { name: "Appwrite",       icon: SiAppwrite },
  { name: "Git",            icon: SiGit },
  { name: "Vercel",         icon: SiVercel },
  { name: "Postman",        icon: SiPostman },
  { name: "Figma",          icon: SiFigma },
  { name: "Android/Termux", icon: SiAndroid },
];

export const CREATIVE = [
  { name: "Figma",        icon: SiFigma },
  { name: "UI/UX Design", icon: SiFigma },
  { name: "Groq AI",      icon: SiNodedotjs },
  { name: "NVIDIA NIM",   icon: TbBrandThreejs },
];

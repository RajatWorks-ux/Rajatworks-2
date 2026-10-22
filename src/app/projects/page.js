import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects — Case Studies & Client Work by Rajat Kumar Dua",
  description: "Explore Rajat Kumar Dua’s portfolio projects and case studies across web development, mobile apps, interactive design, and digital products.",
  keywords:    ["portfolio projects", "case studies", "freelance work", "client projects"],
  alternates:  { canonical: "https://rajatworks1.vercel.app/projects" },
  openGraph: {
    title: "Projects and Case Studies — RajatWorks",
    description: "Browse selected web, mobile, and digital product projects by Rajat Kumar Dua.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects and Case Studies — RajatWorks",
    description: "Browse selected web, mobile, and digital product projects by Rajat Kumar Dua.",
    images: ["/photo/about.webp"],
  },

};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}

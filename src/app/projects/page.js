import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects — Case Studies & Client Work by Rajat Kumar Dua",
  description: "Explore detailed case studies of Rajat's freelance projects — website development, video editing, and design work with client testimonials and tech breakdowns.",
  keywords:    ["portfolio projects", "case studies", "freelance work", "client projects"],
  alternates:  { canonical: "https://rajatworks1.vercel.app/projects" },
  openGraph: {
    title: "Projects — Rajat Kumar Dua | Case Studies & Client Work",
    description: "Detailed case studies of web development, video editing, and design projects by Rajat Kumar Dua.",
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

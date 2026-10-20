import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About — Freelance Website Developer, Video Editor & Photo Editor from India",
  description: "Meet Rajat Kumar Dua — a 19-year-old freelance website developer, video editor, and photo editor from India. Expert in React, Next.js, GSAP, After Effects, Premiere Pro, Photoshop, and Figma. Available for hire worldwide.",
  keywords:    ["freelance web developer India", "video editor for hire", "photo editor freelance", "portfolio designer", "creative developer", "Rajat Kumar Dua about"],
  alternates:  { canonical: "https://rajatworks1.vercel.app/about" },
  openGraph: {
    title: "About Rajat Kumar Dua — Freelance Website Developer, Video Editor & Photo Editor",
    description: "19-year-old creative developer from India specializing in cinematic websites, video editing, and visual design. Hire for freelance projects worldwide.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}

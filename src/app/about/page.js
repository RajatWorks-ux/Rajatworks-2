import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About — Freelance Website Developer, Video Editor & Photo Editor from India",
  description: "Meet Rajat Kumar Dua and explore his work in web development, mobile apps, cinematic web experiences, video editing, and visual design.",
  keywords:    ["freelance web developer India", "video editor for hire", "photo editor freelance", "portfolio designer", "creative developer", "Rajat Kumar Dua about"],
  alternates:  { canonical: "https://rajatworks01.vercel.app/about" },
  openGraph: {
    title: "About Rajat Kumar Dua — RajatWorks",
    description: "Learn about Rajat’s development and design approach, experience, and creative work.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rajat Kumar Dua — RajatWorks",
    description: "Learn about Rajat’s development and design approach, experience, and creative work.",
    images: ["/photo/about.webp"],
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

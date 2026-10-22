import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact — Hire a Portfolio Designer, Website Developer, Video Editor or Photo Editor",
  description: "Contact Rajat Kumar Dua about web development, mobile applications, AI integrations, UI/UX design, and freelance project enquiries.",
  keywords:    ["hire website developer", "hire video editor", "hire photo editor", "hire portfolio designer", "freelance contact", "get quote website design"],
  alternates:  { canonical: "https://rajatworks01.vercel.app/contact" },
  openGraph: {
    title: "Contact Rajat Kumar Dua — RajatWorks",
    description: "Discuss a web, mobile, AI, or design project with Rajat Kumar Dua.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Rajat Kumar Dua — RajatWorks",
    description: "Discuss a web, mobile, AI, or design project with Rajat Kumar Dua.",
    images: ["/photo/about.webp"],
  },

};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}

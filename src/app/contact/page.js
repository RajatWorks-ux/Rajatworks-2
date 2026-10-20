import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact — Hire a Portfolio Designer, Website Developer, Video Editor or Photo Editor",
  description: "Get in touch with Rajat Kumar Dua to hire Rajat Kumar Dua as a full-stack developer, React Native engineer, or UI/UX designer. Available for projects worldwide. Fast response, competitive pricing.",
  keywords:    ["hire website developer", "hire video editor", "hire photo editor", "hire portfolio designer", "freelance contact", "get quote website design"],
  alternates:  { canonical: "https://rajatworks1.vercel.app/contact" },
  openGraph: {
    title: "Hire Rajat Kumar Dua — Portfolio Designer, Website Developer, Video Editor & Photo Editor",
    description: "Contact Rajat for full-stack web development, mobile app development, AI integrations, and UI/UX design. Available worldwide.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}

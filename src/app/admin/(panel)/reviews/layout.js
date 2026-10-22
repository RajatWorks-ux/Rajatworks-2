export const metadata = {
  title: "Review Management",
  description: "Manage client reviews shown on RajatWorks.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Review Management — RajatWorks",
    description: "Manage client reviews shown on RajatWorks.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Review Management — RajatWorks", description: "Manage client reviews shown on RajatWorks.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

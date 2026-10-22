export const metadata = {
  title: "Coming Soon",
  description: "RajatWorks is preparing a new portfolio experience. Check back soon.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Coming Soon — RajatWorks",
    description: "RajatWorks is preparing a new portfolio experience. Check back soon.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Coming Soon — RajatWorks", description: "RajatWorks is preparing a new portfolio experience. Check back soon.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

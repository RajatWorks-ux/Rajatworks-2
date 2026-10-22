export const metadata = {
  title: "Portfolio Analytics",
  description: "Review private RajatWorks traffic and portfolio analytics.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Portfolio Analytics — RajatWorks",
    description: "Review private RajatWorks traffic and portfolio analytics.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Portfolio Analytics — RajatWorks", description: "Review private RajatWorks traffic and portfolio analytics.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

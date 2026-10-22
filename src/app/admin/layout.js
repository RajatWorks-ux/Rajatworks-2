export const metadata = {
  title: "RajatWorks Admin",
  description: "Private RajatWorks administration page.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "RajatWorks Admin — RajatWorks",
    description: "Private RajatWorks administration page.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "RajatWorks Admin — RajatWorks", description: "Private RajatWorks administration page.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

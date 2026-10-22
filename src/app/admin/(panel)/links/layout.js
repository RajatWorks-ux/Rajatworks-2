export const metadata = {
  title: "Link Management",
  description: "Manage links displayed by the RajatWorks portfolio.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Link Management — RajatWorks",
    description: "Manage links displayed by the RajatWorks portfolio.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Link Management — RajatWorks", description: "Manage links displayed by the RajatWorks portfolio.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

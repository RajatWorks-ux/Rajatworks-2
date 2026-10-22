export const metadata = {
  title: "Admin Settings",
  description: "Manage private RajatWorks administration settings.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Admin Settings — RajatWorks",
    description: "Manage private RajatWorks administration settings.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Admin Settings — RajatWorks", description: "Manage private RajatWorks administration settings.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

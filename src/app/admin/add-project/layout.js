export const metadata = {
  title: "Add Project",
  description: "Create or update portfolio project information in the private RajatWorks dashboard.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Add Project — RajatWorks",
    description: "Create or update portfolio project information in the private RajatWorks dashboard.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Add Project — RajatWorks", description: "Create or update portfolio project information in the private RajatWorks dashboard.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

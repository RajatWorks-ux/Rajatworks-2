export const metadata = {
  title: "Project Management",
  description: "Manage projects displayed in the RajatWorks portfolio.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Project Management — RajatWorks",
    description: "Manage projects displayed in the RajatWorks portfolio.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Project Management — RajatWorks", description: "Manage projects displayed in the RajatWorks portfolio.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

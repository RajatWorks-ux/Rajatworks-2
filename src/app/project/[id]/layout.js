export const metadata = {
  title: "Project Case Study",
  description: "Explore this project by Rajat Kumar Dua, including its goals, design, technologies, and implementation.",
  openGraph: {
    title: "Project Case Study — RajatWorks",
    description: "Explore this project by Rajat Kumar Dua, including its goals, design, technologies, and implementation.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Project Case Study — RajatWorks", description: "Explore this project by Rajat Kumar Dua, including its goals, design, technologies, and implementation.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

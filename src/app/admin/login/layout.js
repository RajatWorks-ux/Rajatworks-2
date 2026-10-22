export const metadata = {
  title: "Admin Login",
  description: "Sign in to the private RajatWorks administration dashboard.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Admin Login — RajatWorks",
    description: "Sign in to the private RajatWorks administration dashboard.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Admin Login — RajatWorks", description: "Sign in to the private RajatWorks administration dashboard.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

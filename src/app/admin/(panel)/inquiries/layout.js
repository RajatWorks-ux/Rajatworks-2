export const metadata = {
  title: "Contact Inquiries",
  description: "Manage private contact enquiries submitted through RajatWorks.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Contact Inquiries — RajatWorks",
    description: "Manage private contact enquiries submitted through RajatWorks.",
    images: [{ url: "/photo/about.webp", width: 852, height: 1846, alt: "RajatWorks cinematic About-section artwork" }],
  },
  twitter: { card: "summary_large_image", title: "Contact Inquiries — RajatWorks", description: "Manage private contact enquiries submitted through RajatWorks.", images: ["/photo/about.webp"] },
};

export default function RouteMetadataLayout({ children }) {
  return children;
}

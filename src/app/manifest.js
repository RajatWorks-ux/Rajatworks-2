export default function manifest() {
  return {
    name: "RajatWorks — Full-Stack Developer",
    short_name: "RajatWorks",
    description: "Portfolio of Rajat Kumar Dua — full-stack developer and UI/UX designer.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#ff6b1a",
    icons: [
      {
        src: "/rw-icon-192.png?v=2",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/rw-icon-512.png?v=2",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

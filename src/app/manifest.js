export default function manifest() {
  return {
    name: "ဦးဖေသန်းညွန့်",
    short_name: "Next.js App",
    description: "ဦးဖေသန်းညွန့် Pharmacy Price list",
    start_url: "/",
    display: "standalone",
    background_color: "#1b1a2b",
    theme_color: "##1b1a2b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}

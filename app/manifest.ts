import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio - Foulla SAMANKASSOU",
    short_name: "Foulla Portfolio",
    description:
      "Software Engineer specializing in BI, AI, Cloud Solutions, and Full-Stack Development",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F78F42",
    icons: [
      {
        src: "/img/profile/profile_pic_sm.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
  };
}

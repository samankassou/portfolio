import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Azure DevOps & .NET Engineer - Foulla SAMANKASSOU",
    short_name: "Foulla Portfolio",
    description:
      "Azure DevOps and .NET engineer who builds and modernizes applications on Microsoft Azure and leads AI and BI delivery",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#F78F42",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

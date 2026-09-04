import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Azure DevOps & .NET Engineer - Foulla SAMANKASSOU",
    short_name: "Foulla Portfolio",
    description:
      "Azure DevOps and .NET software engineer focused on Microsoft Azure application delivery and modernization",
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

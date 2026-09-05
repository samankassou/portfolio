import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
import { ChristmasProvider } from "@/app/components/providers/ChristmasProvider";
import { siteConfig } from "@/lib/data/siteConfig";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadata.url),
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  authors: [{ name: siteConfig.author.name, url: siteConfig.metadata.url }],
  creator: siteConfig.author.name,
  keywords: [
    "Azure DevOps Engineer",
    "Azure .NET Software Engineer",
    "Microsoft Azure",
    ".NET",
    "C#",
    "CI/CD",
    "Application Modernization",
    "Software Engineer Cameroon",
    "Laravel",
    "Power BI",
  ],
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.title,
    type: "website",
    url: siteConfig.metadata.url,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foulla SAMANKASSOU — Azure DevOps and Azure .NET Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icons/monogram.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.metadata.url,
    jobTitle: "Azure DevOps Engineer and Azure & .NET Software Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Douala",
      addressCountry: "CM",
    },
    sameAs: [
      "https://linkedin.com/in/sam-foulla",
      "https://github.com/samankassou",
    ],
    knowsAbout: [
      "Microsoft Azure",
      "Azure DevOps",
      "CI/CD",
      ".NET",
      "C#",
      "Application Modernization",
      "Software Engineering",
      "PHP",
      "Laravel",
      "Artificial Intelligence",
      "Business Intelligence",
      "Power BI",
    ],
  };

  return (
    <html
      lang={siteConfig.metadata.language}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
              const christmasDate = new Date()
              const christmasMode = christmasDate.getMonth() === 11 || (christmasDate.getMonth() === 0 && christmasDate.getDate() <= 6)
              document.documentElement.classList.toggle('christmas-mode', christmasMode)
              localStorage.removeItem('christmas-mode')
        `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans ${COMMON_CLASSES.PAGE_BG} overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <ChristmasProvider>{children}</ChristmasProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

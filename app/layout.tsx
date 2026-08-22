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
    "BI/AI Project Manager",
    "Power BI",
    "Azure OpenAI",
    "Microsoft Azure",
    "Software Engineer Cameroon",
    "Application Modernization",
  ],
  alternates: {
    canonical: "/",
  },
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
        alt: "Foulla SAMANKASSOU — BI/AI Project Manager and Software Engineer",
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
    icon: "/img/profile/profile_pic_sm.webp",
    apple: "/img/profile/profile_pic_sm.webp",
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
    image: `${siteConfig.metadata.url}/img/profile/profile_pic_sm.webp`,
    jobTitle: "BI/AI Project Manager and Software Engineer",
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
      "Business Intelligence",
      "Artificial Intelligence",
      "Power BI",
      "Azure OpenAI",
      "Microsoft Azure",
      "Software Engineering",
    ],
  };

  return (
    <html lang={siteConfig.metadata.language} suppressHydrationWarning>
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

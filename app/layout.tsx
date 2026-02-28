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
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.title,
    type: "website",
    url: siteConfig.metadata.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
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
              if (localStorage.getItem('christmas-mode') === 'enabled') {
                document.documentElement.classList.add('christmas-mode')
              }
        `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans ${COMMON_CLASSES.PAGE_BG} overflow-x-hidden`}
      >
        <ThemeProvider>
          <ChristmasProvider>{children}</ChristmasProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

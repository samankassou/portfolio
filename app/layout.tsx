import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
import { siteConfig } from "@/lib/data/siteConfig";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
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
        `,
          }}
        />
      </head>
      <body className={`${inter.className} ${COMMON_CLASSES.PAGE_BG} overflow-x-hidden`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

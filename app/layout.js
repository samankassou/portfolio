import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Samankassou",
  description: "The portfolio of Samankassou, a full-stack web developper",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake" lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Samankassou",
  description: "The portfolio of Samankassou, a full-stack web developper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className + " bg-base"}>
        {children}
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      </body>
    </html>
  );
}

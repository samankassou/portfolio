import type { ReactNode } from "react";
import SiteHeader from "@/app/components/studio/SiteHeader";
import SiteFooter from "@/app/components/studio/SiteFooter";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="studio" id="top">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

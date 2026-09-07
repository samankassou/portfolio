import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="studio-footer">
      <div className="studio-wrap">
        <div className="footer-top">
          <Link className="studio-logo" href="/">
            foulla<span aria-hidden="true">✳</span>
          </Link>
          <p>
            Thoughtfully engineered.
            <br />
            Made in Douala, Cameroon.
          </p>
          <nav aria-label="Footer navigation">
            <Link href="/#portfolio">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <a className="back-top" href="#top" aria-label="Back to top">
            ↑
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Foulla Samankassou</span>
          <span>Code. Cloud. People.</span>
          <span>Keep moving forward. ↗</span>
        </div>
      </div>
    </footer>
  );
}

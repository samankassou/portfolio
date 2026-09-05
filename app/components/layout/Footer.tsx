import Link from "next/link";
import { IoArrowForward, IoArrowUp } from "react-icons/io5";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import { profileData } from "@/lib/data/profile";
import { siteConfig, socialLinks } from "@/lib/data/siteConfig";

const navigation = [
  { label: "Case studies", href: "/#portfolio" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Writing", href: "/blog" },
];

const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-sm text-sm transition-colors hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:hover:text-primary dark:focus-visible:ring-offset-base-950";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className={cn(
        "relative mt-16 overflow-hidden rounded-2xl border border-secondary/10 dark:border-white/10",
        COMMON_CLASSES.CARD_BG,
        COMMON_CLASSES.TEXT,
      )}
    >
      <div className="px-6 sm:px-8 md:px-12">
        <div className="flex flex-col items-start justify-between gap-7 border-b border-secondary/10 py-10 dark:border-white/10 sm:py-12 lg:flex-row lg:items-center lg:gap-10">
          <div className="max-w-lg">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-800 dark:text-primary">
              Have a project in mind?
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Let’s build something
              <br />
              that lasts.
            </h2>
            <p
              className={cn(
                "mt-4 max-w-md text-sm leading-6",
                COMMON_CLASSES.TEXT_MUTED,
              )}
            >
              From your next .NET application to a smoother Azure deployment,
              let’s talk about what comes next.
            </p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex min-h-12 shrink-0 items-center gap-5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-offset-base-950"
          >
            Start a conversation
            <IoArrowForward
              aria-hidden="true"
              className="size-5 motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-8 py-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Link href="/" className={cn(linkClass, "gap-3 font-semibold")}>
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xs font-bold text-primary-800 dark:text-primary"
              >
                FS<span className="text-primary">.</span>
              </span>
              {profileData.name}
            </Link>
            <p
              className={cn(
                "mt-3 text-sm leading-6",
                COMMON_CLASSES.TEXT_MUTED,
              )}
            >
              {profileData.title}
            </p>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className={cn(
                linkClass,
                "mt-2 max-w-full break-all",
                COMMON_CLASSES.TEXT_MUTED,
              )}
            >
              {siteConfig.author.email}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em]">
              Explore
            </h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(linkClass, COMMON_CLASSES.TEXT_MUTED)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social profiles">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em]">
              Connect
            </h3>
            <ul>
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(linkClass, COMMON_CLASSES.TEXT_MUTED)}
                  >
                    {social.label}
                    <IoArrowForward
                      aria-hidden="true"
                      className="size-4 -rotate-45"
                    />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-3 border-t border-secondary/10 py-5 dark:border-white/10 sm:flex-row sm:items-center">
          <p className={cn("text-xs leading-5", COMMON_CLASSES.TEXT_MUTED)}>
            © {new Date().getFullYear()} {profileData.name}. All rights
            reserved.
          </p>
          <a
            href="#"
            className={cn(
              linkClass,
              "shrink-0 text-xs",
              COMMON_CLASSES.TEXT_MUTED,
            )}
          >
            Back to top <IoArrowUp aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

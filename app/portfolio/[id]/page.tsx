import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon, { type IconName } from "@/lib/components/Icon";
import type { ProjectCategory } from "@/lib/types";

interface PortfolioPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface CategoryVisual {
  icon: IconName;
  flow: [string, string, string];
}

const categoryVisuals: Record<
  Exclude<ProjectCategory, "All categories">,
  CategoryVisual
> = {
  "AI & Automation": {
    icon: "bulb",
    flow: ["Unstructured inputs", "AI-assisted workflow", "Reviewed output"],
  },
  "BI & Data": {
    icon: "bar-chart",
    flow: ["Source reports", "Power BI model", "Decision-ready insights"],
  },
  "Cloud & DevOps": {
    icon: "cloud",
    flow: ["On-premises apps", "Azure foundation", "Modern delivery"],
  },
  "Web Applications": {
    icon: "code-slash",
    flow: ["Operational needs", "Tailored application", "Structured workflow"],
  },
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      ...(project.coverImg ? { images: [project.coverImg] } : {}),
      type: "article",
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioPageProps) {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.id === projectId);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const visual = categoryVisuals[project.category];
  const caseNumber = String(currentIndex + 1).padStart(2, "0");

  const storySections = [
    {
      id: "challenge",
      number: "01",
      eyebrow: "The context",
      title: "The challenge",
      text: project.challenge,
      icon: "briefcase" as IconName,
    },
    {
      id: "approach",
      number: "02",
      eyebrow: "The work",
      title: "The approach",
      text: project.solution,
      icon: visual.icon,
    },
    {
      id: "outcome",
      number: "03",
      eyebrow: "The value",
      title: "The outcome",
      text: project.results,
      icon: "arrow-forward" as IconName,
    },
  ].filter((section) => section.text);

  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-secondary/10 dark:border-base-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(247,143,66,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24">
          <nav
            className={`mb-10 flex items-center gap-2 text-sm ${COMMON_CLASSES.TEXT_MUTED}`}
            aria-label="Breadcrumb"
          >
            <Link
              href="/#portfolio"
              className="transition-colors hover:text-primary"
            >
              Case studies
            </Link>
            <Icon name="chevron-forward" className="text-xs" />
            <span className="truncate text-primary">{project.category}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-16">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20">
                  {project.category}
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${COMMON_CLASSES.TEXT_MUTED}`}
                >
                  Case study {caseNumber}
                </span>
              </div>

              <h1
                className={`max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${COMMON_CLASSES.TEXT}`}
              >
                {project.title}
              </h1>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                {project.link}
              </p>
              <p
                className={`mt-6 max-w-2xl text-lg leading-8 sm:text-xl ${COMMON_CLASSES.TEXT_MUTED}`}
              >
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#story"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-base-content transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:focus-visible:ring-offset-black"
                >
                  Explore the case study
                  <Icon name="arrow-forward" />
                </a>
                <Link
                  href="/#portfolio"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-secondary/15 px-6 py-3 text-sm font-semibold text-base-content transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-base-700 dark:text-base-100"
                >
                  All case studies
                </Link>
              </div>
            </div>

            <div
              className={cn(
                "relative overflow-hidden rounded-[2rem] border border-secondary/10 p-6 shadow-xl dark:border-base-800 sm:p-8",
                COMMON_CLASSES.CARD_BG,
              )}
              aria-label={`${project.category} project flow`}
            >
              <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-2xl text-base-content shadow-lg shadow-primary/20">
                    <Icon name={visual.icon} />
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Confidential
                  </span>
                </div>

                <p
                  className={`mb-5 text-xs font-semibold uppercase tracking-[0.18em] ${COMMON_CLASSES.TEXT_MUTED}`}
                >
                  Solution flow
                </p>
                <div className="space-y-3">
                  {visual.flow.map((step, index) => (
                    <div key={step}>
                      <div className="flex items-center gap-4 rounded-2xl border border-secondary/10 bg-base/70 p-4 dark:border-base-700 dark:bg-black/30">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                          {index + 1}
                        </span>
                        <span
                          className={`font-semibold ${COMMON_CLASSES.TEXT}`}
                        >
                          {step}
                        </span>
                      </div>
                      {index < visual.flow.length - 1 && (
                        <div className="ml-8 h-3 w-px bg-primary/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <div className="mb-10 flex flex-col gap-6 border-b border-secondary/10 pb-8 dark:border-base-800 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Project narrative
                </p>
                <h2
                  className={`text-3xl font-bold sm:text-4xl ${COMMON_CLASSES.TEXT}`}
                >
                  From need to outcome
                </h2>
              </div>
              <nav
                className={`flex gap-4 text-sm font-medium ${COMMON_CLASSES.TEXT_MUTED}`}
                aria-label="Case study sections"
              >
                {storySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="transition-colors hover:text-primary"
                  >
                    {section.number}
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              {storySections.map((section) => (
                <article
                  id={section.id}
                  key={section.id}
                  className={cn(
                    "group scroll-mt-28 rounded-3xl border border-secondary/10 p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-base-800 sm:p-8",
                    COMMON_CLASSES.CARD_BG,
                  )}
                >
                  <div className="grid gap-6 sm:grid-cols-[72px_minmax(0,1fr)]">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary transition-colors group-hover:bg-primary group-hover:text-base-content">
                      <Icon name={section.icon} />
                    </div>
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-bold text-primary">
                          {section.number}
                        </span>
                        <span
                          className={`text-xs font-semibold uppercase tracking-[0.16em] ${COMMON_CLASSES.TEXT_MUTED}`}
                        >
                          {section.eyebrow}
                        </span>
                      </div>
                      <h3
                        className={`mb-4 text-2xl font-bold ${COMMON_CLASSES.TEXT}`}
                      >
                        {section.title}
                      </h3>
                      <p
                        className={`text-base leading-8 sm:text-lg ${COMMON_CLASSES.TEXT_MUTED}`}
                      >
                        {section.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-base-content"
                  >
                    <Icon name="globe-outline" />
                    View live project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full border border-secondary/20 px-5 py-3 text-sm font-semibold dark:border-base-700 ${COMMON_CLASSES.TEXT}`}
                  >
                    <Icon name="logo-github" />
                    View source code
                  </a>
                )}
              </div>
            )}
          </div>

          <aside
            className={cn(
              "rounded-3xl border border-secondary/10 p-6 dark:border-base-800 lg:sticky lg:top-28",
              COMMON_CLASSES.CARD_BG,
            )}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Project at a glance
            </p>

            {project.role && (
              <div className="border-b border-secondary/10 pb-5 dark:border-base-800">
                <p
                  className={`mb-1 text-xs uppercase tracking-wider ${COMMON_CLASSES.TEXT_MUTED}`}
                >
                  Role
                </p>
                <p className={`font-semibold ${COMMON_CLASSES.TEXT}`}>
                  {project.role}
                </p>
              </div>
            )}

            <div className="border-b border-secondary/10 py-5 dark:border-base-800">
              <p
                className={`mb-3 text-xs uppercase tracking-wider ${COMMON_CLASSES.TEXT_MUTED}`}
              >
                Technology stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-primary/10 px-2.5 py-1.5 text-xs font-semibold text-primary dark:bg-primary/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.confidentialityNote && (
              <div className="pt-5">
                <p
                  className={`mb-2 text-xs uppercase tracking-wider ${COMMON_CLASSES.TEXT_MUTED}`}
                >
                  Disclosure
                </p>
                <p className={`text-sm leading-6 ${COMMON_CLASSES.TEXT_MUTED}`}>
                  {project.confidentialityNote}
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>

      {(prev || next) && (
        <section className="border-t border-secondary/10 py-16 dark:border-base-800 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Keep exploring
                </p>
                <h2
                  className={`text-2xl font-bold sm:text-3xl ${COMMON_CLASSES.TEXT}`}
                >
                  More case studies
                </h2>
              </div>
              <Link
                href="/#portfolio"
                className={`hidden text-sm font-semibold transition-colors hover:text-primary sm:block ${COMMON_CLASSES.TEXT_MUTED}`}
              >
                View all
              </Link>
            </div>

            <nav
              className="grid gap-4 sm:grid-cols-2"
              aria-label="Other case studies"
            >
              {prev && (
                <Link
                  href={`/portfolio/${prev.id}`}
                  className={cn(
                    "group flex min-h-40 flex-col justify-between rounded-3xl border border-secondary/10 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-base-800",
                    COMMON_CLASSES.CARD_BG,
                  )}
                >
                  <span
                    className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${COMMON_CLASSES.TEXT_MUTED}`}
                  >
                    <Icon name="arrow-back" />
                    Previous case
                  </span>
                  <div>
                    <span className="mb-2 block text-xs font-semibold text-primary">
                      {prev.category}
                    </span>
                    <span
                      className={`text-xl font-bold transition-colors group-hover:text-primary ${COMMON_CLASSES.TEXT}`}
                    >
                      {prev.title}
                    </span>
                  </div>
                </Link>
              )}

              {next && (
                <Link
                  href={`/portfolio/${next.id}`}
                  className={cn(
                    "group flex min-h-40 flex-col justify-between rounded-3xl border border-secondary/10 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-base-800 sm:text-right",
                    COMMON_CLASSES.CARD_BG,
                    !prev && "sm:col-start-2",
                  )}
                >
                  <span
                    className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider sm:justify-end ${COMMON_CLASSES.TEXT_MUTED}`}
                  >
                    Next case
                    <Icon name="arrow-forward" />
                  </span>
                  <div>
                    <span className="mb-2 block text-xs font-semibold text-primary">
                      {next.category}
                    </span>
                    <span
                      className={`text-xl font-bold transition-colors group-hover:text-primary ${COMMON_CLASSES.TEXT}`}
                    >
                      {next.title}
                    </span>
                  </div>
                </Link>
              )}
            </nav>
          </div>
        </section>
      )}
    </div>
  );
}

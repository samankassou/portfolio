import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";

interface PortfolioPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.coverImg],
      type: "article",
    },
  };
}

export default async function PortfolioProjectPage({
  params,
}: PortfolioPageProps) {
  const { id } = await params;
  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Category Badge */}
      <span className="mb-4 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm dark:bg-primary-900/40 dark:text-primary-300">
        {project.category}
      </span>

      {/* Title */}
      <h1
        className={`mb-2 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${COMMON_CLASSES.TEXT}`}
      >
        {project.title}
      </h1>

      {/* Subtitle */}
      <p className={`mb-6 text-lg ${COMMON_CLASSES.TEXT_MUTED}`}>
        {project.link}
      </p>

      {/* Hero Image */}
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl">
        <Image
          src={project.coverImg}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* Description */}
      <p className={`mb-8 text-base leading-relaxed ${COMMON_CLASSES.TEXT}`}>
        {project.description}
      </p>

      {/* Technologies */}
      <section className="mb-8">
        <h2 className={`mb-4 text-xl font-semibold ${COMMON_CLASSES.TEXT}`}>
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm font-medium",
                "bg-base-200 text-secondary/80 dark:bg-[#131313] dark:text-base-300",
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Challenge / Solution / Results */}
      {(project.challenge || project.solution || project.results) && (
        <div className="mb-8 space-y-6">
          {project.challenge && (
            <section>
              <h2
                className={`mb-3 text-xl font-semibold ${COMMON_CLASSES.TEXT}`}
              >
                The Challenge
              </h2>
              <p className={`leading-relaxed ${COMMON_CLASSES.TEXT_MUTED}`}>
                {project.challenge}
              </p>
            </section>
          )}

          {project.solution && (
            <section>
              <h2
                className={`mb-3 text-xl font-semibold ${COMMON_CLASSES.TEXT}`}
              >
                The Solution
              </h2>
              <p className={`leading-relaxed ${COMMON_CLASSES.TEXT_MUTED}`}>
                {project.solution}
              </p>
            </section>
          )}

          {project.results && (
            <section>
              <h2
                className={`mb-3 text-xl font-semibold ${COMMON_CLASSES.TEXT}`}
              >
                Results
              </h2>
              <p className={`leading-relaxed ${COMMON_CLASSES.TEXT_MUTED}`}>
                {project.results}
              </p>
            </section>
          )}
        </div>
      )}

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="mb-8 flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-base-content transition-colors hover:bg-primary-600"
            >
              <Icon name="globe-outline" className="text-lg" />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors",
                "border-secondary/20 text-secondary hover:bg-secondary/5 dark:border-base-700 dark:text-base-200 dark:hover:bg-white/5",
              )}
            >
              <Icon name="logo-github" className="text-lg" />
              Source Code
            </a>
          )}
        </div>
      )}

      {/* Prev/Next Navigation */}
      {(prev || next) && (
        <nav className="mt-12 border-t border-secondary/10 pt-8 dark:border-base-800">
          <div className="flex items-stretch justify-between gap-4">
            {prev ? (
              <Link
                href={`/portfolio/${prev.id}`}
                className={cn(
                  "group flex flex-1 flex-col rounded-lg p-4 transition-colors",
                  "hover:bg-base-200 dark:hover:bg-[#1C1C1C]",
                )}
              >
                <span className="mb-1 flex items-center gap-1 text-xs text-secondary/60 dark:text-base-400">
                  <Icon name="chevron-back" className="text-sm" />
                  Previous
                </span>
                <span className="line-clamp-2 font-medium text-secondary transition-colors group-hover:text-primary-500 dark:text-base-100">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`/portfolio/${next.id}`}
                className={cn(
                  "group flex flex-1 flex-col items-end rounded-lg p-4 text-right transition-colors",
                  "hover:bg-base-200 dark:hover:bg-[#1C1C1C]",
                )}
              >
                <span className="mb-1 flex items-center gap-1 text-xs text-secondary/60 dark:text-base-400">
                  Next
                  <Icon name="chevron-forward" className="text-sm" />
                </span>
                <span className="line-clamp-2 font-medium text-secondary transition-colors group-hover:text-primary-500 dark:text-base-100">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </nav>
      )}
    </div>
  );
}

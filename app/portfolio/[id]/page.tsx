import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import ProjectDiagram from "@/app/components/studio/ProjectDiagram";
import Reveal from "@/app/components/studio/Reveal";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => String(item.id) === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Foulla Samankassou`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      ...(project.coverImg ? { images: [project.coverImg] } : {}),
      type: "article",
    },
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { id } = await params;
  const index = projects.findIndex((item) => String(item.id) === id);
  if (index < 0) notFound();
  const project = projects[index];
  const previous = projects[index - 1],
    next = projects[index + 1];
  const sections = [
    {
      id: "challenge",
      label: "01 / The challenge",
      title: "Understand the problem.",
      text: project.challenge,
    },
    {
      id: "approach",
      label: "02 / The approach",
      title: "Connect the dots.",
      text: project.solution,
    },
    {
      id: "outcome",
      label: "03 / The outcome",
      title: "Move things forward.",
      text: project.results,
    },
  ];
  return (
    <>
      <section className="case-hero studio-wrap">
        <nav className="case-breadcrumb eyebrow" aria-label="Breadcrumb">
          <Link href="/#portfolio">← Selected work</Link>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </nav>
        <div className="case-heading">
          <p className="eyebrow section-index">
            {project.category} / Case study
          </p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="case-meta">
          <div>
            <p className="eyebrow">My role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="eyebrow">Focus</p>
            <p>{project.link}</p>
          </div>
          <div>
            <p className="eyebrow">Technologies</p>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <ProjectDiagram project={project} />
        <p className="case-disclosure">
          {project.confidentialityNote}{" "}
          {project.coverImg
            ? ""
            : "The illustration shows a conceptual workflow, not the actual architecture."}
        </p>
      </section>
      <section className="case-story studio-section studio-wrap" id="story">
        <aside>
          <p className="eyebrow section-index">From need to outcome</p>
          <nav aria-label="Case study sections">
            <a href="#challenge">
              01 <span>Challenge</span> ↘
            </a>
            <a href="#approach">
              02 <span>Approach</span> ↘
            </a>
            <a href="#outcome">
              03 <span>Outcome</span> ↘
            </a>
          </nav>
          <Link className="text-link" href="/#contact">
            Discuss a similar project ↗
          </Link>
        </aside>
        <div>
          {sections
            .filter((section) => section.text)
            .map((section) => (
              <Reveal key={section.id}>
                <article className="case-story-section" id={section.id}>
                  <p className="eyebrow section-index">{section.label}</p>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </article>
              </Reveal>
            ))}
          {project.screenshots?.map((screenshot) => (
            <figure className="case-screenshot" key={screenshot.src}>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(max-width: 900px) 100vw, 65vw"
              />
              <figcaption>{screenshot.caption}</figcaption>
            </figure>
          ))}
          {(project.liveUrl ||
            project.githubUrl ||
            project.sourceLinks?.length) && (
            <div className="hero-actions">
              {project.liveUrl && (
                <a
                  className="studio-button"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live project ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  className="text-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source code ↗
                </a>
              )}
              {project.sourceLinks?.map((source) => (
                <a
                  className="text-link"
                  href={source.url}
                  key={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="case-next-section">
        <div className="studio-wrap">
          <p className="eyebrow section-index">Keep exploring</p>
          <nav className="case-next-grid" aria-label="Other case studies">
            {previous && (
              <Link href={`/portfolio/${previous.id}`}>
                <span className="eyebrow">← Previous case study</span>
                <h2>{previous.title}</h2>
                <span className="eyebrow">{previous.category}</span>
              </Link>
            )}
            {next && (
              <Link href={`/portfolio/${next.id}`}>
                <span className="eyebrow">Next case study ↗</span>
                <h2>{next.title}</h2>
                <span className="eyebrow">{next.category}</span>
              </Link>
            )}
          </nav>
          <Link className="text-link" href="/#portfolio">
            View all case studies ↗
          </Link>
        </div>
      </section>
    </>
  );
}

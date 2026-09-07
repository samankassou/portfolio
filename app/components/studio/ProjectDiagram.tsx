import Image from "next/image";
import type { Project } from "@/lib/types";

const diagrams: Record<
  number,
  { code: string; subtitle: string; nodes: [string, string][] }
> = {
  4: {
    code: "CLOUD / 01",
    subtitle: "Application modernization",
    nodes: [
      [".NET", "On-premises applications"],
      ["CI / CD", "Azure DevOps"],
      ["AZURE", "Cloud deployment"],
    ],
  },
  5: {
    code: "APPLICATION / 02",
    subtitle: "Transportation management",
    nodes: [
      ["INPUT", "Operational needs"],
      ["TMS", "Laravel application"],
      ["FLOW", "Logistics workflows"],
    ],
  },
  1: {
    code: "INTELLIGENCE / 03",
    subtitle: "AI-assisted legal monitoring",
    nodes: [
      ["SOURCE", "Unstructured information"],
      ["AI", "Azure OpenAI"],
      ["REVIEW", "Human validation"],
    ],
  },
  2: {
    code: "AUTOMATION / 04",
    subtitle: "Intelligent document processing",
    nodes: [
      ["DOCS", "Import manifests"],
      ["EXTRACT", "AI Builder"],
      ["DATA", "Structured information"],
    ],
  },
  3: {
    code: "DATA / 05",
    subtitle: "Reporting modernization",
    nodes: [
      ["QV", "QlikView reports"],
      ["MODEL", "Data preparation"],
      ["POWER BI", "Business dashboards"],
    ],
  },
};

export default function ProjectDiagram({ project }: { project: Project }) {
  const diagram = diagrams[project.id] ?? {
    code: project.category,
    subtitle: project.link,
    nodes: [
      ["CONTEXT", "Business needs"],
      ["BUILD", "Engineering approach"],
      ["OUTCOME", "Delivered solution"],
    ],
  };
  if (project.coverImg)
    return (
      <figure className="project-diagram supplied-project-image">
        <Image
          src={project.coverImg}
          alt={project.coverAlt || project.title}
          fill
          sizes="(max-width: 700px) 100vw, 55vw"
          className="object-contain"
        />
        <figcaption>{project.coverCaption || "Project overview"}</figcaption>
      </figure>
    );
  return (
    <figure className={`project-diagram diagram-${project.id}`}>
      <div className="diagram-meta eyebrow">
        <span>{diagram.code}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <svg
        className="diagram-desktop-flow"
        viewBox="0 0 720 320"
        role="img"
        aria-label={`Conceptual workflow: ${diagram.nodes.map((n) => n[1]).join(" to ")}. Not the actual application architecture.`}
      >
        <g
          className="diagram-orbits"
          fill="none"
          stroke="currentColor"
          opacity=".13"
        >
          <circle cx="360" cy="145" r="155" />
          <circle cx="360" cy="145" r="118" />
          <path d="M0 145H720M360 0V320M0 35H720M0 255H720" />
        </g>
        <g fill="none" stroke="currentColor">
          <path
            className="diagram-flow"
            d="M164 145H294M426 145H556"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <path d="m280 140 6 5-6 5m262-10 6 5-6 5" />
        </g>
        {diagram.nodes.map(([title, subtitle], i) => (
          <g key={title} transform={`translate(${100 + i * 260},145)`}>
            <rect
              className="diagram-node-outer"
              x="-72"
              y="-58"
              width="144"
              height="116"
              rx="2"
              fill="none"
              stroke="currentColor"
              opacity=".24"
            />
            <rect
              className="diagram-node"
              x="-64"
              y="-50"
              width="128"
              height="100"
              rx="2"
            />
            <text textAnchor="middle" y="7" className="diagram-node-title">
              {title}
            </text>
            <circle cx="-72" cy="0" r="3" fill="currentColor" />
            <circle cx="72" cy="0" r="3" fill="currentColor" />
            <text textAnchor="middle" y="88" className="diagram-node-caption">
              <tspan x="0">{subtitle.split(" ").slice(0, -1).join(" ")}</tspan>
              <tspan x="0" dy="24">
                {subtitle.split(" ").at(-1)}
              </tspan>
            </text>
          </g>
        ))}
      </svg>
      <ol
        className="diagram-mobile-flow"
        aria-label="Conceptual project workflow"
      >
        {diagram.nodes.map(([title, subtitle]) => (
          <li key={title}>
            <span>{title}</span>
            <span>{subtitle}</span>
          </li>
        ))}
      </ol>
      <figcaption>
        <span>{diagram.subtitle}</span>
        <span>Conceptual workflow</span>
      </figcaption>
    </figure>
  );
}

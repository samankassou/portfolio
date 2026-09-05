import Image from "next/image";
import BrandIcon from "@/app/components/ui/BrandIcon";
import Icon, { type IconName } from "@/lib/components/Icon";
import type { Project } from "@/lib/types";

type Step = { label: string; brand?: string; icon?: IconName };
const scenes: Record<number, { title: string; color: string; steps: Step[] }> =
  {
    4: {
      title: "From application to cloud",
      color: "#0078d4",
      steps: [
        { label: ".NET", brand: ".NET" },
        { label: "Azure DevOps", brand: "Azure DevOps" },
        { label: "Microsoft Azure", brand: "Microsoft Azure" },
      ],
    },
    5: {
      title: "Connecting logistics operations",
      color: "#ef4444",
      steps: [
        { label: "Operations", icon: "globe-outline" },
        { label: "Laravel", brand: "Laravel" },
        { label: "Workflows", icon: "git-branch" },
      ],
    },
    1: {
      title: "Information, with human oversight",
      color: "#8b5cf6",
      steps: [
        { label: "Legal sources", icon: "newspaper-outline" },
        { label: "Azure OpenAI", icon: "bulb" },
        { label: "Human review", icon: "person-outline" },
      ],
    },
    2: {
      title: "From manifests to structured data",
      color: "#0891b2",
      steps: [
        { label: "Manifests", icon: "folder" },
        { label: "AI Builder", icon: "bulb" },
        { label: "Validated data", icon: "grid" },
      ],
    },
    3: {
      title: "A clearer view of business data",
      color: "#b08b00",
      steps: [
        { label: "QlikView", icon: "bar-chart" },
        { label: "Data model", icon: "git-branch" },
        { label: "Power BI", icon: "bar-chart" },
      ],
    },
  };

/** Concept illustrations describe public project summaries, not private architecture. */
export default function ProjectVisual({ project }: { project: Project }) {
  const scene = scenes[project.id] ?? {
    title: project.category,
    color: "#0078d4",
    steps: [
      { label: "Inputs", icon: "folder" as const },
      { label: "Application", icon: "code-slash" as const },
      { label: "Output", icon: "grid" as const },
    ],
  };
  return (
    <figure className="mb-6 overflow-hidden rounded-xl border border-secondary/10 bg-base-100 dark:border-base-700 dark:bg-[#171b24]">
      {project.coverImg ? (
        <div className="relative aspect-[16/9]">
          <Image
            src={project.coverImg}
            alt={project.coverAlt || project.title}
            fill
            sizes="(max-width: 704px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      ) : (
        <div
          className="relative isolate flex min-h-60 flex-col justify-between overflow-hidden p-4 sm:p-6"
          style={{
            background: `linear-gradient(135deg, ${scene.color}18, transparent 70%)`,
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-20"
            viewBox="0 0 480 260"
            fill="none"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle
              cx="420"
              cy="35"
              r="115"
              stroke={scene.color}
              strokeWidth="1"
            />
            <circle
              cx="420"
              cy="35"
              r="85"
              stroke={scene.color}
              strokeDasharray="4 8"
            />
            <path
              d="M0 215H100L160 155H320L400 75H480M0 235H110L170 175H330L410 95H480"
              stroke={scene.color}
            />
            {[60, 140, 220, 300, 380, 460].map((x) => (
              <circle key={x} cx={x} cy="35" r="2" fill={scene.color} />
            ))}
          </svg>
          <div className="mb-5">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-base-800 dark:text-base-400">
              Solution overview
            </p>
            <p className="min-h-12 max-w-64 text-lg font-semibold leading-tight text-base-content dark:text-base-100">
              {scene.title}
            </p>
          </div>
          <ol
            className="relative flex items-stretch gap-3"
            aria-label="Illustrative project workflow"
          >
            {scene.steps.map((step) => (
              <li
                key={step.label}
                className="relative flex min-w-0 flex-1 flex-col items-center text-center"
              >
                <div className="mb-3 flex size-16 items-center justify-center rounded-2xl border border-black/5 bg-white shadow-sm">
                  {step.brand ? (
                    <BrandIcon name={step.brand} size={34} />
                  ) : (
                    <span style={{ color: scene.color }}>
                      <Icon name={step.icon!} className="text-3xl" />
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-semibold leading-4 text-base-content dark:text-base-200">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <figcaption className="border-t border-secondary/10 px-4 py-2 text-[11px] text-base-800 dark:border-base-700 dark:text-base-400">
        {project.coverImg
          ? project.coverCaption || "Project overview"
          : "Concept illustration of an anonymized project"}
      </figcaption>
    </figure>
  );
}

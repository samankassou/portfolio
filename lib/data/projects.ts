/**
 * Portfolio projects data
 */

import type { ProjectCategory, Project } from "@/lib/types";

/**
 * Available project categories for filtering
 */
export const projectCategories: ProjectCategory[] = [
  "All categories",
  "Cloud & DevOps",
  "Web Applications",
  "AI & Automation",
  "BI & Data",
];

/**
 * Portfolio projects
 */
export const projects: Project[] = [
  {
    id: 4,
    // Replace with an image path in public/ and a meaningful description.
    coverImg: "",
    coverAlt: "",
    coverCaption: "",
    title: ".NET Applications to Azure",
    link: "Cloud migration and modernization",
    category: "Cloud & DevOps",
    description:
      "Migration and modernization of on-premises .NET business applications on Microsoft Azure using Azure DevOps.",
    technologies: ["Azure DevOps", "Microsoft Azure", ".NET", "C#"],
    role: "Application Analyst / Technical Lead",
    confidentialityNote:
      "Anonymized case study — application architecture is confidential.",
    challenge:
      "On-premises .NET business applications needed to be migrated to Azure across environment setup, analysis, design, development, and deployment.",
    solution:
      "Led the migration work from environment setup and application analysis through solution design, development, and deployment on Microsoft Azure with Azure DevOps.",
    results:
      "Migrated the on-premises .NET applications to Azure and carried the work through deployment.",
  },
  {
    id: 6,
    title: "Wida — AI-assisted invoice processing",
    link: "From invoice documents to reviewed data",
    category: "AI & Automation",
    description:
      "An open-source workspace that turns invoice documents into structured, reviewable data, combining Azure Document Intelligence extraction with human review.",
    technologies: [
      "Next.js",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Azure Document Intelligence",
      "RabbitMQ",
    ],
    role: "Full-stack development",
    coverImg: "/img/projects/wida-review.png",
    coverAlt:
      "Wida shows an original invoice beside editable extracted fields, with an uncertain invoice number flagged for review.",
    coverCaption: "Invoice review · French interface · Fictional demo data",
    coverWidth: 1016,
    coverHeight: 923,
    confidentialityNote:
      "Open-source project. Screenshots show the demo interface with fictional documents and extraction results.",
    challenge:
      "Turning PDF and image invoices into structured records requires more than extracting text. Uncertain fields need to be checked against the original, corrections must survive a new analysis, and users need a clear view of what is processing, ready for review, or saved.",
    solution:
      "Built a Next.js and TypeScript workspace backed by an ASP.NET Core API and PostgreSQL. Azure Document Intelligence extracts invoice headers and line items, while RabbitMQ and a .NET background worker handle analysis asynchronously. The review screen pairs the original with editable fields and confidence indicators. Draft recovery preserves edits during reanalysis, and Google sign-in with API ownership checks isolates each user's documents.",
    results:
      "Implemented the workflow from document upload through extraction, human review, and invoice saving, with CSV export of saved invoice headers. An account-free demo uses fictional examples to make the review experience explorable. Automated tests cover workflow and extraction regressions; demo screenshots illustrate the interface rather than proving live service integration.",
    sourceLinks: [
      {
        label: "Frontend source",
        url: "https://github.com/samankassou/wida-front",
      },
      {
        label: "Backend source",
        url: "https://github.com/samankassou/wida-api",
      },
    ],
    screenshots: [
      {
        src: "/img/projects/wida-inbox.png",
        alt: "Wida document inbox showing eight fictional invoices, their suppliers, amounts, and processing statuses.",
        caption:
          "Document inbox · Track what needs review and what is saved. Fictional demo data, captured 12 September 2026.",
        width: 1016,
        height: 923,
      },
    ],
  },
  {
    id: 5,
    // Replace with an image path in public/ and a meaningful description.
    coverImg: "",
    coverAlt: "",
    coverCaption: "",
    title: "Transportation Management System",
    link: "Operational web application",
    category: "Web Applications",
    description:
      "A web-based Transportation Management System designed around logistics operations and internal workflows.",
    technologies: ["Laravel", "PHP", "JavaScript", "SQL"],
    role: "Application Analyst / Developer",
    confidentialityNote:
      "Anonymized case study — screens and operational rules are confidential.",
    challenge:
      "Operational teams needed a dedicated application aligned with transportation workflows rather than a generic off-the-shelf experience.",
    solution:
      "Designed and developed the application around the required business processes, with attention to maintainability and day-to-day usability.",
    results:
      "Delivered a dedicated web application foundation tailored to the transportation management workflow.",
  },
  {
    id: 1,
    // Replace with an image path in public/ and a meaningful description.
    coverImg: "",
    coverAlt: "",
    coverCaption: "",
    title: "AI-Powered Legal Monitoring",
    link: "Enterprise AI solution",
    category: "AI & Automation",
    description:
      "An AI-assisted legal monitoring solution designed to help teams identify, organize, and review relevant regulatory information.",
    technologies: ["Azure OpenAI", "Copilot Studio", "Power Platform"],
    role: "BI/AI Project Manager",
    confidentialityNote:
      "Anonymized case study — operational details are confidential.",
    challenge:
      "Legal and operational teams needed a more structured way to monitor information spread across unstructured sources while keeping human review at the center of the process.",
    solution:
      "Led the solution design and delivery approach, combining Azure OpenAI capabilities with an assisted review workflow and internal AI adoption support.",
    results:
      "Established a reusable foundation for AI-assisted legal monitoring and supported adoption through webinars, training, and user guidance.",
  },
  {
    id: 2,
    // Replace with an image path in public/ and a meaningful description.
    coverImg: "",
    coverAlt: "",
    coverCaption: "",
    title: "Intelligent Manifest Data Extraction",
    link: "Document processing automation",
    category: "AI & Automation",
    description:
      "An intelligent document-processing workflow for extracting structured information from unstructured import manifests.",
    technologies: ["AI Builder", "Azure AI", "Power Platform"],
    role: "BI/AI Project Manager",
    confidentialityNote:
      "Anonymized case study — source documents and business rules are confidential.",
    challenge:
      "Import manifests contain high-value operational information in formats that are difficult to process consistently with traditional rules alone.",
    solution:
      "Managed the design of an AI-assisted extraction workflow that converts document content into structured data while preserving validation and review steps.",
    results:
      "Created a structured approach for processing previously unstructured information and prepared the workflow for iterative quality improvement.",
  },
  {
    id: 3,
    // Replace with an image path in public/ and a meaningful description.
    coverImg: "",
    coverAlt: "",
    coverCaption: "",
    title: "QlikView to Power BI Migration",
    link: "Business intelligence modernization",
    category: "BI & Data",
    description:
      "A reporting modernization initiative moving business dashboards from QlikView to Power BI.",
    technologies: ["Power BI", "QlikView", "Talend", "SQL"],
    role: "Project Lead",
    confidentialityNote:
      "Anonymized case study — dashboards and company data are confidential.",
    challenge:
      "Existing reports needed to be understood, prioritized, and rebuilt without losing the business logic used by operational teams.",
    solution:
      "Led the migration approach, covering report analysis, data preparation, dashboard reconstruction, stakeholder validation, and transition support.",
    results:
      "Helped transition the reporting environment toward Power BI while preserving the operational knowledge embedded in existing reports.",
  },
];

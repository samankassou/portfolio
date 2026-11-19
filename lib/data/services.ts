/**
 * Services data
 */

import type { Service } from "@/lib/types";

/**
 * Services offered
 */
export const services: Service[] = [
  {
    id: 1,
    icon: "cloud",
    title: "Azure DevOps & CI/CD",
    summary:
      "From environment setup to deployment, I help teams deliver .NET applications on Azure through structured CI/CD pipelines.",
    items: [
      "Azure DevOps CI/CD pipelines",
      "Application environment setup",
      "Application deployment",
      ".NET application delivery",
    ],
  },
  {
    id: 2,
    icon: "cloud",
    title: "Azure Application Modernization",
    summary:
      "Understand what exists. Design what comes next. Move on-premises applications onto Microsoft Azure with a considered migration approach.",
    items: [
      "On-premises .NET migration to Azure",
      "Application analysis and design",
      "Application development and deployment",
      "Legacy system modernization",
    ],
  },
  {
    id: 3,
    icon: "code-slash",
    title: ".NET & Full-Stack Engineering",
    summary:
      "Maintainable applications built around real workflows, with .NET and C#, Laravel and PHP, and React or Vue.js frontends.",
    items: [
      ".NET Core and C# applications",
      "Laravel and PHP applications",
      "React and Vue.js frontends",
      "E-commerce platforms",
    ],
  },
  {
    id: 4,
    icon: "bar-chart",
    title: "AI, Automation & Business Intelligence",
    summary:
      "Turn unstructured information into something useful, with human review and adoption at the center of the process.",
    items: [
      "Azure OpenAI integration",
      "AI-powered document processing",
      "Copilot Studio and AI Builder",
      "Power BI and QlikView migration",
    ],
  },
];

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
    items: [
      "Azure OpenAI integration",
      "AI-powered document processing",
      "Copilot Studio and AI Builder",
      "Power BI and QlikView migration",
    ],
  },
];

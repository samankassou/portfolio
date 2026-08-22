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
    icon: "bar-chart",
    title: "Business Intelligence & Data Analytics",
    items: [
      "Power BI dashboard development",
      "QlikView to Power BI migration",
      "Data pipeline design with Talend",
      "Advanced data visualization",
    ],
  },
  {
    id: 2,
    icon: "bulb",
    title: "AI & Automation Solutions",
    items: [
      "Azure OpenAI integration",
      "AI-powered document processing",
      "Copilot Studio development",
      "AI Builder implementations",
    ],
  },
  {
    id: 3,
    icon: "cloud",
    title: "Cloud & Application Modernization",
    items: [
      "Azure cloud migration",
      "Legacy system modernization",
      "Azure DevOps CI/CD pipelines",
      ".NET application evolution",
    ],
  },
  {
    id: 4,
    icon: "code-slash",
    title: "Full-Stack Web Development",
    items: [
      "Laravel & PHP applications",
      "React & VueJS frontends",
      ".NET Core applications",
      "E-commerce platforms",
    ],
  },
];

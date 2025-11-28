/**
 * Services data
 * Extracted from servicesList.js
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
    icon: "cloud",
    title: "Cloud Solutions & Azure Development",
    items: [
      "Azure cloud migration",
      "Azure OpenAI integration",
      "Azure DevOps CI/CD pipelines",
      "Cloud infrastructure setup",
    ],
  },
  {
    id: 3,
    icon: "bulb",
    title: "AI & Automation Solutions",
    items: [
      "AI-powered document processing",
      "Copilot Studio development",
      "AI Builder implementations",
      "Intelligent automation workflows",
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
  {
    id: 5,
    icon: "git-branch",
    title: "DevOps & Application Modernization",
    items: [
      "Legacy system migration (AS400 to Windows)",
      "Application rebranding & maintenance",
      "CI/CD pipeline implementation",
      "Version control & deployment automation",
    ],
  },
];

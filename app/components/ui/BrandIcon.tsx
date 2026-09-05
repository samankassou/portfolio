import Image from "next/image";

// Original-color SVGs from Devicon; provenance is in public/img/brands/SOURCES.md.
const brands: Record<string, string> = {
  "Microsoft Azure": "azure",
  Azure: "azure",
  "Azure DevOps": "azuredevops",
  ".NET": "dotnetcore",
  ".NET Core": "dotnetcore",
  "C#": "csharp",
  Docker: "docker",
  Git: "git",
  Laravel: "laravel",
  React: "react",
  TypeScript: "typescript",
  JavaScript: "javascript",
  PHP: "php",
  "SQL Server": "microsoftsqlserver",
};

export default function BrandIcon({
  name,
  size = 18,
}: {
  name: string;
  size?: number;
}) {
  const asset = brands[name];
  if (!asset) return null;
  return (
    <Image
      src={`/img/brands/${asset}.svg`}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="inline-block shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  );
}

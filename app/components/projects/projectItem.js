import Image from "next/image";

export default function ProjectItem({ project }) {
  return (
    <Image
      className="h-auto max-w-full mx-auto rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
      src={project.coverImg}
      width={400}
      height={400}
      alt={project.title}
    />
  );
}

import Image from "next/image";

export default function ProjectItem({ project }) {
  return (
    <div className="rounded">
      <Image
        src={project.coverImg}
        width={200}
        height={200}
        alt={project.title}
      />
    </div>
  );
}

import Image from "next/image";

export default function ProjectItem({ project }) {
  return (
    <div className="h-fit group">
      <div className="relative overflow-hidden">
        <Image
          className="h-auto max-w-full mx-auto rounded-xl cursor-pointer"
          src={project.coverImg}
          width={400}
          height={400}
          alt={project.title}
        />
        <div className="absolute rounded-xl h-full w-full bg-primary/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-4xl">
          <a href="#" target="_blank">
            <ion-icon name="add-outline"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

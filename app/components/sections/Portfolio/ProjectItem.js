import Image from "next/image";

export default function ProjectItem({ project }) {
  return (
    <div className="group h-fit">
      <div className="relative overflow-hidden">
        <Image
          className="mx-auto h-auto max-w-full cursor-pointer rounded-xl"
          src={project.coverImg}
          width={400}
          height={400}
          alt={project.title}
        />
        <div className="absolute -bottom-10 flex h-full w-full items-center justify-center rounded-xl bg-primary/60 text-[32px] opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <a href="#" target="_blank">
            <ion-icon name="add-outline" suppressHydrationWarning></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

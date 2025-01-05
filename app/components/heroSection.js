import Btn from "./btn";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mx-4 mb-16 overflow-hidden rounded-xl bg-base-100 md:mb-24 dark:bg-[#1C1C1C]">
      <div className="grid items-center md:grid-cols-2">
        <div className="p-8 sm:p-10">
          <h1 className="mb-4 text-center text-3xl font-semibold text-base-content md:text-left dark:text-base-100">
            I design products that delight and inspire people.
          </h1>
          <p className="mb-6 max-w-md text-center font-normal text-secondary/60 md:text-left dark:text-base-100 dark:text-base-400">
            Hi! I'm Foulla, A Product Designer and Visual Developer in SF. I
            specialize in UI/UX Design, Responsive Web Design, and Visual
            Development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Btn href="#" variant="primary" label="Let’s Talk"></Btn>
          </div>
        </div>
        <div className="relative hidden h-[368px] pt-4 md:block">
          <Image
            src="/img/emerging-hero-real.webp"
            alt="Portrait of a smiling professional"
            fill
            priority
            className="object-contain"
            sizes="(min-width: 1024px) 368px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}

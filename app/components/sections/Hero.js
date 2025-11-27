import Btn from "../ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mx-4 mb-12 overflow-hidden rounded-2xl bg-base-100 md:mx-0 dark:bg-[#1C1C1C]">
      <div className="grid items-center md:grid-cols-2">
        <div className="p-6 sm:p-8 md:p-12">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-base-content sm:mb-6 sm:text-4xl md:text-5xl dark:text-base-100">
            I design products that <span className="text-primary">delight</span>{" "}
            and inspire people.
          </h1>
          <p className="mb-6 max-w-md text-sm leading-relaxed text-secondary/60 sm:mb-8 sm:text-base dark:text-base-400">
            Hi! I'm Foulla, A Product Designer and Visual Developer in SF. I
            specialize in UI/UX Design, Responsive Web Design, and Visual
            Development.
          </p>
          <Btn href="#contact" variant="primary" label="Let's Talk" />
        </div>
        <div className="relative hidden h-[500px] md:block">
          <Image
            src="/img/emerging-hero-real.webp"
            alt="Professional portrait"
            fill
            priority
            className="object-contain object-center"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}

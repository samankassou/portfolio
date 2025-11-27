import Btn from "../ui/Button";
import Image from "next/image";
import { COMMON_CLASSES } from "@/lib/constants/colors";

export default function HeroSection() {
  return (
    <div className={`mx-4 mb-12 overflow-hidden rounded-2xl md:mx-0 ${COMMON_CLASSES.CARD_BG}`}>
      <div className="grid items-center md:grid-cols-2">
        <div className="p-6 sm:p-8 md:p-12">
          <h1 className={`mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl ${COMMON_CLASSES.TEXT}`}>
            I design products that <span className="text-primary">delight</span>{" "}
            and inspire people.
          </h1>
          <p className={`mb-6 max-w-md text-sm leading-relaxed sm:mb-8 sm:text-base ${COMMON_CLASSES.TEXT_MUTED}`}>
            Hi! I'm Foulla, A Product Designer and Visual Developer in SF. I
            specialize in UI/UX Design, Responsive Web Design, and Visual
            Development.
          </p>
          <Btn href="#contact" variant="primary" label="Let's Talk" />
        </div>
        <div className="relative hidden h-[500px] md:block">
          <Image
            src="/img/hero/emerging-hero-real.webp"
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

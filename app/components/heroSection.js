import Btn from "./btn";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="rounded-xl bg-base-100 overflow-hidden mx-4">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-base-content mb-3 leading-9">
            I design products that delight and inspire people.
          </h1>
          <p className="font-normal text-secondary text-opacity-60 leading-6 mb-8 max-w-md mx-auto md:mx-0">
            Hi! I'm Foulla, A Product Designer and Visual Developer in SF. I
            specialize in UI/UX Design, Responsive Web Design, and Visual
            Development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Btn href="#" variant="primary" label="Book a call"></Btn>
          </div>
        </div>
        <div className="hidden md:block relative h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="Portrait of a smiling professional"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

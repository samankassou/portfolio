import Image from "next/image";
import TestimonialRating from "./testimonialRating";

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-2xl bg-base-100 p-8 dark:bg-[#1C1C1C]">
      <div className="flex items-center gap-4">
        <Image
          className="size-16 flex-none rounded-full object-cover"
          src={testimonial.authorProfilePic}
          width={64}
          height={64}
          alt={testimonial.authorName}
        />
        <div className="flex-auto">
          <div className="text-base font-semibold text-base-content dark:text-base-100">
            {testimonial.authorName}
          </div>
          <div className="text-sm text-secondary/60 dark:text-base-400">
            {testimonial.authorRole}
          </div>
        </div>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-secondary/60 dark:text-base-400">
        {testimonial.text}
      </p>
      <div className="flex gap-0.5 text-lg text-primary">
        <TestimonialRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

import Image from "next/image";
import TestimonialRating from "./testimonialRating";

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-xl bg-base-100 p-6">
      <div className="flex items-center gap-4">
        <Image
          className="size-16 flex-none rounded-full"
          src={testimonial.authorProfilePic}
          width={400}
          height={400}
          alt={testimonial.authorName}
        />
        <div className="flex-auto">
          <div className="text-lg font-semibold text-base-content">
            {testimonial.authorName}
          </div>
          <div className="text-sm text-secondary/60 text-opacity-60">
            {testimonial.authorRole}
          </div>
        </div>
      </div>
      <p className="text-base font-normal text-secondary/60">
        {testimonial.text}
      </p>
      <div className="flex gap-1 text-xs text-primary">
        <TestimonialRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

import Image from "next/image";
import TestimonialRating from "./testimonialRating";

export default function TestimonialItem({ testimonial }) {
  return (
    <div className="grid grid-cols-1 gap-6 rounded-xl bg-base-100 p-6">
      <div className="flex items-center gap-4">
        <Image
          className="size-10 flex-none rounded-full"
          src={testimonial.authorProfilePic}
          width={400}
          height={400}
          alt={testimonial.authorName}
        />
        <div className="flex-auto">
          <div className="font-medium text-base-content">
            {testimonial.authorName}
          </div>
          <div className="text-secondary text-opacity-60 text-sm">
            {testimonial.authorRole}
          </div>
        </div>
      </div>
      <p className="font-normal text-base text-secondary text-opacity-60">
        {testimonial.text}
      </p>
      <div className="text-xs text-primary flex gap-1">
        <TestimonialRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

import TestimonialItem from "./TestimonialItem";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {

  return (
    <ul className="scrollbar-hidden flex gap-6 overflow-x-auto scroll-smooth pb-2">
      {testimonials &&
        testimonials.map((testimonial) => (
          <li
            className="w-[calc(100%-48px)] shrink-0 md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]"
            key={testimonial.id}
          >
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          </li>
        ))}
    </ul>
  );
}

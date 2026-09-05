import TestimonialItem from "./TestimonialItem";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {testimonials &&
        testimonials.map((testimonial) => (
          <li className="min-w-0" key={testimonial.id}>
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          </li>
        ))}
    </ul>
  );
}

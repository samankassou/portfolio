import TestimonialItem from "./testimonialItem";

export default function TestimonialsList() {
  let testimonials = [
    {
      id: 1,
      authorName: "John Doe",
      authorProfilePic:
        "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
      authorRole: "Software Engineer",
      text: "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
      rating: 4,
    },
    {
      id: 2,
      authorName: "John Doe",
      authorProfilePic:
        "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
      authorRole: "Software Engineer",
      text: "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
      rating: 4.5,
    },
    {
      id: 3,
      authorName: "John Doe",
      authorProfilePic:
        "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80",
      authorRole: "UI / UX Design",
      text: "The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.",
      rating: 5,
    },
  ];

  return (
    <ul className="scrollbar-hidden snap-x-proximity -m-4 flex gap-4 overflow-x-auto scroll-smooth p-4 xl:grid xl:grid-cols-3">
      {testimonials &&
        testimonials.map((testimonial) => (
          <li
            className="min-w-[280px] snap-center md:min-w-[308px]"
            key={testimonial.id}
          >
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          </li>
        ))}
    </ul>
  );
}

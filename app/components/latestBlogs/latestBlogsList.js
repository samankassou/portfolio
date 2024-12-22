import TestimonialItem from "./latestBlogItem";

export default function latestBlogsList() {
  let blogs = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      thumbnail: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply dummy text",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      thumbnail: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply dummy text",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      thumbnail: "https://picsum.photos/200/300?random=3",
    },
  ];

  return (
    <ul className="flex overflow-x-auto scrollbar-hidden scroll-smooth snap-x-proximity p-4 -m-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs &&
        blogs.map((blog) => (
          <li className="min-w-72 snap-center" key={blog.id}>
            <TestimonialItem blog={blog} />
          </li>
        ))}
    </ul>
  );
}

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
    <ul className="scrollbar-hidden snap-x-proximity -m-4 flex gap-4 overflow-x-auto scroll-smooth p-4 xl:grid xl:grid-cols-2 2xl:grid-cols-3">
      {blogs &&
        blogs.map((blog) => (
          <li className="min-w-72 snap-center" key={blog.id}>
            <TestimonialItem blog={blog} />
          </li>
        ))}
    </ul>
  );
}

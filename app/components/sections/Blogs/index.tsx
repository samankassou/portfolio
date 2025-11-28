import BlogItem from "./BlogItem";
import { blogs } from "@/lib/data/blogs";

export default function Blogs() {

  return (
    <ul className="scrollbar-hidden snap-x-proximity flex gap-4 overflow-x-auto scroll-smooth pb-4">
      {blogs &&
        blogs.map((blog) => (
          <li className="min-w-72 max-w-xs snap-center" key={blog.id}>
            <BlogItem key={blog.id} blog={blog} />
          </li>
        ))}
    </ul>
  );
}

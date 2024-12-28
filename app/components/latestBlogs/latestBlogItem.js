import Image from "next/image";
import Link from "next/link";

export default function latestBlogItem({ blog }) {
  return (
    <div className="overflow-hidden rounded-lg bg-base-100 text-base-content transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:p-6">
        <div>
          <h3 className="text-lg font-semibold text-base-content">
            {blog.title}
          </h3>
          <p className="text-secondary text-opacity-60 font-normal">
            {blog.shortDescription}
          </p>
        </div>
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center text-sm text-primary font-medium hover:text-primary-700"
        >
          Read More
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

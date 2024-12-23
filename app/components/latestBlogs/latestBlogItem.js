import Image from "next/image";
import Link from "next/link";

export default function latestBlogItem({ blog }) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white text-sm text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 transition-all hover:shadow-2xl">
      <div className="relative h-48 w-full">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-900">{blog.title}</h3>
        <p className="mb-4 text-slate-500">{blog.shortDescription}</p>
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
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

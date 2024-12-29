import Image from "next/image";
import Link from "next/link";

export default function latestBlogItem({ blog }) {
  return (
    <div className="overflow-hidden rounded-lg bg-base-100 text-base-content transition-all hover:shadow-md">
      <div className="relative h-52 w-full">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 p-6">
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold text-base-content">
            {blog.title}
          </h3>
          <p className="font-normal text-secondary text-opacity-60">
            {blog.shortDescription}
          </p>
        </div>
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-3 text-sm font-medium text-primary hover:text-primary-700"
        >
          <span>Read more</span>
          <ion-icon name="arrow-forward"></ion-icon>
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import type { ProfileData } from "@/lib/types";

interface ProfileSectionProps {
  data: ProfileData;
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <div className="p-8 text-center">
      {/* Profile Photo with Badge */}
      <div className="relative mx-auto mb-4 h-32 w-32">
        <Image
          src={data.photo}
          alt={data.name}
          fill
          className="rounded-2xl object-cover"
        />
        {data.badge && (
          <div className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-base-100 bg-primary dark:border-[#1C1C1C]"></div>
        )}
      </div>

      {/* Name */}
      <h2 className="mb-2 text-xl font-bold text-base-content dark:text-base-100">
        {data.name}
      </h2>

      {/* Title */}
      <p className="text-sm text-primary">
        {data.title}
      </p>
    </div>
  );
}

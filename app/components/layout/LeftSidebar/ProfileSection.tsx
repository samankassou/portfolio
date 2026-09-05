import type { ProfileData } from "@/lib/types";

interface ProfileSectionProps {
  data: ProfileData;
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <div className="p-8 text-center">
      {/* Name */}
      <h2 className="mb-2 text-xl font-bold text-base-content dark:text-base-100">
        {data.name}
      </h2>

      {/* Title */}
      <p className="text-sm text-primary">{data.title}</p>
    </div>
  );
}

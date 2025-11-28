import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import type { Certification } from "@/lib/types";

interface CertificationItemProps {
  certification: Certification;
}

export default function CertificationItem({
  certification,
}: CertificationItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-secondary/10 p-6 shadow-sm transition-all hover:shadow-md dark:border-base-800",
        COMMON_CLASSES.CARD_BG
      )}
    >
      {/* Certification Icon/Badge */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
        <ion-icon
          name="ribbon-outline"
          class="text-2xl text-primary dark:text-primary-100"
        ></ion-icon>
      </div>

      {/* Title */}
      <h3 className={`mb-2 text-base font-semibold ${COMMON_CLASSES.TEXT}`}>
        {certification.title}
      </h3>

      {/* Issuer and Date */}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className={COMMON_CLASSES.TEXT_MUTED}>
          {certification.issuer}
        </span>
        <span className="text-secondary/30 dark:text-base-600">•</span>
        <span className="rounded bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary dark:bg-primary/20 dark:text-primary-100">
          {certification.date}
        </span>
      </div>

      {/* Optional Credential ID */}
      {certification.credentialId && (
        <p className={`mt-3 text-xs ${COMMON_CLASSES.TEXT_MUTED}`}>
          ID: {certification.credentialId}
        </p>
      )}
    </div>
  );
}

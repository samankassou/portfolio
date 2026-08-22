import CertificationItem from "./CertificationItem";
import { certifications } from "@/lib/data/certifications";

export default function Certifications() {
  return (
    <ul className="scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible">
      {certifications.map((certification) => (
        <li
          key={certification.id}
          className="w-[88%] shrink-0 snap-start md:w-auto"
        >
          <CertificationItem certification={certification} />
        </li>
      ))}
    </ul>
  );
}

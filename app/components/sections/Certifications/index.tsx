import CertificationItem from "./CertificationItem";
import { certifications } from "@/lib/data/certifications";

export default function Certifications() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {certifications.map((certification) => (
        <li key={certification.id} className="min-w-0">
          <CertificationItem certification={certification} />
        </li>
      ))}
    </ul>
  );
}

import CertificationItem from "./CertificationItem";
import { certifications } from "@/lib/data/certifications";

export default function Certifications() {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {certifications.map((certification) => (
        <li key={certification.id}>
          <CertificationItem certification={certification} />
        </li>
      ))}
    </ul>
  );
}

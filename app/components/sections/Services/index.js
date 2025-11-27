import ServiceCard from "./ServiceCard";
import AdvertCard from "./AdvertCard";
import { services } from "@/lib/data/services";

export default function Services() {

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {services &&
        services.map((service) => (
          <li key={service.id}>
            <ServiceCard key={service.id} service={service} />
          </li>
        ))}
      <AdvertCard key="adverd-card" />
    </ul>
  );
}

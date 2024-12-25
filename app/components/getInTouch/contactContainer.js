import ContactForm from "./contactForm";
import LocalizationCard from "./localizationCard";
import Address from "./address";
import Support from "./support";

export default function contactContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ContactForm />
      <div className="grid grid-cols-1 gap-4">
        <LocalizationCard />
        <Address />
        <Support />
      </div>
    </div>
  );
}

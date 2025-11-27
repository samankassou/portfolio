import ContactForm from "./ContactForm";
import LocalizationCard from "./LocalizationCard";
import Address from "./Address";
import Support from "./Support";

export default function ContactContainer() {
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

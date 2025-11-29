// import ContactForm from "./ContactForm"; // Temporarily disabled
import LocalizationCard from "./LocalizationCard";
import Address from "./Address";
import Support from "./Support";

export default function ContactContainer() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Contact form temporarily disabled */}
      {/* <ContactForm /> */}
      <div className="grid grid-cols-1 gap-4">
        <LocalizationCard />
        <Address />
        <Support />
      </div>
    </div>
  );
}

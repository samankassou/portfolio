import type { ContactInfo as ContactInfoType } from "@/lib/types";

interface ContactInfoProps {
  contacts: ContactInfoType[];
}

export default function ContactInfo({ contacts }: ContactInfoProps) {
  return (
    <div className="px-8 py-6">
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex items-start justify-between gap-3">
            <span className="text-sm font-normal text-base-content dark:text-base-100">
              {contact.label}:
            </span>
            <span
              className={`min-w-0 text-right text-sm font-normal [overflow-wrap:anywhere] ${
                contact.highlight
                  ? "text-accent"
                  : "text-secondary/60 dark:text-base-400"
              }`}
            >
              {contact.label === "Email" && contact.value.includes("@") ? (
                <>
                  {contact.value.split("@")[0]}@<wbr />
                  {contact.value.split("@")[1]}
                </>
              ) : (
                contact.value
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

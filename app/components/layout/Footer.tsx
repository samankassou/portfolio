import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("mx-6 mt-10 rounded-xl px-6 py-5", COMMON_CLASSES.CARD_BG)}>
      <p className="text-center font-normal leading-4 text-base-content dark:text-base-100">
        © {currentYear} Foulla SAMANKASSOU. All rights reserved.
      </p>
    </footer>
  );
}

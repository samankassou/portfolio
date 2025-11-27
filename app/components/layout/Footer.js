export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-6 mt-10 rounded-xl bg-base-100 px-6 py-5 dark:bg-[#1C1C1C]">
      <p className="text-center font-normal leading-4 text-base-content dark:text-base-100">
        © {currentYear} Foulla SAMANKASSOU. All rights reserved.
      </p>
    </footer>
  );
}
